
-- Migration V6/V5 -> V7 : correction de l'erreur "lesson_id column of tasks not found".
-- À exécuter dans Supabase SQL Editor si la base existait déjà avant la version Tutor Pro.

create extension if not exists "pgcrypto";

create table if not exists public.days (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete cascade,
  day_number int not null,
  title text not null,
  objective text,
  target_hours numeric default 4,
  status text default 'planned',
  created_at timestamptz default now()
);

create table if not exists public.lessons (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  week_id uuid references public.weeks(id) on delete cascade,
  day_id uuid references public.days(id) on delete cascade,
  subject text not null,
  title text not null,
  objective text,
  target_minutes int default 60,
  status text default 'assigned',
  priority text default 'normal',
  repeated_from uuid references public.lessons(id) on delete set null,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now()
);

create table if not exists public.exercises (
  id uuid primary key default gen_random_uuid(),
  family_id text not null default 'ayoub-2027',
  lesson_id uuid references public.lessons(id) on delete cascade,
  subject text not null,
  title text not null,
  question text not null,
  expected_answer text,
  correction text,
  difficulty text default 'normal',
  points numeric default 20,
  duration_minutes int default 30,
  order_index int default 0,
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
  status text default 'submitted',
  grade numeric,
  max_grade numeric default 20,
  admin_feedback text,
  created_at timestamptz default now(),
  reviewed_at timestamptz
);

alter table if exists public.weeks add column if not exists target_hours numeric default 20;
alter table if exists public.days add column if not exists target_hours numeric default 4;
alter table if exists public.lessons add column if not exists target_minutes int default 60;
alter table if exists public.tasks add column if not exists lesson_id uuid references public.lessons(id) on delete cascade;
alter table if exists public.resources add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.resources add column if not exists exercise_id uuid references public.exercises(id) on delete set null;
alter table if exists public.submissions add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.grades add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.grades add column if not exists exercise_id uuid references public.exercises(id) on delete set null;
alter table if exists public.learning_notes add column if not exists lesson_id uuid references public.lessons(id) on delete set null;
alter table if exists public.learning_notes add column if not exists exercise_id uuid references public.exercises(id) on delete set null;

alter table public.days enable row level security;
alter table public.lessons enable row level security;
alter table public.exercises enable row level security;
alter table public.submissions enable row level security;

-- Recreate essential policies safely. The helper functions already exist if schema.sql was run before.
do $$ declare t text; begin
  foreach t in array array['days','lessons','exercises','tasks','resources','submissions','grades','learning_notes','checkins','weeks'] loop
    execute format('drop policy if exists %I on public.%I', t||' read family', t);
    execute format('create policy %I on public.%I for select using (public.is_family_member() and family_id=public.current_family_id())', t||' read family', t);
    execute format('drop policy if exists %I on public.%I', t||' admin all', t);
    execute format('create policy %I on public.%I for all using (public.is_admin() and family_id=public.current_family_id()) with check (public.is_admin() and family_id=public.current_family_id())', t||' admin all', t);
  end loop;
end $$;

drop policy if exists "student submit exercises" on public.submissions;
create policy "student submit exercises" on public.submissions for insert
with check (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid());

drop policy if exists "student update own submissions" on public.submissions;
create policy "student update own submissions" on public.submissions for update
using (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid() and status in ('submitted','needs_revision'))
with check (public.current_role()='student' and family_id=public.current_family_id() and submitted_by=auth.uid());

drop policy if exists "student add learning notes" on public.learning_notes;
create policy "student add learning notes" on public.learning_notes for insert
with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());

drop policy if exists "student update own learning notes" on public.learning_notes;
create policy "student update own learning notes" on public.learning_notes for update
using (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid())
with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());

drop policy if exists "student checkin" on public.checkins;
create policy "student checkin" on public.checkins for insert
with check (public.current_role()='student' and family_id=public.current_family_id() and created_by=auth.uid());

notify pgrst, 'reload schema';
