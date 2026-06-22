# Mission Bac Ayoub v7 Diagnostic Pro

Cette version corrige l'erreur Supabase :

`Could not find the 'lesson_id' column of 'tasks' in the schema cache`

Elle ajoute aussi une semaine 1 beaucoup plus profonde avec de vrais exercices diagnostiques en :
- maths ;
- physique ;
- chimie ;
- SVT ;
- informatique.

## Mise à jour si tu avais déjà une base Supabase

1. Va dans Supabase > SQL Editor.
2. Exécute : `supabase/migration_v7_schema_fix.sql`.
3. Si tu veux repartir proprement, exécute ensuite : `supabase/reset_test_data.sql`.
4. Relance le site.
5. Connecte-toi en admin et clique sur : `Initialiser le programme v7 diagnostic`.

## Pourquoi cette erreur arrivait ?

Tu avais une table `tasks` créée avec une ancienne version du projet. Le code v6 utilisait `lesson_id`, mais la table existante ne contenait pas encore cette colonne. En PostgreSQL, `create table if not exists` ne modifie pas une table déjà existante. Il faut donc une migration `alter table add column if not exists`.

## Installation locale

```bash
npm install
npm run dev
```

## Variables d'environnement

Crée `.env.local` :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon
```

## Déploiement Vercel

Pousse cette version sur GitHub puis redéploie sur Vercel. Vérifie que les variables `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY` existent dans Vercel.
