# Mission Bac Ayoub 2027 · v6 Tutor Pro

Plateforme privée React + Vite + Supabase + Vercel pour suivre Ayoub comme une vraie plateforme de tutorat.

## Fonctions principales

### Accès Wejden / admin
- Créer de nouvelles semaines.
- Définir les heures prévues par semaine et par jour.
- Ajouter des jours, des leçons et des tâches.
- Créer des exercices avec énoncé, réponse attendue, correction, points et durée.
- Ajouter des cours, exercices, supports et corrections en fichiers privés.
- Voir les soumissions d’Ayoub avec photo/PDF/fichier.
- Corriger une soumission, ajouter une note, un feedback et demander une reprise.
- Valider une semaine.
- Repasser une leçon ou un thème à la semaine suivante.
- Lire et commenter le carnet d’erreurs d’Ayoub.

### Accès Ayoub / élève
- Voir le programme par semaine, jour et durée prévue.
- Voir les exercices.
- Soumettre une réponse écrite.
- Ajouter une photo ou un fichier contenant la réalisation d’un exercice.
- Voir les fichiers/supports ajoutés par Wejden.
- Ajouter des erreurs, blocages, questions et méthodes dans son carnet.
- Consulter les notes et les retours de Wejden.

## Installation locale

```bash
npm install
npm run dev
```

Créer un fichier `.env.local` à la racine :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon
```

## Configuration Supabase

1. Créer un projet Supabase.
2. Aller dans SQL Editor.
3. Exécuter `supabase/schema.sql`.
4. Aller dans Authentication > Users.
5. Créer seulement deux utilisateurs : Wejden et Ayoub.
6. Copier les UUID des deux utilisateurs.
7. Exécuter dans SQL Editor :

```sql
insert into public.profiles (id, email, full_name, role, family_id)
values
('UUID_WEJDEN', 'email_wejden', 'Wejden', 'admin', 'ayoub-2027'),
('UUID_AYOUB', 'email_ayoub', 'Ayoub', 'student', 'ayoub-2027');
```

8. Désactiver les inscriptions publiques dans Authentication > Providers > Email si possible.

## Reset des données de test

Pour supprimer les semaines, exercices, fichiers, notes, soumissions et carnet d’erreurs tout en gardant les deux comptes :

```sql
-- Exécuter le fichier : supabase/reset_test_data.sql
```

## Déploiement Vercel

Dans Vercel, ajouter les variables :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon
```

Puis déployer avec :

```bash
npm run build
```

Output directory : `dist`.

## Important

La clé `service_role` ne doit jamais être utilisée dans React ou Vercel côté front.
Le site utilise des règles RLS pour limiter l’accès aux deux profils ajoutés dans `profiles`.
