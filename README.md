# Mission Bac Ayoub v5 · Programme par heures + tests diagnostic

Cette version ajoute un vrai planning professionnel :

- programme d’été calculé par **heures prévues par semaine** ;
- chaque semaine contient **5 jours structurés** ;
- chaque jour contient des thèmes par matière avec durée prévue ;
- la **semaine 1** contient des tests diagnostic complets avec exercices et réponses attendues ;
- Ayoub peut ajouter ses erreurs, blocages, questions, méthodes et scores personnels dans le carnet d’erreurs ;
- Oussama/Asma peut valider/refuser les tâches, valider une semaine, attribuer des notes, répondre aux notes du carnet et repasser un thème à la semaine suivante.

## Mise à jour depuis la v4

1. Remplace le code de ton projet par ce dossier.
2. Garde ton fichier `.env.local` :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon
```

3. Dans Supabase > SQL Editor, lance :

```bash
supabase/migration_v4_to_v5.sql
```

4. Pour supprimer les données de test et repartir proprement, lance :

```bash
supabase/reset_test_data.sql
```

Ce reset garde les deux comptes et les deux profils. Il supprime seulement les semaines, thèmes, tâches, notes, fichiers, carnet d’erreurs et check-ins.

5. Lance le site, connecte-toi avec Oussama/Asma/admin, puis clique sur :

```text
Initialiser le programme v5
```

## Installation locale

```bash
npm install
npm run dev
```

## Déploiement Vercel

Pousse les fichiers sur GitHub, puis laisse Vercel redéployer.

Dans Vercel > Settings > Environment Variables, garde :

```bash
VITE_SUPABASE_URL=https://ton-projet.supabase.co
VITE_SUPABASE_ANON_KEY=ta_cle_publishable_ou_anon
```

Après modification des variables, clique sur Redeploy.

## Fichiers importants

- `src/program.js` : programme d’été avec les semaines, jours, heures et exercices diagnostic.
- `src/App.jsx` : application React.
- `supabase/migration_v4_to_v5.sql` : migration si tu avais déjà la v4.
- `supabase/reset_test_data.sql` : reset propre des données de test.
- `supabase/schema.sql` : installation complète si tu repars de zéro.
