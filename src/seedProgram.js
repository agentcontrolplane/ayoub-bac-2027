export const SUBJECTS = {
  maths: { label: "Maths", icon: "📐", color: "#2563eb" },
  physique: { label: "Physique", icon: "🧲", color: "#7c3aed" },
  chimie: { label: "Chimie", icon: "⚗️", color: "#0f766e" },
  svt: { label: "SVT", icon: "🧬", color: "#16a34a" },
  informatique: { label: "Informatique", icon: "💻", color: "#ea580c" },
};

export const SUMMER_PROGRAM = [
  { week_number: 1, title: "Reprise des bases vitales", objective: "Diagnostic + calcul, unités, atome, cellule, variables.", themes: [
    ["maths", "Calcul, fractions, puissances", "Reprendre les opérations, les priorités et les erreurs de signe.", ["30 calculs rapides", "25 fractions", "20 puissances", "Fiche erreurs"]],
    ["physique", "Unités et conversions", "Reprendre les grandeurs, unités SI et conversions.", ["30 conversions", "10 ordres de grandeur", "Fiche unités"]],
    ["chimie", "Atome, ion, molécule", "Différencier atome, ion, molécule et élément chimique.", ["20 classements", "10 formules", "Fiche vocabulaire"]],
    ["svt", "Cellule et méthode d’observation", "Revoir cellule animale/végétale et analyse de documents.", ["2 schémas légendés", "2 documents à analyser", "Résumé cellule"]],
    ["informatique", "Variables et types", "Comprendre variable, affectation, entrée, sortie.", ["8 mini-algorithmes", "Fiche variables", "3 traces d’algorithmes"]]
  ]},
  { week_number: 2, title: "Équations, mouvement et solutions", objective: "Résoudre des exercices simples et structurés.", themes: [
    ["maths", "Équations, inéquations, systèmes", "Résoudre étape par étape et vérifier.", ["40 équations", "25 inéquations", "15 systèmes"]],
    ["physique", "Mouvement et vitesse", "Utiliser v=d/t et lire un graphique.", ["25 exercices vitesse", "3 graphiques", "Fiche méthode"]],
    ["chimie", "Solutions et dilution", "Comprendre concentration et dilution.", ["20 concentrations", "15 dilutions", "Fiche C1V1=C2V2"]],
    ["svt", "ADN, chromosome, gène", "Comprendre les bases de la génétique.", ["Carte mentale", "15 questions", "1 document"]],
    ["informatique", "Conditions", "Utiliser si/sinon, et/ou.", ["10 conditions", "5 cas multiples", "5 corrections"]]
  ]},
  { week_number: 3, title: "Fonctions, forces et boucles", objective: "Installer les réflexes indispensables.", themes: [
    ["maths", "Fonctions et lecture graphique", "Lire image, antécédent, signe, variations.", ["20 questions", "5 graphiques", "5 fonctions affines"]],
    ["physique", "Forces et poids", "Identifier les forces et utiliser P=m.g.", ["10 schémas", "20 calculs", "Fiche forces"]],
    ["chimie", "Équations chimiques et mole", "Équilibrer et utiliser n=m/M.", ["25 équations", "20 calculs de n", "10 stœchiométrie"]],
    ["svt", "Protéines et enzymes", "Relier ADN, protéine et fonction.", ["Schéma ADN-protéine", "3 courbes", "Réponse structurée"]],
    ["informatique", "Boucles", "Utiliser pour/tant que, compteur, somme.", ["8 boucles pour", "6 tant que", "5 traces"]]
  ]},
  { week_number: 4, title: "Trigonométrie, énergie et acide-base", objective: "Renforcer les outils scientifiques fréquents.", themes: [
    ["maths", "Trigonométrie", "Utiliser sin, cos, tan dans un triangle rectangle.", ["30 applications", "15 problèmes", "Fiche formules"]],
    ["physique", "Travail, énergie, puissance", "Comprendre W, Ec, Epp, P.", ["15 travail", "20 énergie", "Fiche unités"]],
    ["chimie", "pH et acide-base", "Comprendre acide, base, pH et dosage simple.", ["20 classements", "15 réactions", "1 protocole"]],
    ["svt", "Reproduction et hormones", "Comprendre gamètes, fécondation, cycle.", ["Schéma cycle", "Tableau hormones", "2 documents"]],
    ["informatique", "Tableaux", "Parcourir, chercher max/min, calculer moyenne.", ["8 tableaux", "max/min", "moyenne"]]
  ]},
  { week_number: 5, title: "Approche terminale", objective: "Entrer doucement dans les chapitres du bac.", themes: [
    ["maths", "Limites et dérivées", "Comprendre l’idée de limite et variation.", ["10 graphiques", "30 limites simples", "15 dérivées guidées"]],
    ["physique", "Électricité", "Comprendre U, I, R, loi d’Ohm.", ["25 loi d’Ohm", "10 circuits", "Fiche électricité"]],
    ["chimie", "Oxydoréduction", "Comprendre oxydant, réducteur, électrons.", ["20 couples", "10 demi-équations", "Fiche redox"]],
    ["svt", "Génétique", "Croisements, génotype, phénotype, pedigree.", ["10 croisements", "5 pedigrees", "Fiche vocabulaire"]],
    ["informatique", "Fonctions/procédures", "Découper un programme.", ["8 fonctions", "paramètres", "4 exercices complets"]]
  ]},
  { week_number: 6, title: "Suites, ondes et immunité", objective: "Augmenter l’endurance et la rédaction.", themes: [
    ["maths", "Suites", "Suites arithmétiques et géométriques.", ["25 arithmétiques", "25 géométriques", "12 problèmes"]],
    ["physique", "Ondes", "Période, fréquence, longueur d’onde.", ["20 applications", "5 signaux", "Fiche ondes"]],
    ["chimie", "Cinétique", "Lire une courbe de réaction.", ["3 courbes", "facteurs cinétiques", "Fiche"]],
    ["svt", "Immunité", "Inflammation, anticorps, lymphocytes, vaccination.", ["Schéma innée", "Schéma adaptative", "2 graphiques"]],
    ["informatique", "Chaînes et fichiers", "Parcourir une chaîne, rechercher, compter.", ["8 chaînes", "recherche", "4 fichiers guidés"]]
  ]},
  { week_number: 7, title: "Exercices longs et correction active", objective: "Tenir un raisonnement complet.", themes: [
    ["maths", "Problèmes mixtes", "Fonctions, équations, chrono.", ["4 exercices longs", "correction active", "3 chronos"]],
    ["physique", "Problèmes guidés", "Données, inconnue, formule, unité.", ["2 mécanique", "2 électricité", "checklist"]],
    ["chimie", "Problèmes combinés", "Solution, mole, réaction.", ["2 solutions", "2 réactions", "fiche erreurs"]],
    ["svt", "Analyse documentaire longue", "Construire une réponse complète.", ["1 sujet long", "réécriture", "fiche méthode"]],
    ["informatique", "Algorithmes complets", "Combiner toutes les notions.", ["3 algorithmes", "10 erreurs", "test pratique"]]
  ]},
  { week_number: 8, title: "Consolidation finale", objective: "Réparer les trous restants avant septembre.", themes: [
    ["maths", "Remédiation maths", "Reprendre les 3 chapitres faibles.", ["diagnostic", "exercices ciblés", "test final"]],
    ["physique", "Remédiation physique", "Reprendre les erreurs récurrentes.", ["diagnostic", "re-test", "plan septembre"]],
    ["chimie", "Remédiation chimie", "Mole, concentration, redox ou acide-base.", ["20 ciblés", "correction", "test final"]],
    ["svt", "Méthode SVT", "Documents, schémas, vocabulaire.", ["2 documents", "fiche méthode", "test final"]],
    ["informatique", "Révision générale", "Conditions, boucles, tableaux, fonctions.", ["exercices difficiles", "algorithme complet", "test final"]]
  ]}
];
