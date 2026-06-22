export const SUBJECTS = {
  maths: { label: 'Maths', icon: '📐', color: '#2563eb' },
  physique: { label: 'Physique', icon: '🧲', color: '#7c3aed' },
  chimie: { label: 'Chimie', icon: '⚗️', color: '#0f766e' },
  svt: { label: 'SVT', icon: '🧬', color: '#16a34a' },
  informatique: { label: 'Informatique', icon: '💻', color: '#ea580c' },
};

export const DIAGNOSTIC_EXERCISES = {
  maths: [
    { title: 'Diagnostic maths 1 · calcul et priorités', duration_minutes: 35, points: 20, difficulty: 'diagnostic', question: `1) Calculer : 7 - 3 × 2 + 8 ÷ 4.\n2) Calculer : (-3)² - 2 × (-4).\n3) Réduire : 5x + 3 - 2x + 7.\n4) Développer : 3(2x - 5).\n5) Factoriser : 6x + 9.\n6) Résoudre : 2x + 5 = 17.\n7) Résoudre : 3x - 4 < 11.\n8) Calculer : 2/3 + 5/6.\n9) Simplifier : 12/18.\n10) Donner l'image de 2 par f(x)=3x-1.`, expected_answer: `1) 3. 2) 17. 3) 3x+10. 4) 6x-15. 5) 3(2x+3). 6) x=6. 7) x<5. 8) 3/2. 9) 2/3. 10) 5.`, correction: `On évalue surtout les erreurs de signe, priorités, fractions, développement et équations. Si Ayoub a moins de 10/20, reprendre calcul littéral avant toute notion de bac.` },
    { title: 'Diagnostic maths 2 · fonctions et lecture graphique', duration_minutes: 30, points: 20, difficulty: 'diagnostic', question: `1) Pour f(x)=x²-4, calculer f(0), f(2), f(-3).\n2) Résoudre f(x)=0 pour f(x)=x²-4.\n3) Une fonction affine passe par A(0;2) et B(2;6). Trouver son coefficient directeur.\n4) Donner l'expression de cette fonction affine.\n5) Expliquer avec une phrase ce que signifie : f est croissante sur [0; +∞[.`, expected_answer: `1) -4, 0, 5. 2) x=-2 ou x=2. 3) coefficient directeur = 2. 4) f(x)=2x+2. 5) Quand x augmente dans cet intervalle, f(x) augmente aussi.`, correction: `Objectif : voir s'il comprend image, antécédent, zéro d'une fonction, coefficient directeur et phrase mathématique.` }
  ],
  physique: [
    { title: 'Diagnostic physique 1 · unités et mouvement', duration_minutes: 30, points: 20, difficulty: 'diagnostic', question: `1) Convertir 72 km/h en m/s.\n2) Convertir 2500 g en kg.\n3) Une voiture parcourt 150 m en 10 s. Calculer sa vitesse.\n4) Donner l'unité SI de la force, de la masse et de l'énergie.\n5) Un objet de masse 2 kg est soumis à g=10 N/kg. Calculer son poids.\n6) Expliquer la différence entre masse et poids.`, expected_answer: `1) 20 m/s. 2) 2,5 kg. 3) 15 m/s. 4) force N, masse kg, énergie J. 5) P=20 N. 6) La masse est la quantité de matière en kg, le poids est une force en N.`, correction: `S'il rate les conversions, il faut reprendre les unités tous les jours pendant deux semaines.` },
    { title: 'Diagnostic physique 2 · forces et énergie', duration_minutes: 35, points: 20, difficulty: 'diagnostic', question: `1) Citer deux forces qui s'appliquent sur un livre posé sur une table.\n2) Faire le bilan des forces d'un objet suspendu à un fil.\n3) Calculer l'énergie cinétique d'un corps de masse 4 kg se déplaçant à 3 m/s. Formule : Ec = 1/2 mv².\n4) Une force de 10 N déplace un objet de 5 m dans la même direction. Calculer le travail.\n5) Pourquoi faut-il toujours écrire les unités dans un exercice de physique ?`, expected_answer: `1) Poids et réaction de la table. 2) Poids vers le bas, tension du fil vers le haut. 3) Ec=18 J. 4) W=50 J. 5) Pour vérifier la grandeur, éviter les confusions et justifier le résultat.`, correction: `On évalue la capacité à représenter une situation physique, pas seulement appliquer une formule.` }
  ],
  chimie: [
    { title: 'Diagnostic chimie 1 · atome, mole et solution', duration_minutes: 35, points: 20, difficulty: 'diagnostic', question: `1) Différencier atome, ion et molécule avec un exemple.\n2) Calculer la masse molaire de H₂O. Données : H=1 g/mol, O=16 g/mol.\n3) Calculer n pour m=18 g d'eau et M=18 g/mol.\n4) Une solution contient 5 g de sel dans 250 mL. Calculer la concentration massique en g/L.\n5) Équilibrer : H₂ + O₂ → H₂O.`, expected_answer: `1) Exemples acceptés : atome Na, ion Na+, molécule H2O. 2) 18 g/mol. 3) n=1 mol. 4) 20 g/L. 5) 2H2 + O2 → 2H2O.`, correction: `On teste vocabulaire, masse molaire, quantité de matière, concentration et équilibrage.` },
    { title: 'Diagnostic chimie 2 · acide-base et redox', duration_minutes: 30, points: 20, difficulty: 'diagnostic', question: `1) Une solution de pH 3 est-elle acide, basique ou neutre ?\n2) Une solution de pH 11 est-elle acide, basique ou neutre ?\n3) Expliquer simplement ce qu'est une dilution.\n4) Dans une réaction redox, que perd l'espèce oxydée ?\n5) Donner une phrase simple qui explique ce qu'est un réactif limitant.`, expected_answer: `1) Acide. 2) Basique. 3) Ajouter du solvant pour diminuer la concentration. 4) Elle perd des électrons. 5) C'est le réactif qui est consommé totalement en premier et bloque la réaction.`, correction: `S'il ne sait pas répondre, ce n'est pas grave : ces notions devront être reprises très lentement.` }
  ],
  svt: [
    { title: 'Diagnostic SVT 1 · cellule, ADN et méthode', duration_minutes: 35, points: 20, difficulty: 'diagnostic', question: `1) Citer trois éléments d'une cellule animale.\n2) Quel est le rôle du noyau ?\n3) Différencier ADN, chromosome et gène.\n4) Observer le document fourni par la plateforme et répondre : que montre le document ? quelle conclusion peut-on tirer ?\n5) Rédiger une réponse en trois étapes : observation, interprétation, conclusion.`, expected_answer: `Réponses attendues : membrane, cytoplasme, noyau. Le noyau contient l'information génétique. ADN = molécule support, chromosome = forme condensée, gène = portion d'ADN liée à un caractère.`, correction: `En SVT, on corrige surtout la méthode : il doit justifier avec le document et ne pas répondre au hasard.` },
    { title: 'Diagnostic SVT 2 · génétique et immunité', duration_minutes: 30, points: 20, difficulty: 'diagnostic', question: `1) Définir allèle, génotype et phénotype.\n2) Expliquer ce qu'est une mutation.\n3) Citer deux acteurs de l'immunité.\n4) Expliquer le rôle d'un anticorps.\n5) Pourquoi la vaccination crée-t-elle une mémoire immunitaire ?`, expected_answer: `Allèle = version d'un gène. Génotype = ensemble des allèles. Phénotype = caractères observables. Mutation = modification de l'ADN. Acteurs : lymphocytes, anticorps, phagocytes. Anticorps reconnaît un antigène. Vaccination prépare une réponse plus rapide.`, correction: `Objectif : repérer les mots mal compris pour faire des fiches simples.` }
  ],
  informatique: [
    { title: 'Diagnostic informatique 1 · variables et conditions', duration_minutes: 30, points: 20, difficulty: 'diagnostic', question: `1) Qu'est-ce qu'une variable ?\n2) Donner le type adapté pour : âge, nom, moyenne, admis ou non.\n3) Écrire un algorithme qui lit une note et affiche admis si note >= 10.\n4) Écrire un algorithme qui affiche le plus grand de deux nombres.`, expected_answer: `Variable = espace mémoire nommé. âge entier, nom chaîne, moyenne réel, admis booléen. Algorithmes avec lire, si, sinon, afficher.`, correction: `On vérifie qu'il comprend l'idée, pas seulement la syntaxe.` },
    { title: 'Diagnostic informatique 2 · boucles et tableaux', duration_minutes: 40, points: 20, difficulty: 'diagnostic', question: `1) Écrire une boucle qui affiche les nombres de 1 à 10.\n2) Écrire un algorithme qui calcule la somme de 5 nombres saisis.\n3) Dans un tableau T de 5 notes, écrire un algorithme qui calcule la moyenne.\n4) Expliquer la différence entre une boucle pour et une boucle tant que.`, expected_answer: `Boucle pour pour un nombre connu de répétitions. Tant que pour une répétition dépendant d'une condition. Somme initialisée à 0 puis accumulation. Moyenne = somme/5.`, correction: `S'il rate les boucles, travailler uniquement boucles et tableaux avant les fonctions.` }
  ]
};

export const SEED_PROGRAM = [
  {
    week_number: 1, title: 'Semaine 1 · Diagnostic complet et reprise en main', target_hours: 20,
    objective: 'Évaluer le vrai niveau d’Ayoub puis repérer les bases à reconstruire.',
    days: [
      { day_number: 1, title: 'Jour 1 · Maths et physique', target_hours: 4, objective: 'Tester calcul, fonctions, unités et mouvement.', lessons: [
        { subject:'maths', title:'Test diagnostic maths', target_minutes:120, objective:'Évaluer calcul, équations et fonctions.', exercises:['maths'], tasks:['Passer les deux tests sans aide.', 'Noter toutes les erreurs dans le carnet d’erreurs.', 'Corriger avec Wejden.'] },
        { subject:'physique', title:'Test diagnostic physique', target_minutes:120, objective:'Évaluer unités, mouvement, forces et énergie.', exercises:['physique'], tasks:['Passer les deux tests.', 'Faire une fiche erreurs unités.', 'Corriger les exercices ratés.'] }
      ]},
      { day_number: 2, title:'Jour 2 · Chimie et SVT', target_hours:4, objective:'Tester atome, mole, solution, cellule, ADN et méthode SVT.', lessons:[
        { subject:'chimie', title:'Test diagnostic chimie', target_minutes:120, objective:'Évaluer atome, mole, solutions, acide-base et redox.', exercises:['chimie'], tasks:['Passer les deux tests.', 'Classer les erreurs par type.', 'Refaire les calculs faux.'] },
        { subject:'svt', title:'Test diagnostic SVT', target_minutes:120, objective:'Évaluer connaissances et méthode documentaire.', exercises:['svt'], tasks:['Passer les deux tests.', 'Refaire les définitions non maîtrisées.', 'Écrire une fiche méthode observation-interprétation-conclusion.'] }
      ]},
      { day_number:3, title:'Jour 3 · Informatique et correction active', target_hours:4, objective:'Tester algorithmique puis corriger activement les erreurs des jours 1 et 2.', lessons:[
        { subject:'informatique', title:'Test diagnostic informatique', target_minutes:120, objective:'Évaluer variables, conditions, boucles et tableaux.', exercises:['informatique'], tasks:['Passer les deux tests.', 'Écrire les algorithmes proprement.', 'Noter les blocages de logique.'] },
        { subject:'maths', title:'Correction active maths', target_minutes:120, objective:'Refaire les exercices de maths ratés sans regarder la correction.', exercises:[], tasks:['Refaire tous les exercices faux.', 'Noter la règle à retenir.', 'Demander validation à Wejden.'] }
      ]},
      { day_number:4, title:'Jour 4 · Correction sciences', target_hours:4, objective:'Corriger physique, chimie, SVT et informatique.', lessons:[
        { subject:'physique', title:'Correction physique', target_minutes:60, objective:'Reprendre unités, schémas et formules.', exercises:[], tasks:['Refaire les exercices faux.', 'Créer une fiche formules unités.'] },
        { subject:'chimie', title:'Correction chimie', target_minutes:60, objective:'Reprendre mole, solution et équations.', exercises:[], tasks:['Refaire les calculs faux.', 'Créer une fiche formules chimie.'] },
        { subject:'svt', title:'Correction SVT', target_minutes:60, objective:'Reprendre vocabulaire et rédaction.', exercises:[], tasks:['Refaire les questions ratées.', 'Créer une fiche vocabulaire.'] },
        { subject:'informatique', title:'Correction informatique', target_minutes:60, objective:'Reprendre variables, conditions et boucles.', exercises:[], tasks:['Refaire les algorithmes faux.', 'Écrire une fiche pseudo-code.'] }
      ]},
      { day_number:5, title:'Jour 5 · Bilan de niveau', target_hours:4, objective:'Faire un bilan clair pour préparer les semaines suivantes.', lessons:[
        { subject:'maths', title:'Bilan maths', target_minutes:45, objective:'Identifier les 3 plus grosses lacunes.', exercises:[], tasks:['Noter top 3 erreurs.', 'Choisir 2 chapitres à reprendre semaine 2.'] },
        { subject:'physique', title:'Bilan physique/chimie', target_minutes:75, objective:'Identifier les lacunes prioritaires.', exercises:[], tasks:['Lister les unités et formules non maîtrisées.', 'Choisir les exercices à refaire.'] },
        { subject:'svt', title:'Bilan SVT', target_minutes:45, objective:'Identifier vocabulaire et méthode à reprendre.', exercises:[], tasks:['Lister définitions à apprendre.', 'Corriger une réponse documentaire.'] },
        { subject:'informatique', title:'Bilan informatique', target_minutes:45, objective:'Identifier les blocages algorithmiques.', exercises:[], tasks:['Lister variables/conditions/boucles/tableaux.', 'Refaire un algorithme complet.'] },
        { subject:'maths', title:'Réunion bilan avec Wejden', target_minutes:30, objective:'Décider du plan personnalisé.', exercises:[], tasks:['Wejden valide ou fait reprendre la semaine.', 'Transformer les erreurs en objectifs.'] }
      ]}
    ]
  },
  {
    week_number: 2, title: 'Semaine 2 · Bases calcul, unités et atome', target_hours: 20, objective: 'Reprendre les lacunes urgentes détectées en semaine 1.',
    days: ['Calcul et fractions','Équations et conversions','Mole et concentration','Cellule et ADN','Boucles simples'].map((title,i)=>({day_number:i+1,title:`Jour ${i+1} · ${title}`,target_hours:4,objective:'Remise à niveau ciblée.',lessons:[
      {subject:'maths',title:'Remise à niveau maths',target_minutes:90,objective:'Calculs, fractions, équations.',exercises:[],tasks:['Lire le cours de la plateforme.','Faire 20 exercices.','Noter les erreurs.']},
      {subject:i%2?'physique':'chimie',title:'Remise à niveau sciences physiques',target_minutes:75,objective:'Unités, mole, concentration ou forces.',exercises:[],tasks:['Faire 15 exercices.','Créer une fiche méthode.']},
      {subject:i%2?'informatique':'svt',title:'Remise à niveau complémentaire',target_minutes:75,objective:'SVT ou algorithmique.',exercises:[],tasks:['Faire 10 exercices ou questions.','Soumettre une preuve.']}
    ]}))
  },
  { week_number:3, title:'Semaine 3 · Fonctions, forces et solutions', target_hours:20, objective:'Installer les bases qui reviendront toute l’année.', days:[] },
  { week_number:4, title:'Semaine 4 · Trigonométrie, énergie et génétique', target_hours:20, objective:'Renforcer les outils scientifiques essentiels.', days:[] },
  { week_number:5, title:'Semaine 5 · Limites, électricité et redox', target_hours:22, objective:'Approcher les chapitres du bac sans brûler les étapes.', days:[] },
  { week_number:6, title:'Semaine 6 · Suites, ondes et immunité', target_hours:22, objective:'Augmenter l’endurance et la méthode.', days:[] },
  { week_number:7, title:'Semaine 7 · Exercices longs et correction active', target_hours:24, objective:'Apprendre à tenir un exercice complet.', days:[] },
  { week_number:8, title:'Semaine 8 · Consolidation et préparation septembre', target_hours:20, objective:'Réparer les derniers trous et préparer la rentrée.', days:[] }
];

for (const week of SEED_PROGRAM) {
  if (!week.days.length) {
    week.days = [1,2,3,4,5].map((n)=>({
      day_number:n, title:`Jour ${n} · Programme personnalisé`, target_hours: Math.round(week.target_hours/5), objective:'Travail structuré par matière avec preuve à soumettre.', lessons:[
        {subject:'maths',title:'Maths · exercices progressifs',target_minutes:100,objective:'Cours + exercices + correction active.',exercises:[],tasks:['Lire le cours.','Faire 20 exercices.','Noter les erreurs.','Soumettre une photo du cahier.']},
        {subject:n%2?'physique':'chimie',title:'Sciences physiques · pratique',target_minutes:80,objective:'Formules, unités et problèmes guidés.',exercises:[],tasks:['Revoir les formules.','Faire 15 exercices.','Soumettre une preuve.']},
        {subject:n%2?'svt':'informatique',title:'SVT/Informatique · méthode',target_minutes:60,objective:'Méthode documentaire ou algorithmique.',exercises:[],tasks:['Faire le travail demandé.','Noter blocages.','Préparer questions pour Wejden.']}
      ]
    }));
  }
}