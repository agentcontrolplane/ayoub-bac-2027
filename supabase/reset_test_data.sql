-- Reset complet des données de test sans supprimer les deux comptes ni les profils.
-- À lancer depuis Supabase SQL Editor quand tu veux repartir proprement.

delete from public.checkins where family_id='ayoub-2027';
delete from public.learning_notes where family_id='ayoub-2027';
delete from public.grades where family_id='ayoub-2027';
delete from public.resources where family_id='ayoub-2027';
delete from public.tasks where family_id='ayoub-2027';
delete from public.themes where family_id='ayoub-2027';
delete from public.weeks where family_id='ayoub-2027';
delete from storage.objects where bucket_id='ayoub-files' and name like 'ayoub-2027/%';
