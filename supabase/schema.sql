create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  role text not null check (role in ('admin','student')),
  family_id text not null default 'ayoub-2027',
  created_at timestamptz not null default now()
);

create table if not exists public.weeks (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_number int not null,
  title text not null,
  objective text,
  target_hours numeric default 0,
  status text not null default 'planned' check (status in ('planned','in_progress','validated','repeat_required')),
  start_date date,
  end_date date,
  admin_note text,
  student_note text,
  validated_at timestamptz,
  created_at timestamptz not null default now(),
  unique(family_id, week_number)
);

create table if not exists public.themes (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete cascade,
  day_number int not null default 1 check (day_number between 1 and 7),
  planned_hours numeric not null default 1,
  activity_kind text not null default 'cours',
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  title text not null,
  description text,
  objective text,
  status text not null default 'assigned' check (status in ('assigned','in_progress','done','validated','repeat_next_week')),
  priority text not null default 'normal' check (priority in ('low','normal','high','urgent')),
  estimated_minutes int default 60,
  due_date date,
  repeated_from uuid references public.themes(id) on delete set null,
  diagnostic_questions jsonb not null default '[]'::jsonb,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  theme_id uuid references public.themes(id) on delete cascade,
  title text not null,
  instructions text,
  status text not null default 'assigned' check (status in ('assigned','done_by_ayoub','validated_by_admin','rejected_by_admin')),
  student_comment text,
  admin_comment text,
  due_date date,
  score numeric,
  max_score numeric default 20,
  created_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  theme_id uuid references public.themes(id) on delete set null,
  subject text check (subject in ('maths','physique','chimie','svt','informatique')),
  type text not null default 'support' check (type in ('cours','exercice','support','correction','autre')),
  title text not null,
  description text,
  file_path text not null,
  file_name text not null,
  file_size bigint,
  mime_type text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.grades (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete set null,
  theme_id uuid references public.themes(id) on delete set null,
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  title text not null,
  grade numeric not null check (grade >= 0),
  max_grade numeric not null default 20 check (max_grade > 0),
  coefficient numeric not null default 1,
  admin_comment text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table if not exists public.learning_notes (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete set null,
  theme_id uuid references public.themes(id) on delete set null,
  task_id uuid references public.tasks(id) on delete set null,
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  note_type text not null default 'erreur' check (note_type in ('erreur','blocage','question','methode','revision','autre')),
  title text not null,
  content text not null,
  action_plan text,
  self_score numeric,
  self_max numeric default 20,
  status text not null default 'open' check (status in ('open','reviewed','resolved')),
  admin_feedback text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  created_by uuid references public.profiles(id),
  mood text,
  energy int check (energy between 1 and 5),
  blockage text,
  worked_minutes int default 0,
  created_at timestamptz not null default now()
);

create or replace function public.current_family_id() returns text language sql security definer stable set search_path=public as $$ select family_id from public.profiles where id = auth.uid() $$;
create or replace function public.current_role() returns text language sql security definer stable set search_path=public as $$ select role from public.profiles where id = auth.uid() $$;
create or replace function public.is_family_member() returns boolean language sql security definer stable set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and family_id='ayoub-2027') $$;
create or replace function public.is_admin() returns boolean language sql security definer stable set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and family_id='ayoub-2027' and role='admin') $$;

alter table public.profiles enable row level security;
alter table public.weeks enable row level security;
alter table public.themes enable row level security;
alter table public.tasks enable row level security;
alter table public.resources enable row level security;
alter table public.grades enable row level security;
alter table public.learning_notes enable row level security;
alter table public.checkins enable row level security;

create policy "profiles family read" on public.profiles for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "weeks family read" on public.weeks for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "weeks admin write" on public.weeks for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "themes family read" on public.themes for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "themes admin write" on public.themes for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "tasks family read" on public.tasks for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "tasks admin write" on public.tasks for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "tasks student update" on public.tasks for update using (public.current_role()='student' and family_id=public.current_family_id()) with check (public.current_role()='student' and family_id=public.current_family_id());
create policy "resources family read" on public.resources for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "resources admin write" on public.resources for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "grades family read" on public.grades for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "grades admin write" on public.grades for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "learning notes family read" on public.learning_notes for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "learning notes student insert" on public.learning_notes for insert with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());
create policy "learning notes student update own" on public.learning_notes for update using (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid()) with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());
create policy "learning notes admin update" on public.learning_notes for update using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id());
create policy "learning notes admin delete" on public.learning_notes for delete using (public.is_admin() and family_id=public.current_family_id());
create policy "checkins family read" on public.checkins for select using (public.is_family_member() and family_id=public.current_family_id());
create policy "checkins student insert" on public.checkins for insert with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());
create policy "checkins admin delete" on public.checkins for delete using (public.is_admin() and family_id=public.current_family_id());

insert into storage.buckets (id,name,public,file_size_limit) values ('ayoub-files','ayoub-files',false,52428800) on conflict (id) do nothing;
create policy "ayoub files family read" on storage.objects for select using (bucket_id='ayoub-files' and public.is_family_member());
create policy "ayoub files admin insert" on storage.objects for insert with check (bucket_id='ayoub-files' and public.is_admin());
create policy "ayoub files admin update" on storage.objects for update using (bucket_id='ayoub-files' and public.is_admin()) with check (bucket_id='ayoub-files' and public.is_admin());
create policy "ayoub files admin delete" on storage.objects for delete using (bucket_id='ayoub-files' and public.is_admin());
