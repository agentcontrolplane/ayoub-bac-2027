alter table public.weeks add column if not exists target_hours numeric default 0;
alter table public.themes add column if not exists day_number int not null default 1;
alter table public.themes add column if not exists planned_hours numeric not null default 1;
alter table public.themes add column if not exists activity_kind text not null default 'cours';
alter table public.themes add column if not exists diagnostic_questions jsonb not null default '[]'::jsonb;
alter table public.learning_notes add column if not exists self_score numeric;
alter table public.learning_notes add column if not exists self_max numeric default 20;

-- À exécuter si tu avais déjà la v4. Ensuite lance reset_test_data.sql puis initialise le programme v5 depuis l'admin.
