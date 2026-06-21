
create table if not exists public.learning_notes (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  created_by uuid references public.profiles(id) on delete set null,
  week_id uuid references public.weeks(id) on delete set null,
  theme_id uuid references public.themes(id) on delete set null,
  task_id uuid references public.tasks(id) on delete set null,
  subject text not null check(subject in('maths','physique','chimie','svt','informatique')),
  note_type text not null default 'erreur' check(note_type in('erreur','blocage','question','methode','idee','revision','autre')),
  title text not null,
  content text not null,
  action_plan text,
  admin_feedback text,
  status text not null default 'open' check(status in('open','reviewed','resolved')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.learning_notes enable row level security;

drop policy if exists learning_notes_read on public.learning_notes;
create policy learning_notes_read on public.learning_notes for select using(public.is_member() and family_id=public.current_family_id());

drop policy if exists learning_notes_student_insert on public.learning_notes;
create policy learning_notes_student_insert on public.learning_notes for insert with check(public.current_role()='student' and created_by=auth.uid() and family_id=public.current_family_id());

drop policy if exists learning_notes_admin_insert on public.learning_notes;
create policy learning_notes_admin_insert on public.learning_notes for insert with check(public.is_admin() and family_id=public.current_family_id());

drop policy if exists learning_notes_student_update on public.learning_notes;
create policy learning_notes_student_update on public.learning_notes for update using(public.current_role()='student' and created_by=auth.uid() and family_id=public.current_family_id()) with check(public.current_role()='student' and created_by=auth.uid() and family_id=public.current_family_id());

drop policy if exists learning_notes_admin_update on public.learning_notes;
create policy learning_notes_admin_update on public.learning_notes for update using(public.is_admin() and family_id=public.current_family_id()) with check(public.is_admin() and family_id=public.current_family_id());

drop policy if exists learning_notes_student_delete on public.learning_notes;
create policy learning_notes_student_delete on public.learning_notes for delete using(public.current_role()='student' and created_by=auth.uid() and family_id=public.current_family_id());

drop policy if exists learning_notes_admin_delete on public.learning_notes;
create policy learning_notes_admin_delete on public.learning_notes for delete using(public.is_admin() and family_id=public.current_family_id());
