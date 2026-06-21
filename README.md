# Mission Bac 2027 - Ayoub v3

Version corrigée et prête pour Vercel : React + Vite + Supabase Auth + RLS + Storage privé.

## Fonctionnalités

- Connexion sécurisée par Supabase Auth.
- Deux rôles seulement : `admin` pour Oussama, `student` pour Ayoub.
- Espace Oussama : initialiser le programme, ajouter thèmes/tâches/fichiers, attribuer notes, valider/refuser tâches, valider semaines, repasser un thème à la semaine suivante.
- Espace Ayoub : voir missions, consulter fichiers, marquer une tâche terminée, envoyer un check-in, voir ses notes.
- Sécurité RLS : seuls les profils présents dans la table `profiles` avec `family_id = ayoub-2027` peuvent lire les données.

## Lancer en local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Puis remplir `.env.local` avec les vraies clés Supabase.

## Configuration Supabase

1. Crée un projet Supabase.
2. Va dans **SQL Editor**.
3. Copie-colle tout le fichier `supabase/schema.sql` et exécute-le.
4. Va dans **Authentication > Users** et crée deux utilisateurs : Oussama et Ayoub.
5. Récupère leurs UUID dans Auth Users.
6. Dans SQL Editor, insère les profils :

```sql
insert into public.profiles (id, email, full_name, role, family_id) values
('UUID_Oussama', 'email_Oussama', 'Oussama', 'admin', 'ayoub-2027'),
('UUID_AYOUB', 'email_ayoub', 'Ayoub', 'student', 'ayoub-2027');
```

7. Désactive les inscriptions publiques dans **Authentication > Providers** si tu ne veux aucun autre compte.

## Vercel

Dans Vercel, ajoute ces variables dans **Project Settings > Environment Variables** :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_anon_public
```

Puis redéploie.

## Erreur fréquente

Si le site affiche que Supabase n'est pas configuré :
- vérifie le fichier `.env.local` en local ;
- arrête puis relance `npm run dev` ;
- sur Vercel, vérifie les variables d’environnement puis redeploy.
