# Mission Bac Ayoub v8

Version v8 : amélioration de la banque d’exercices et de la vue programme.

## Nouveautés

- L’admin peut modifier un exercice existant.
- L’admin peut supprimer un exercice.
- Les exercices sont filtrables par matière : maths, physique, chimie, SVT, informatique.
- Les brouillons de réponse d’Ayoub sont conservés avec `sessionStorage` tant que l’onglet reste ouvert.
- Le formulaire admin de création/modification d’exercice garde aussi un brouillon pendant la session.
- La vue Programme affiche directement les exercices liés à chaque leçon, avec titre, matière, durée, points et extrait de l’énoncé.
- Le bouton `Repasser semaine suivante` copie aussi les exercices de la leçon vers la semaine suivante.

## Mise à jour sans perdre les exercices existants

Tu n’as pas besoin de reset Supabase.

1. Remplace seulement le code par cette v8.
2. Garde ton fichier `.env.local`.
3. Lance :

```bash
npm install
npm run dev
```

4. Si tu déploies sur Vercel :

```bash
git add .
git commit -m "v8 exercices edit cache programme"
git push
```

Puis fais un redeploy sur Vercel si nécessaire.

## Important

Cette version ne supprime aucune donnée existante. Les exercices déjà créés restent dans Supabase.

Le cache est volontairement en `sessionStorage` : il garde les textes si Ayoub change de page dans le site ou recharge la page, mais il est supprimé quand l’onglet est fermé.


## SQL optionnel

Cette v8 ne nécessite pas de reset.

Tu peux exécuter :

```sql
supabase/migration_v8_keep_existing_data.sql
```

Cela ne supprime aucune donnée. Cela force seulement Supabase à recharger le cache de schéma si besoin.
