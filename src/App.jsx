import { useEffect, useMemo, useState } from 'react';
import { supabase, isSupabaseConfigured, FAMILY_ID, FILE_BUCKET } from './supabase';
import { SUBJECTS, SUMMER_PROGRAM } from './program';

const EMPTY = { weeks: [], themes: [], tasks: [], resources: [], grades: [], learning_notes: [], checkins: [] };

function App() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState(EMPTY);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('dashboard');
  const [message, setMessage] = useState('');

  const isAdmin = profile?.role === 'admin';
  const isStudent = profile?.role === 'student';

  useEffect(() => {
    if (!isSupabaseConfigured) { setLoading(false); return; }
    let active = true;
    async function init() {
      const { data: auth } = await supabase.auth.getSession();
      if (!active) return;
      setSession(auth.session);
      if (auth.session?.user) await loadProfileAndData(auth.session.user.id);
      else setLoading(false);
    }
    init();
    const { data: sub } = supabase.auth.onAuthStateChange(async (_event, nextSession) => {
      setSession(nextSession);
      if (nextSession?.user) await loadProfileAndData(nextSession.user.id);
      else { setProfile(null); setData(EMPTY); setLoading(false); }
    });
    return () => { active = false; sub?.subscription?.unsubscribe(); };
  }, []);

  async function loadProfileAndData(userId) {
    setLoading(true);
    const { data: p, error } = await supabase.from('profiles').select('*').eq('id', userId).maybeSingle();
    if (error) setMessage(error.message);
    setProfile(p || null);
    if (p) await loadAll(p.family_id);
    setLoading(false);
  }

  async function loadAll(familyId = profile?.family_id || FAMILY_ID) {
    const [weeks, themes, tasks, resources, grades, notes, checkins] = await Promise.all([
      supabase.from('weeks').select('*').eq('family_id', familyId).order('week_number', { ascending: true }),
      supabase.from('themes').select('*').eq('family_id', familyId).order('week_id').order('day_number').order('created_at'),
      supabase.from('tasks').select('*').eq('family_id', familyId).order('created_at'),
      supabase.from('resources').select('*').eq('family_id', familyId).order('created_at', { ascending: false }),
      supabase.from('grades').select('*').eq('family_id', familyId).order('created_at', { ascending: false }),
      supabase.from('learning_notes').select('*').eq('family_id', familyId).order('created_at', { ascending: false }),
      supabase.from('checkins').select('*').eq('family_id', familyId).order('created_at', { ascending: false }),
    ]);
    const error = weeks.error || themes.error || tasks.error || resources.error || grades.error || notes.error || checkins.error;
    if (error) setMessage(error.message);
    setData({
      weeks: weeks.data || [], themes: themes.data || [], tasks: tasks.data || [], resources: resources.data || [],
      grades: grades.data || [], learning_notes: notes.data || [], checkins: checkins.data || []
    });
  }

  if (!isSupabaseConfigured) return <ConfigScreen />;
  if (loading) return <Loader />;
  if (!session) return <Login message={message} setMessage={setMessage} />;
  if (!profile) return <NoAccess />;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand"><span>⚽</span><div><b>Mission Bac 2027</b><small>{isAdmin ? 'Accès Wejden' : 'Accès Ayoub'}</small></div></div>
        <button className={view==='dashboard'?'active':''} onClick={()=>setView('dashboard')}>🏟️ Dashboard</button>
        <button className={view==='planning'?'active':''} onClick={()=>setView('planning')}>📅 Programme par jours</button>
        <button className={view==='resources'?'active':''} onClick={()=>setView('resources')}>📎 Fichiers</button>
        <button className={view==='grades'?'active':''} onClick={()=>setView('grades')}>📝 Notes</button>
        <button className={view==='notebook'?'active':''} onClick={()=>setView('notebook')}>🧠 Carnet d’erreurs</button>
        <button className={view==='checkins'?'active':''} onClick={()=>setView('checkins')}>💬 Check-ins</button>
        <button className="logout" onClick={()=>supabase.auth.signOut()}>Déconnexion</button>
        <div className="profile"><b>{profile.full_name}</b><small>{profile.email}</small><em>{profile.role}</em></div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div><p className="eyebrow">{isAdmin ? 'Pilotage admin' : 'Espace élève'}</p><h1>{isAdmin ? 'Suivi professionnel d’Ayoub' : 'Tes missions de progression'}</h1></div>
          <button className="secondary" onClick={()=>loadAll()}>Actualiser</button>
        </header>
        {message && <div className="notice"><span>{message}</span><button onClick={()=>setMessage('')}>×</button></div>}

        {view==='dashboard' && <Dashboard data={data} profile={profile} isAdmin={isAdmin} setMessage={setMessage} reload={loadAll} setView={setView} />}
        {view==='planning' && <Planning data={data} profile={profile} isAdmin={isAdmin} isStudent={isStudent} setMessage={setMessage} reload={loadAll} />}
        {view==='resources' && <Resources data={data} profile={profile} isAdmin={isAdmin} setMessage={setMessage} reload={loadAll} />}
        {view==='grades' && <Grades data={data} profile={profile} isAdmin={isAdmin} setMessage={setMessage} reload={loadAll} />}
        {view==='notebook' && <Notebook data={data} profile={profile} isAdmin={isAdmin} isStudent={isStudent} setMessage={setMessage} reload={loadAll} />}
        {view==='checkins' && <Checkins data={data} profile={profile} isStudent={isStudent} setMessage={setMessage} reload={loadAll} />}
      </main>
    </div>
  );
}

function ConfigScreen(){return <div className="center"><div className="auth"><h1>Configuration Supabase manquante</h1><p>Crée un fichier <code>.env.local</code> à la racine du projet.</p><pre>{`VITE_SUPABASE_URL=https://ton-projet.supabase.co\nVITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon`}</pre><p>Ensuite, arrête puis relance <code>npm run dev</code>.</p></div></div>}
function Loader(){return <div className="center"><div className="loader"/><p>Chargement...</p></div>}
function NoAccess(){return <div className="center"><div className="auth"><h1>Accès non autorisé</h1><p>Ton compte existe dans Auth, mais pas dans la table profiles.</p><button onClick={()=>supabase.auth.signOut()}>Déconnexion</button></div></div>}
function Login({message,setMessage}){const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); async function submit(e){e.preventDefault(); setMessage(''); const {error}=await supabase.auth.signInWithPassword({email,password}); if(error)setMessage(error.message)} return <div className="login"><div className="loginText"><p className="eyebrow">Plateforme privée</p><h1>Mission Bac 2027</h1><p>Deux accès uniquement : Wejden admin et Ayoub élève.</p></div><form className="auth" onSubmit={submit}><h2>Connexion</h2><input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required/><input type="password" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)} required/><button className="primary">Se connecter</button>{message&&<p className="error">{message}</p>}</form></div>}

function Dashboard({data, profile, isAdmin, setMessage, reload, setView}){
  const stats = useMemo(()=>subjectStats(data),[data]);
  const weekHours = data.weeks.map(w => ({ week:w, hours: sumWeekHours(w, data), progress: weekProgress(w, data) }));
  const toValidate = data.tasks.filter(t=>t.status==='done_by_ayoub').length;
  const openNotes = data.learning_notes.filter(n=>n.status!=='resolved').length;
  async function seed(){
    if(data.weeks.length && !confirm('Le programme existe déjà. Ajouter quand même ?')) return;
    try{
      for(const week of SUMMER_PROGRAM){
        const {data:w,error:we}=await supabase.from('weeks').insert({family_id:profile.family_id,week_number:week.week_number,title:week.title,objective:week.objective,status:'planned',target_hours:week.target_hours}).select().single();
        if(we) throw we;
        for(const day of week.days){
          for(const theme of day.themes){
            const {data:th,error:te}=await supabase.from('themes').insert({family_id:profile.family_id,week_id:w.id,day_number:day.day_number,planned_hours:theme.planned_hours,activity_kind:theme.activity_kind,subject:theme.subject,title:theme.title,objective:theme.objective,description:day.title,status:'assigned',priority:theme.activity_kind==='diagnostic'?'urgent':'normal',estimated_minutes:Math.round(theme.planned_hours*60),diagnostic_questions:theme.diagnostic_questions||[],created_by:profile.id}).select().single();
            if(te) throw te;
            const rows = theme.tasks.map(x=>({family_id:profile.family_id,theme_id:th.id,title:x,instructions:'À faire, puis noter les erreurs et blocages dans le carnet.'}));
            if(rows.length){ const {error:ta}=await supabase.from('tasks').insert(rows); if(ta) throw ta; }
          }
        }
      }
      setMessage('Programme v5 initialisé avec planning par jours, heures et tests diagnostic.'); reload();
    }catch(e){setMessage(e.message)}
  }
  return <section className="page">
    <div className="hero"><div><p className="eyebrow">Objectif été</p><h2>Construire les bases, mesurer le niveau, corriger les erreurs</h2><p>Le programme est organisé par semaines, heures prévues et 5 jours de travail. La semaine 1 contient des tests diagnostic complets avec exercices et corrigés attendus.</p><div className="actions">{isAdmin&&<button className="primary" onClick={seed}>Initialiser le programme v5</button>}<button className="secondary" onClick={()=>setView('planning')}>Voir le planning</button><button className="secondary" onClick={()=>setView('notebook')}>Carnet d’erreurs</button></div></div></div>
    <div className="kpis"><Kpi label="Semaines" value={data.weeks.length}/><Kpi label="Tâches à valider" value={toValidate}/><Kpi label="Notes ouvertes" value={openNotes}/><Kpi label="Moyenne tests" value={average(data.grades) || '—'}/></div>
    <div className="grid2"><Card title="Progression par matière"><Bars stats={stats}/></Card><Card title="Heures prévues par semaine"><div className="weekHours">{weekHours.map(x=><div key={x.week.id} className="hourRow"><b>S{x.week.week_number}</b><span>{x.hours.toFixed(1)}h prévues</span><em>{x.progress.percent}% fait</em></div>)}</div></Card></div>
  </section>
}

function Planning({data, profile, isAdmin, isStudent, setMessage, reload}){
  const [selectedWeek, setSelectedWeek] = useState(data.weeks[0]?.id || '');
  useEffect(()=>{ if(!selectedWeek && data.weeks[0]) setSelectedWeek(data.weeks[0].id); },[data.weeks, selectedWeek]);
  const week = data.weeks.find(w=>w.id===selectedWeek) || data.weeks[0];
  const days = [1,2,3,4,5];
  async function markDone(task){ const comment = prompt('Commentaire pour Wejden : qu’as-tu fait ? Où as-tu bloqué ?') || ''; const {error}=await supabase.from('tasks').update({status:'done_by_ayoub',student_comment:comment}).eq('id',task.id); if(error)setMessage(error.message); else reload(); }
  async function updateTask(task, patch){ const {error}=await supabase.from('tasks').update(patch).eq('id',task.id); if(error)setMessage(error.message); else reload(); }
  async function repeatTheme(theme){
    const currentWeek = data.weeks.find(w=>w.id===theme.week_id); const nextWeek = data.weeks.find(w=>w.week_number === (currentWeek?.week_number||0)+1);
    if(!nextWeek){setMessage('Aucune semaine suivante. Crée ou initialise la semaine suivante.');return;}
    const {data:newTheme,error}=await supabase.from('themes').insert({family_id:profile.family_id,week_id:nextWeek.id,day_number:1,planned_hours:theme.planned_hours,activity_kind:'reprise',subject:theme.subject,title:'Reprise · '+theme.title,objective:theme.objective,description:'Repris depuis la semaine '+currentWeek.week_number,status:'assigned',priority:'high',estimated_minutes:theme.estimated_minutes,diagnostic_questions:theme.diagnostic_questions||[],created_by:profile.id,repeated_from:theme.id}).select().single();
    if(error){setMessage(error.message);return;}
    const oldTasks = data.tasks.filter(t=>t.theme_id===theme.id);
    if(oldTasks.length){ const {error:e2}=await supabase.from('tasks').insert(oldTasks.map(t=>({family_id:profile.family_id,theme_id:newTheme.id,title:'Reprise · '+t.title,instructions:t.instructions}))); if(e2){setMessage(e2.message);return;} }
    await supabase.from('themes').update({status:'repeat_next_week'}).eq('id',theme.id); setMessage('Thème ajouté à la semaine suivante.'); reload();
  }
  async function validateWeek(){ if(!week)return; const {error}=await supabase.from('weeks').update({status:'validated',validated_at:new Date().toISOString()}).eq('id',week.id); if(error)setMessage(error.message); else reload(); }
  if(!week) return <section className="page"><Title title="Programme" subtitle="Aucune semaine. Connecte-toi en admin et initialise le programme v5."/></section>;
  return <section className="page"><Title title="Programme par semaine, par jour et par heures" subtitle="Chaque semaine contient 5 jours. Les heures prévues sont calculées automatiquement à partir des thèmes."/>
    <div className="tabs">{data.weeks.map(w=><button key={w.id} className={w.id===week.id?'active':''} onClick={()=>setSelectedWeek(w.id)}>S{w.week_number}<small>{sumWeekHours(w,data).toFixed(1)}h</small></button>)}</div>
    <div className="weekHeader"><div><h2>S{week.week_number} · {week.title}</h2><p>{week.objective}</p></div><div className="score"><b>{sumWeekHours(week,data).toFixed(1)}h</b><small>prévues</small></div>{isAdmin&&<button className="primary" onClick={validateWeek}>Valider la semaine</button>}</div>
    <div className="days">{days.map(day=>{const themes=data.themes.filter(t=>t.week_id===week.id && Number(t.day_number||1)===day); const h=themes.reduce((s,t)=>s+Number(t.planned_hours||0),0); return <div className="day" key={day}><h2>Jour {day} <span>{h.toFixed(1)}h</span></h2>{themes.length===0&&<p className="muted">Aucun thème.</p>}{themes.map(theme=><ThemeCard key={theme.id} theme={theme} data={data} isAdmin={isAdmin} isStudent={isStudent} markDone={markDone} updateTask={updateTask} repeatTheme={repeatTheme}/>)}</div>})}</div>
  </section>
}

function ThemeCard({theme,data,isAdmin,isStudent,markDone,updateTask,repeatTheme}){
  const tasks=data.tasks.filter(t=>t.theme_id===theme.id); const resources=data.resources.filter(r=>r.theme_id===theme.id); const questions=Array.isArray(theme.diagnostic_questions)?theme.diagnostic_questions:[];
  return <article className="theme"><div className="themeTop"><span className="subject" style={{'--c':SUBJECTS[theme.subject]?.color}}>{SUBJECTS[theme.subject]?.icon} {SUBJECTS[theme.subject]?.label}</span><span className="kind">{theme.activity_kind}</span><span>{Number(theme.planned_hours||0).toFixed(1)}h</span></div><h3>{theme.title}</h3><p>{theme.objective}</p>
    {questions.length>0&&<details className="diagnostic" open={theme.activity_kind==='diagnostic'}><summary>Voir les exercices diagnostic ({questions.length})</summary><ol>{questions.map((x,i)=><li key={i}><b>{x.question}</b><small>Barème : {x.points || 1} pt{x.points>1?'s':''}</small>{x.hint&&<em>Indice : {x.hint}</em>}{isAdmin&&<p className="expected">Réponse attendue : {x.expected}</p>}</li>)}</ol></details>}
    <div className="taskList">{tasks.map(t=><div key={t.id} className={'task '+t.status}><div><b>{t.title}</b><p>{t.instructions}</p>{t.student_comment&&<small><b>Ayoub :</b> {t.student_comment}</small>}{t.admin_comment&&<small><b>Wejden :</b> {t.admin_comment}</small>}</div><div className="actions">{isStudent&&t.status==='assigned'&&<button className="primary small" onClick={()=>markDone(t)}>J’ai terminé</button>}{isAdmin&&<><button className="primary small" onClick={()=>updateTask(t,{status:'validated_by_admin'})}>Valider</button><button className="secondary small" onClick={()=>updateTask(t,{status:'rejected_by_admin',admin_comment:prompt('Commentaire de refus')||''})}>Refuser</button></>}</div></div>)}</div>
    {resources.length>0&&<div className="files">{resources.map(r=><ResourceButton key={r.id} resource={r}/>)}</div>}
    {isAdmin&&<div className="actions right"><button className="secondary small" onClick={()=>repeatTheme(theme)}>Repasser semaine suivante</button></div>}
  </article>
}

function Resources({data, profile, isAdmin, setMessage, reload}){
  const [form,setForm]=useState({subject:'maths',type:'support',theme_id:'',title:'',description:''}); const [file,setFile]=useState(null);
  async function upload(e){e.preventDefault(); if(!file){setMessage('Ajoute un fichier.');return;} const clean=file.name.replace(/[^a-zA-Z0-9._-]/g,'_'); const path=`${profile.family_id}/${Date.now()}-${clean}`; const up=await supabase.storage.from(FILE_BUCKET).upload(path,file); if(up.error){setMessage(up.error.message);return;} const ins=await supabase.from('resources').insert({family_id:profile.family_id,subject:form.subject,type:form.type,theme_id:form.theme_id||null,title:form.title,description:form.description,file_path:path,file_name:file.name,file_size:file.size,mime_type:file.type,created_by:profile.id}); if(ins.error)setMessage(ins.error.message); else{setMessage('Fichier ajouté.'); setForm({subject:'maths',type:'support',theme_id:'',title:'',description:''}); setFile(null); reload();}}
  return <section className="page"><Title title="Fichiers, cours et exercices" subtitle="Ajout réservé à l’admin. Ayoub peut consulter les fichiers privés via des liens temporaires."/>{isAdmin&&<Card title="Ajouter un fichier"><form className="form" onSubmit={upload}><select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}>{Object.entries(SUBJECTS).map(([k,s])=><option key={k} value={k}>{s.label}</option>)}</select><select value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option value="cours">Cours</option><option value="exercice">Exercice</option><option value="support">Support</option><option value="correction">Correction</option><option value="autre">Autre</option></select><select value={form.theme_id} onChange={e=>setForm({...form,theme_id:e.target.value})}><option value="">Sans thème</option>{data.themes.map(t=><option key={t.id} value={t.id}>{SUBJECTS[t.subject]?.label} · {t.title}</option>)}</select><input placeholder="Titre" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required/><textarea placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/><input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} required/><button className="primary">Ajouter</button></form></Card>}<div className="grid3">{data.resources.map(r=><div className="card" key={r.id}><span className="subject" style={{'--c':SUBJECTS[r.subject]?.color}}>{SUBJECTS[r.subject]?.label}</span><h3>{r.title}</h3><p>{r.description}</p><small>{r.type} · {r.file_name}</small><ResourceButton resource={r}/></div>)}</div></section>
}
function ResourceButton({resource}){async function open(){const {data,error}=await supabase.storage.from(FILE_BUCKET).createSignedUrl(resource.file_path,600); if(error)alert(error.message); else window.open(data.signedUrl,'_blank');} return <button className="secondary small" onClick={open}>📎 Ouvrir</button>}

function Grades({data, profile, isAdmin, setMessage, reload}){
  const [g,setG]=useState({subject:'maths',week_id:'',theme_id:'',title:'',grade:'',max_grade:20,admin_comment:''});
  async function add(e){e.preventDefault(); const {error}=await supabase.from('grades').insert({family_id:profile.family_id,subject:g.subject,week_id:g.week_id||null,theme_id:g.theme_id||null,title:g.title,grade:Number(g.grade),max_grade:Number(g.max_grade),admin_comment:g.admin_comment,created_by:profile.id}); if(error)setMessage(error.message); else{setMessage('Note ajoutée.'); setG({subject:'maths',week_id:'',theme_id:'',title:'',grade:'',max_grade:20,admin_comment:''}); reload();}}
  return <section className="page"><Title title="Notes et évaluations" subtitle="Les notes chiffrées sont ajoutées par Wejden. Ayoub note ses erreurs dans le carnet d’erreurs."/>{isAdmin&&<Card title="Ajouter une note"><form className="form" onSubmit={add}><select value={g.subject} onChange={e=>setG({...g,subject:e.target.value})}>{Object.entries(SUBJECTS).map(([k,s])=><option key={k} value={k}>{s.label}</option>)}</select><select value={g.week_id} onChange={e=>setG({...g,week_id:e.target.value})}><option value="">Semaine non liée</option>{data.weeks.map(w=><option key={w.id} value={w.id}>S{w.week_number}</option>)}</select><select value={g.theme_id} onChange={e=>setG({...g,theme_id:e.target.value})}><option value="">Thème non lié</option>{data.themes.map(t=><option key={t.id} value={t.id}>{SUBJECTS[t.subject]?.label} · {t.title}</option>)}</select><input placeholder="Titre" value={g.title} onChange={e=>setG({...g,title:e.target.value})} required/><input type="number" step="0.25" placeholder="Note" value={g.grade} onChange={e=>setG({...g,grade:e.target.value})} required/><input type="number" step="0.25" value={g.max_grade} onChange={e=>setG({...g,max_grade:e.target.value})}/><textarea placeholder="Commentaire" value={g.admin_comment} onChange={e=>setG({...g,admin_comment:e.target.value})}/><button className="primary">Ajouter</button></form></Card>}<div className="grid3">{data.grades.map(x=><div className="card" key={x.id}><h2>{x.grade}/{x.max_grade}</h2><span className="subject" style={{'--c':SUBJECTS[x.subject]?.color}}>{SUBJECTS[x.subject]?.label}</span><h3>{x.title}</h3><p>{x.admin_comment}</p></div>)}</div></section>
}

function Notebook({data, profile, isAdmin, isStudent, setMessage, reload}){
  const [n,setN]=useState({subject:'maths',week_id:'',theme_id:'',task_id:'',note_type:'erreur',title:'',content:'',action_plan:'',self_score:'',self_max:20});
  const themes = data.themes.filter(t=>!n.subject || t.subject===n.subject); const tasks = data.tasks.filter(t=>!n.theme_id || t.theme_id===n.theme_id);
  async function add(e){e.preventDefault(); const {error}=await supabase.from('learning_notes').insert({family_id:profile.family_id,created_by:profile.id,subject:n.subject,week_id:n.week_id||null,theme_id:n.theme_id||null,task_id:n.task_id||null,note_type:n.note_type,title:n.title,content:n.content,action_plan:n.action_plan,self_score:n.self_score===''?null:Number(n.self_score),self_max:Number(n.self_max)||20}); if(error)setMessage(error.message); else{setMessage('Note ajoutée au carnet.'); setN({subject:'maths',week_id:'',theme_id:'',task_id:'',note_type:'erreur',title:'',content:'',action_plan:'',self_score:'',self_max:20}); reload();}}
  async function update(note,patch){const {error}=await supabase.from('learning_notes').update({...patch,updated_at:new Date().toISOString()}).eq('id',note.id); if(error)setMessage(error.message); else reload();}
  return <section className="page"><Title title="Carnet d’erreurs et points de blocage" subtitle="Ayoub doit écrire ses erreurs, ses blocages, ses questions et son plan d’action. C’est le cœur de la progression."/>{isStudent&&<Card title="Ajouter une erreur, un blocage ou une méthode"><form className="form" onSubmit={add}><select value={n.subject} onChange={e=>setN({...n,subject:e.target.value,theme_id:'',task_id:''})}>{Object.entries(SUBJECTS).map(([k,s])=><option key={k} value={k}>{s.label}</option>)}</select><select value={n.note_type} onChange={e=>setN({...n,note_type:e.target.value})}><option value="erreur">Erreur faite</option><option value="blocage">Point de blocage</option><option value="question">Question</option><option value="methode">Méthode à retenir</option><option value="revision">À réviser</option><option value="autre">Autre</option></select><select value={n.week_id} onChange={e=>setN({...n,week_id:e.target.value})}><option value="">Semaine non liée</option>{data.weeks.map(w=><option key={w.id} value={w.id}>S{w.week_number}</option>)}</select><select value={n.theme_id} onChange={e=>setN({...n,theme_id:e.target.value,task_id:''})}><option value="">Thème non lié</option>{themes.map(t=><option key={t.id} value={t.id}>{SUBJECTS[t.subject]?.label} · {t.title}</option>)}</select><select value={n.task_id} onChange={e=>setN({...n,task_id:e.target.value})}><option value="">Tâche non liée</option>{tasks.map(t=><option key={t.id} value={t.id}>{t.title}</option>)}</select><input placeholder="Titre court" value={n.title} onChange={e=>setN({...n,title:e.target.value})} required/><textarea placeholder="Explique exactement l’erreur ou le blocage." value={n.content} onChange={e=>setN({...n,content:e.target.value})} required/><textarea placeholder="Plan d’action : comment éviter cette erreur ?" value={n.action_plan} onChange={e=>setN({...n,action_plan:e.target.value})}/><input type="number" step="0.25" placeholder="Score personnel si test, ex. 8" value={n.self_score} onChange={e=>setN({...n,self_score:e.target.value})}/><input type="number" step="0.25" value={n.self_max} onChange={e=>setN({...n,self_max:e.target.value})}/><button className="primary">Ajouter au carnet</button></form></Card>}<div className="notes">{data.learning_notes.map(note=><div className={'card note '+note.status} key={note.id}><span className="subject" style={{'--c':SUBJECTS[note.subject]?.color}}>{SUBJECTS[note.subject]?.label}</span><span className="kind">{note.note_type}</span><h3>{note.title}</h3><p>{note.content}</p>{note.action_plan&&<p><b>Plan d’action :</b> {note.action_plan}</p>}{note.self_score!==null&&note.self_score!==undefined&&<p><b>Score personnel :</b> {note.self_score}/{note.self_max}</p>}{note.admin_feedback&&<p className="feedback"><b>Réponse Wejden :</b> {note.admin_feedback}</p>}{isAdmin&&<AdminFeedback note={note} update={update}/>} {isStudent&&note.status!=='resolved'&&<button className="secondary small" onClick={()=>update(note,{status:'resolved'})}>J’ai compris</button>}</div>)}</div></section>
}
function AdminFeedback({note, update}){const [txt,setTxt]=useState(note.admin_feedback||''); return <div><textarea value={txt} onChange={e=>setTxt(e.target.value)} placeholder="Réponse, méthode ou conseil pour Ayoub"/><div className="actions"><button className="primary small" onClick={()=>update(note,{admin_feedback:txt,status:'reviewed'})}>Répondre</button><button className="secondary small" onClick={()=>update(note,{admin_feedback:txt,status:'resolved'})}>Marquer résolu</button></div></div>}

function Checkins({data, profile, isStudent, setMessage, reload}){const [c,setC]=useState({mood:'motivé',energy:3,worked_minutes:0,blockage:''}); async function add(e){e.preventDefault(); const {error}=await supabase.from('checkins').insert({family_id:profile.family_id,created_by:profile.id,mood:c.mood,energy:Number(c.energy),worked_minutes:Number(c.worked_minutes),blockage:c.blockage}); if(error)setMessage(error.message); else{setC({mood:'motivé',energy:3,worked_minutes:0,blockage:''}); reload();}} return <section className="page"><Title title="Check-ins" subtitle="Ayoub peut dire comment il se sent, combien de temps il a travaillé et ce qui bloque."/>{isStudent&&<Card title="Mon check-in"><form className="form" onSubmit={add}><select value={c.mood} onChange={e=>setC({...c,mood:e.target.value})}><option>motivé</option><option>normal</option><option>fatigué</option><option>bloqué</option></select><input type="number" min="1" max="5" value={c.energy} onChange={e=>setC({...c,energy:e.target.value})}/><input type="number" min="0" value={c.worked_minutes} onChange={e=>setC({...c,worked_minutes:e.target.value})}/><textarea placeholder="Blocage ou remarque" value={c.blockage} onChange={e=>setC({...c,blockage:e.target.value})}/><button className="primary">Envoyer</button></form></Card>}<div className="grid3">{data.checkins.map(x=><div className="card" key={x.id}><h3>{x.mood}</h3><p>Énergie {x.energy}/5 · {x.worked_minutes} min</p><p>{x.blockage}</p></div>)}</div></section>}

function Title({title,subtitle}){return <div className="title"><p className="eyebrow">Mission Bac 2027</p><h2>{title}</h2><p>{subtitle}</p></div>}
function Card({title,children}){return <div className="card">{title&&<h2>{title}</h2>}{children}</div>}
function Kpi({label,value}){return <div className="kpi"><small>{label}</small><b>{value}</b></div>}
function Bars({stats}){return <div className="bars">{stats.map(s=><div className="barrow" key={s.subject}><b>{s.label}</b><div className="bar"><span style={{width:s.percent+'%',background:SUBJECTS[s.subject]?.color}}/></div><small>{s.percent}% · moyenne {s.avg || '—'}</small></div>)}</div>}
function subjectStats(data){return Object.entries(SUBJECTS).map(([subject,s])=>{const themes=data.themes.filter(t=>t.subject===subject); const tasks=data.tasks.filter(t=>themes.some(th=>th.id===t.theme_id)); const done=tasks.filter(t=>['done_by_ayoub','validated_by_admin'].includes(t.status)).length; const grades=data.grades.filter(g=>g.subject===subject); const avg=grades.length?(grades.reduce((sum,g)=>sum+Number(g.grade)/Number(g.max_grade)*20,0)/grades.length).toFixed(1):null; return {subject,label:s.label,total:tasks.length,done,percent:tasks.length?Math.round(done/tasks.length*100):0,avg};})}
function weekProgress(w,data){const th=data.themes.filter(t=>t.week_id===w.id); const tasks=data.tasks.filter(t=>th.some(x=>x.id===t.theme_id)); const done=tasks.filter(t=>['done_by_ayoub','validated_by_admin'].includes(t.status)).length; return {total:tasks.length,done,percent:tasks.length?Math.round(done/tasks.length*100):0}}
function sumWeekHours(w,data){return data.themes.filter(t=>t.week_id===w.id).reduce((s,t)=>s+Number(t.planned_hours||0),0)}
function average(grades){if(!grades.length)return null; return (grades.reduce((s,g)=>s+Number(g.grade)/Number(g.max_grade)*20,0)/grades.length).toFixed(2)+'/20'}

export default App;
