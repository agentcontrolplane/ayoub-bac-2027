create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text not null,
  role text not null check (role in ('admin','student')),
  family_id text not null default 'ayoub-2027',
  created_at timestamptz default now()
);

create table if not exists public.weeks (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_number int not null,
  title text not null,
  objective text,
  target_hours numeric default 20,
  status text default 'planned' check (status in ('planned','in_progress','validated','repeat_required')),
  admin_note text,
  validated_at timestamptz,
  created_at timestamptz default now(),
  unique(family_id, week_number)
);

create table if not exists public.days (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete cascade,
  day_number int not null,
  title text not null,
  objective text,
  target_hours numeric default 4,
  status text default 'planned' check (status in ('planned','in_progress','done','validated')),
  created_at timestamptz default now(),
  unique(week_id, day_number)
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete cascade,
  day_id uuid references public.days(id) on delete cascade,
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  title text not null,
  objective text,
  target_minutes int default 60,
  status text default 'assigned' check (status in ('assigned','in_progress','done_by_ayoub','validated_by_admin','repeat_next_week')),
  priority text default 'normal' check (priority in ('low','normal','high','urgent')),
  repeated_from uuid references public.lessons(id) on delete set null,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  lesson_id uuid references public.lessons(id) on delete cascade,
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  title text not null,
  question text not null,
  expected_answer text,
  correction text,
  difficulty text default 'normal' check (difficulty in ('diagnostic','easy','normal','hard')),
  points numeric default 20,
  duration_minutes int default 30,
  order_index int default 0,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  lesson_id uuid references public.lessons(id) on delete cascade,
  title text not null,
  instructions text,
  status text default 'assigned' check (status in ('assigned','done_by_ayoub','validated_by_admin','rejected_by_admin')),
  student_comment text,
  admin_comment text,
  created_at timestamptz default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  lesson_id uuid references public.lessons(id) on delete set null,
  exercise_id uuid references public.exercises(id) on delete set null,
  subject text check (subject in ('maths','physique','chimie','svt','informatique')),
  type text default 'support' check (type in ('cours','exercice','support','correction','autre')),
  title text not null,
  description text,
  file_path text not null,
  file_name text not null,
  file_size bigint,
  mime_type text,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  exercise_id uuid references public.exercises(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete set null,
  submitted_by uuid references public.profiles(id),
  answer_text text,
  file_path text,
  file_name text,
  mime_type text,
  status text default 'submitted' check (status in ('submitted','reviewed','validated','needs_revision')),
  grade numeric,
  max_grade numeric default 20,
  admin_feedback text,
  created_at timestamptz default now(),
  reviewed_at timestamptz
);

create table if not exists public.grades (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete set null,
  lesson_id uuid references public.lessons(id) on delete set null,
  exercise_id uuid references public.exercises(id) on delete set null,
  subject text not null check (subject in ('maths','physique','chimie','svt','informatique')),
  title text not null,
  grade numeric not null,
  max_grade numeric default 20,
  coefficient numeric default 1,
  admin_comment text,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.learning_notes (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  created_by uuid references public.profiles(id),
  subject text check (subject in ('maths','physique','chimie','svt','informatique')),
  lesson_id uuid references public.lessons(id) on delete set null,
  exercise_id uuid references public.exercises(id) on delete set null,
  type text default 'blocage' check (type in ('erreur','blocage','question','methode','a_reviser')),
  title text not null,
  content text not null,
  action_plan text,
  admin_reply text,
  status text default 'open' check (status in ('open','read','to_review','resolved')),
  created_at timestamptz default now()
);

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  family_id text default 'ayoub-2027',
  created_by uuid references public.profiles(id),
  mood text,
  energy int check (energy between 1 and 5),
  blockage text,
  worked_minutes int default 0,
  created_at timestamptz default now()
);

create or replace function public.current_family_id() returns text language sql security definer stable set search_path=public as $$ select family_id from public.profiles where id=auth.uid() $$;
create or replace function public.current_role() returns text language sql security definer stable set search_path=public as $$ select role from public.profiles where id=auth.uid() $$;
create or replace function public.is_family_member() returns boolean language sql security definer stable set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and family_id='ayoub-2027') $$;
create or replace function public.is_admin() returns boolean language sql security definer stable set search_path=public as $$ select exists(select 1 from public.profiles where id=auth.uid() and family_id='ayoub-2027' and role='admin') $$;

alter table public.profiles enable row level security;
alter table public.weeks enable row level security;
alter table public.days enable row level security;
alter table public.lessons enable row level security;
alter table public.exercises enable row level security;
alter table public.tasks enable row level security;
alter table public.resources enable row level security;
alter table public.submissions enable row level security;
alter table public.grades enable row level security;
alter table public.learning_notes enable row level security;
alter table public.checkins enable row level security;

drop policy if exists "profiles read family" on public.profiles; create policy "profiles read family" on public.profiles for select using (public.is_family_member() and family_id=public.current_family_id());

do $$ declare t text; begin
  foreach t in array array['weeks','days','lessons','exercises','tasks','resources','submissions','grades','learning_notes','checkins'] loop
    execute format('drop policy if exists %I on public.%I', t||' read family', t);
    execute format('create policy %I on public.%I for select using (public.is_family_member() and family_id=public.current_family_id())', t||' read family', t);
    execute format('drop policy if exists %I on public.%I', t||' admin all', t);
    execute format('create policy %I on public.%I for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id())', t||' admin all', t);
  end loop;
end $$;

-- Student-specific write permissions
drop policy if exists "student submit exercises" on public.submissions; create policy "student submit exercises" on public.submissions for insert with check (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid());
drop policy if exists "student update own submissions" on public.submissions; create policy "student update own submissions" on public.submissions for update using (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid() and status in ('submitted','needs_revision')) with check (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid());
drop policy if exists "student add learning notes" on public.learning_notes; create policy "student add learning notes" on public.learning_notes for insert with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());
drop policy if exists "student update own learning notes" on public.learning_notes; create policy "student update own learning notes" on public.learning_notes for update using (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid()) with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());
drop policy if exists "student update task progress" on public.tasks; create policy "student update task progress" on public.tasks for update using (public.current_role()='student' and family_id=public.current_family_id()) with check (public.current_role()='student' and family_id=public.current_family_id() and status in ('assigned','done_by_ayoub'));
drop policy if exists "student checkins" on public.checkins; create policy "student checkins" on public.checkins for insert with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());

insert into storage.buckets (id,name,public,file_size_limit) values ('ayoub-files','ayoub-files',false,52428800) on conflict(id) do nothing;
drop policy if exists "family read files" on storage.objects; create policy "family read files" on storage.objects for select using (bucket_id='ayoub-files' and public.is_family_member());
drop policy if exists "family upload files" on storage.objects; create policy "family upload files" on storage.objects for insert with check (bucket_id='ayoub-files' and public.is_family_member());
drop policy if exists "admin update files" on storage.objects; create policy "admin update files" on storage.objects for update using (bucket_id='ayoub-files' and public.is_admin()) with check (bucket_id='ayoub-files' and public.is_admin());
drop policy if exists "admin delete files" on storage.objects; create policy "admin delete files" on storage.objects for delete using (bucket_id='ayoub-files' and public.is_admin());


-- V7 safety migration block: create table if exists is not enough when the database was created with an older version.
-- This block adds missing columns and asks PostgREST to reload its schema cache.
alter table if exists public.tasks add column if not exists lesson_id uuid references public.lessons(id) on delete cascade;
alter table if exists public.resources add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.resources add column if not exists exercise_id uuid references public.exercises(id) on delete set null;
alter table if exists public.submissions add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.grades add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.grades add column if not exists exercise_id uuid references public.exercises(id) on delete set null;
alter table if exists public.learning_notes add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.learning_notes add column if not exists exercise_id uuid references public.exercises(id) on delete set null;
alter table if exists public.weeks add column if not exists target_hours numeric default 20;
alter table if exists public.days add column if not exists target_hours numeric default 4;
alter table if exists public.lessons add column if not exists target_minutes int default 60;
alter table if exists public.exercises add column if not exists duration_minutes int default 30;
alter table if exists public.exercises add column if not exists points numeric default 20;
notify pgrst, 'reload schema';
