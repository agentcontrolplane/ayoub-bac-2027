-- Réinitialisation des données de test.
-- Garde les comptes Supabase Auth et les profils Oussama/Ayoub.
-- À exécuter dans Supabase > SQL Editor.

begin;

delete from public.checkins where family_id = 'ayoub-2027';
delete from public.learning_notes where family_id = 'ayoub-2027';
delete from public.grades where family_id = 'ayoub-2027';
delete from public.resources where family_id = 'ayoub-2027';
delete from public.tasks where family_id = 'ayoub-2027';
delete from public.themes where family_id = 'ayoub-2027';
delete from public.weeks where family_id = 'ayoub-2027';

-- Nettoyage des fichiers du bucket privé côté métadonnées Storage.
-- Si certains fichiers restent visibles dans Storage, supprime-les aussi depuis l'interface Storage > ayoub-files.
delete from storage.objects where bucket_id = 'ayoub-files' and name like 'ayoub-2027/%';

commit;
