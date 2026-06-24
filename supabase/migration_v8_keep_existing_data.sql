-- v8 : aucune suppression de données.
-- Les exercices existants sont conservés.
-- À exécuter seulement si Supabase/PostgREST semble garder un ancien cache de schéma.

notify pgrst, 'reload schema';
