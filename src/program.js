export const SUBJECTS = {
  maths: { label: 'Maths', icon: '📐', color: '#2563eb' },
  physique: { label: 'Physique', icon: '🧲', color: '#7c3aed' },
  chimie: { label: 'Chimie', icon: '⚗️', color: '#0f766e' },
  svt: { label: 'SVT', icon: '🧬', color: '#16a34a' },
  informatique: { label: 'Informatique', icon: '💻', color: '#ea580c' },
};

const q = (question, expected, points = 1, hint = '') => ({ question, expected, points, hint });

export const SUMMER_PROGRAM = [
  {
    week_number: 1,
    title: 'Semaine 1 · Diagnostic complet et remise à niveau ciblée',
    objective: 'Mesurer le niveau réel d’Ayoub avant de construire la suite. Cette semaine contient de vrais tests courts, des corrections et un bilan précis.',
    target_hours: 22,
    days: [
      {
        day_number: 1,
        title: 'Jour 1 · Test maths + test physique',
        planned_hours: 4.5,
        themes: [
          {
            subject: 'maths', activity_kind: 'diagnostic', title: 'Diagnostic maths : calcul, fractions, équations, fonctions', planned_hours: 2.5,
            objective: 'Évaluer les bases indispensables avant d’attaquer les chapitres du bac.',
            tasks: ['Faire le test sans aide pendant 60 minutes.', 'Corriger avec Wejden en notant chaque erreur dans le carnet.', 'Classer les erreurs : calcul, signe, méthode, compréhension.'],
            diagnostic_questions: [
              q('Calcule : 7 - 3 × 2 + 8 ÷ 4.', '3', 1, 'Priorités opératoires.'),
              q('Calcule : -4 + 9 - 12.', '-7', 1, 'Attention aux signes.'),
              q('Simplifie : 18/24.', '3/4', 1),
              q('Calcule : 2/3 + 1/6.', '5/6', 1),
              q('Calcule : 5/4 - 1/2.', '3/4', 1),
              q('Calcule : 2^3 × 2^4.', '2^7 = 128', 1),
              q('Développe : 3(x + 5).', '3x + 15', 1),
              q('Développe : (x + 2)(x + 3).', 'x² + 5x + 6', 1),
              q('Factorise : 5x + 15.', '5(x + 3)', 1),
              q('Résous : x + 7 = 12.', 'x = 5', 1),
              q('Résous : 3x = 21.', 'x = 7', 1),
              q('Résous : 2x - 5 = 9.', 'x = 7', 1),
              q('Résous : 4x + 3 = 2x + 11.', 'x = 4', 2),
              q('Résous : x/3 = 5.', 'x = 15', 1),
              q('Calcule l’image de 2 par f(x)=3x-1.', 'f(2)=5', 1),
              q('Pour f(x)=x², calcule f(-3).', '9', 1),
              q('Une fonction affine a pour formule f(x)=2x+4. Quelle est son ordonnée à l’origine ?', '4', 1),
              q('Résous le système : x+y=10 et x-y=2.', 'x=6, y=4', 2),
              q('Dans un triangle rectangle, si l’hypoténuse vaut 10 et un côté vaut 6, trouve l’autre côté.', '8', 2, 'Pythagore.'),
              q('Explique en deux phrases ce que signifie “vérifier une solution”.', 'Remplacer l’inconnue par la valeur trouvée et vérifier que l’égalité est vraie.', 2)
            ]
          },
          {
            subject: 'physique', activity_kind: 'diagnostic', title: 'Diagnostic physique : unités, mouvement, forces, énergie', planned_hours: 2,
            objective: 'Repérer s’il comprend les grandeurs, les unités et les relations de base.',
            tasks: ['Faire le test sans cours pendant 45 minutes.', 'Corriger en écrivant les formules utilisées.', 'Noter les confusions d’unités dans le carnet d’erreurs.'],
            diagnostic_questions: [
              q('Convertis 2,5 km en mètres.', '2500 m', 1),
              q('Convertis 120 secondes en minutes.', '2 min', 1),
              q('Convertis 0,75 kg en grammes.', '750 g', 1),
              q('Un mobile parcourt 100 m en 20 s. Calcule sa vitesse.', '5 m/s', 2),
              q('Une voiture roule à 72 km/h. Convertis en m/s.', '20 m/s', 2),
              q('Donne l’unité de la force.', 'newton, N', 1),
              q('Donne la formule du poids.', 'P = m × g', 1),
              q('Calcule le poids d’un corps de masse 5 kg avec g=10 N/kg.', '50 N', 2),
              q('Cite deux forces qui peuvent agir sur un objet posé sur une table.', 'poids et réaction de la table', 2),
              q('Quelle est l’unité de l’énergie ?', 'joule, J', 1),
              q('Donne la formule de l’énergie cinétique.', 'Ec = 1/2 × m × v²', 1),
              q('Un courant a une intensité I=2 A et traverse une résistance R=5 Ω. Calcule U.', 'U = R×I = 10 V', 2),
              q('Quelle est la différence entre masse et poids ?', 'La masse est en kg, le poids est une force en N.', 2),
              q('Pourquoi faut-il toujours écrire les unités dans un exercice de physique ?', 'Pour donner un sens au résultat et vérifier la cohérence.', 2)
            ]
          }
        ]
      },
      {
        day_number: 2,
        title: 'Jour 2 · Test chimie + test SVT + test informatique',
        planned_hours: 4.5,
        themes: [
          {
            subject: 'chimie', activity_kind: 'diagnostic', title: 'Diagnostic chimie : atome, mole, concentration, réactions', planned_hours: 1.6,
            objective: 'Vérifier les bases indispensables pour comprendre la chimie de terminale.',
            tasks: ['Faire le test en 40 minutes.', 'Corriger avec une fiche formules.', 'Noter les confusions entre masse, mole, concentration et volume.'],
            diagnostic_questions: [
              q('Un atome neutre possède 11 protons. Combien possède-t-il d’électrons ?', '11 électrons', 1),
              q('Un ion Na+ a-t-il gagné ou perdu un électron ?', 'Il a perdu un électron.', 1),
              q('Calcule la masse molaire de H2O : H=1, O=16.', '18 g/mol', 2),
              q('Calcule n pour m=36 g de H2O et M=18 g/mol.', 'n = 2 mol', 2),
              q('Donne la formule de la concentration molaire.', 'C = n/V', 1),
              q('Une solution contient 0,2 mol dans 1 L. Calcule C.', '0,2 mol/L', 1),
              q('Équilibre : H2 + O2 → H2O.', '2H2 + O2 → 2H2O', 2),
              q('Équilibre : Fe + O2 → Fe2O3.', '4Fe + 3O2 → 2Fe2O3', 2),
              q('Une solution de pH=3 est-elle acide ou basique ?', 'acide', 1),
              q('Explique ce qu’est une dilution.', 'Ajouter du solvant pour diminuer la concentration.', 2)
            ]
          },
          {
            subject: 'svt', activity_kind: 'diagnostic', title: 'Diagnostic SVT : cellule, génétique, documents', planned_hours: 1.4,
            objective: 'Mesurer vocabulaire, schémas, logique et méthode documentaire.',
            tasks: ['Répondre aux questions en phrases complètes.', 'Dessiner les schémas demandés.', 'Surligner les mots scientifiques mal maîtrisés.'],
            diagnostic_questions: [
              q('Cite trois éléments d’une cellule animale.', 'noyau, membrane, cytoplasme par exemple', 1),
              q('Quelle est la différence entre cellule animale et cellule végétale ?', 'La cellule végétale possède notamment paroi, chloroplastes et grande vacuole.', 2),
              q('Où se trouve l’information génétique dans la cellule ?', 'Dans le noyau, portée par l’ADN/chromosomes.', 1),
              q('Définis simplement un gène.', 'Une portion d’ADN qui porte une information pour un caractère.', 2),
              q('Définis phénotype.', 'Caractères observables d’un individu.', 1),
              q('Explique la relation ADN → protéine → caractère.', 'Un gène permet de produire une protéine qui influence un caractère.', 2),
              q('Dans un graphique, que faut-il lire avant de répondre ?', 'Le titre, les axes, les unités et la tendance.', 2),
              q('Écris une réponse en trois étapes pour analyser un document.', 'Observation, interprétation, conclusion.', 2),
              q('Quelle est la fonction principale des anticorps ?', 'Reconnaître/neutraliser un antigène.', 1),
              q('Dessine un schéma simple d’une cellule et légende 4 éléments.', 'Schéma attendu avec 4 légendes correctes.', 4)
            ]
          },
          {
            subject: 'informatique', activity_kind: 'diagnostic', title: 'Diagnostic informatique : variables, conditions, boucles', planned_hours: 1.5,
            objective: 'Vérifier s’il comprend la logique algorithmique de base.',
            tasks: ['Écrire les algorithmes en pseudo-code ou Python.', 'Faire une trace pour au moins deux exercices.', 'Noter les erreurs de logique.'],
            diagnostic_questions: [
              q('Quelle est la différence entre une variable et une valeur ?', 'Une variable stocke une valeur qui peut changer.', 1),
              q('Écris un algorithme qui lit deux nombres et affiche leur somme.', 'Entrer a,b puis afficher a+b.', 2),
              q('Écris une condition qui affiche “positif” si x>0.', 'si x > 0 alors afficher “positif”.', 2),
              q('Écris un algorithme qui dit si un nombre est pair.', 'Tester n mod 2 = 0.', 2),
              q('Combien de fois s’exécute une boucle pour i allant de 1 à 5 ?', '5 fois', 1),
              q('Écris une boucle qui affiche les nombres de 1 à 10.', 'pour i de 1 à 10 afficher i.', 2),
              q('Écris un algorithme qui calcule la somme des nombres de 1 à n.', 'Initialiser somme=0 puis boucle.', 3),
              q('Que vaut x après : x=3 ; x=x+2 ; x=x*4 ?', '20', 2),
              q('Explique ce qu’est une trace d’algorithme.', 'Tableau qui suit les valeurs des variables étape par étape.', 2),
              q('Écris une fonction moyenne(a,b,c).', 'retourner (a+b+c)/3.', 3)
            ]
          }
        ]
      },
      {
        day_number: 3,
        title: 'Jour 3 · Correction active et carnet d’erreurs',
        planned_hours: 4,
        themes: [
          { subject: 'maths', activity_kind: 'correction', title: 'Correction maths : erreurs de calcul et méthode', planned_hours: 1.4, objective: 'Refaire tous les exercices faux sans regarder la correction.', tasks: ['Refaire les exercices faux du test maths.', 'Créer 5 règles anti-erreurs.', 'Ajouter au moins 3 notes dans le carnet d’erreurs.'], diagnostic_questions: [] },
          { subject: 'physique', activity_kind: 'correction', title: 'Correction physique : unités et formules', planned_hours: 1.0, objective: 'Identifier les confusions d’unités et de formules.', tasks: ['Refaire les calculs faux.', 'Écrire les formules avec unités.', 'Ajouter les blocages dans le carnet.'], diagnostic_questions: [] },
          { subject: 'chimie', activity_kind: 'correction', title: 'Correction chimie : mole, équation, concentration', planned_hours: 0.9, objective: 'Comprendre chaque erreur au lieu de seulement recopier.', tasks: ['Refaire les questions fausses.', 'Créer une fiche n=m/M et C=n/V.', 'Noter les confusions.'], diagnostic_questions: [] },
          { subject: 'svt', activity_kind: 'correction', title: 'Correction SVT : vocabulaire et schémas', planned_hours: 0.7, objective: 'Améliorer la précision scientifique.', tasks: ['Refaire le schéma de cellule.', 'Réécrire les définitions fausses.', 'Créer 10 flashcards.'], diagnostic_questions: [] }
        ]
      },
      {
        day_number: 4,
        title: 'Jour 4 · Mini-tests ciblés après correction',
        planned_hours: 4.5,
        themes: [
          { subject: 'maths', activity_kind: 'test', title: 'Mini-test maths ciblé', planned_hours: 1.5, objective: 'Vérifier si la correction du jour 3 a vraiment servi.', tasks: ['10 calculs', '5 équations', '5 fonctions simples', 'Correction immédiate.'], diagnostic_questions: [q('Résous : 5x - 4 = 16.', 'x=4', 2), q('Calcule : 3/5 + 1/10.', '7/10', 2), q('Développe : 2(x-3)+4x.', '6x-6', 2), q('Factorise : 7x - 21.', '7(x-3)', 2), q('Calcule f(-2) pour f(x)=x²+1.', '5', 2)] },
          { subject: 'physique', activity_kind: 'test', title: 'Mini-test physique ciblé', planned_hours: 1.0, objective: 'Revoir vitesse, poids, loi d’Ohm.', tasks: ['Faire le mini-test.', 'Écrire les unités à chaque ligne.', 'Corriger.'], diagnostic_questions: [q('Convertis 36 km/h en m/s.', '10 m/s', 2), q('Calcule le poids de 8 kg avec g=10.', '80 N', 2), q('Calcule U si R=4Ω et I=3A.', '12 V', 2)] },
          { subject: 'chimie', activity_kind: 'test', title: 'Mini-test chimie ciblé', planned_hours: 1.0, objective: 'Revoir masse molaire, quantité et concentration.', tasks: ['Faire le mini-test.', 'Corriger.', 'Noter les formules.'], diagnostic_questions: [q('Masse molaire de CO2 : C=12, O=16.', '44 g/mol', 2), q('n pour m=22g de CO2 et M=44g/mol.', '0,5 mol', 2), q('C pour n=0,1 mol et V=0,5 L.', '0,2 mol/L', 2)] },
          { subject: 'informatique', activity_kind: 'test', title: 'Mini-test informatique ciblé', planned_hours: 1.0, objective: 'Tester conditions et boucles.', tasks: ['Écrire deux algorithmes.', 'Faire la trace.', 'Corriger.'], diagnostic_questions: [q('Algorithme qui affiche le plus grand de deux nombres.', 'Condition si a>b sinon.', 3), q('Algorithme qui compte de 1 à n.', 'Boucle pour ou tant que.', 3)] }
        ]
      },
      {
        day_number: 5,
        title: 'Jour 5 · Bilan de niveau et plan personnalisé',
        planned_hours: 4.5,
        themes: [
          { subject: 'maths', activity_kind: 'bilan', title: 'Bilan maths : niveau rouge/orange/vert', planned_hours: 1.2, objective: 'Décider si Ayoub doit reprendre bases, exercices moyens ou chapitre suivant.', tasks: ['Calculer la note du test sur 20.', 'Lister 3 priorités maths.', 'Créer le plan de reprise semaine 2.'], diagnostic_questions: [] },
          { subject: 'physique', activity_kind: 'bilan', title: 'Bilan physique : unités, formules, raisonnement', planned_hours: 0.8, objective: 'Identifier les points qui bloquent vraiment.', tasks: ['Calculer la note physique.', 'Lister les formules non maîtrisées.', 'Créer 3 objectifs semaine 2.'], diagnostic_questions: [] },
          { subject: 'chimie', activity_kind: 'bilan', title: 'Bilan chimie : vocabulaire et calcul', planned_hours: 0.8, objective: 'Savoir si la mole et concentration sont comprises.', tasks: ['Calculer la note chimie.', 'Lister les confusions.', 'Préparer fiche de reprise.'], diagnostic_questions: [] },
          { subject: 'svt', activity_kind: 'bilan', title: 'Bilan SVT : méthode documentaire', planned_hours: 0.7, objective: 'Vérifier vocabulaire, schémas et rédaction.', tasks: ['Évaluer le schéma cellule.', 'Évaluer les définitions.', 'Préparer 10 flashcards.'], diagnostic_questions: [] },
          { subject: 'informatique', activity_kind: 'bilan', title: 'Bilan informatique : logique algorithmique', planned_hours: 1.0, objective: 'Identifier si variables, conditions, boucles sont acquises.', tasks: ['Calculer la note informatique.', 'Lister les erreurs de logique.', 'Préparer 5 exercices de reprise.'], diagnostic_questions: [] }
        ]
      }
    ]
  },
  {
    week_number: 2, title: 'Semaine 2 · Reprise ciblée des lacunes prioritaires', objective: 'Utiliser le diagnostic pour renforcer les bases qui ont bloqué.', target_hours: 23,
    days: [
      { day_number: 1, title: 'Jour 1 · Calcul et unités', planned_hours: 4.5, themes: [
        {subject:'maths',activity_kind:'cours',title:'Calcul numérique et fractions',planned_hours:2,objective:'Rendre les calculs automatiques.',tasks:['40 calculs progressifs','20 fractions','corriger au carnet'],diagnostic_questions:[]},
        {subject:'physique',activity_kind:'cours',title:'Unités et conversions',planned_hours:1.2,objective:'Ne plus perdre de points sur les unités.',tasks:['40 conversions','fiche unités','10 ordres de grandeur'],diagnostic_questions:[]},
        {subject:'chimie',activity_kind:'cours',title:'Masse molaire et quantité de matière',planned_hours:1.3,objective:'Maîtriser n=m/M.',tasks:['20 masses molaires','20 n=m/M','fiche formules'],diagnostic_questions:[]}
      ]},
      { day_number: 2, title: 'Jour 2 · Équations et solutions', planned_hours: 4.5, themes: [
        {subject:'maths',activity_kind:'exercice',title:'Équations du premier degré',planned_hours:2,objective:'Résoudre proprement et vérifier.',tasks:['35 équations','10 problèmes','fiche méthode'],diagnostic_questions:[]},
        {subject:'chimie',activity_kind:'exercice',title:'Concentration et dilution',planned_hours:1.4,objective:'Comprendre C=n/V et dilution.',tasks:['20 concentrations','10 dilutions','correction active'],diagnostic_questions:[]},
        {subject:'informatique',activity_kind:'cours',title:'Variables et conditions',planned_hours:1.1,objective:'Réviser les bases algorithmiques.',tasks:['8 algorithmes','5 conditions','2 traces'],diagnostic_questions:[]}
      ]},
      { day_number: 3, title: 'Jour 3 · Fonctions et documents SVT', planned_hours: 4.5, themes: [
        {subject:'maths',activity_kind:'cours',title:'Fonctions : image, antécédent, graphique',planned_hours:2,objective:'Lire et exploiter une fonction simple.',tasks:['20 images/antécédents','5 graphiques','correction'],diagnostic_questions:[]},
        {subject:'svt',activity_kind:'methode',title:'Méthode SVT : observer, interpréter, conclure',planned_hours:1.5,objective:'Répondre avec méthode à un document.',tasks:['3 documents courts','réponses en 3 étapes','vocabulaire'],diagnostic_questions:[]},
        {subject:'physique',activity_kind:'exercice',title:'Vitesse et mouvement',planned_hours:1,objective:'Utiliser v=d/t sans confondre les unités.',tasks:['20 exercices','3 graphiques','fiche mouvement'],diagnostic_questions:[]}
      ]},
      { day_number: 4, title: 'Jour 4 · Équations chimiques et boucles', planned_hours: 4.5, themes: [
        {subject:'chimie',activity_kind:'exercice',title:'Équilibrer une équation chimique',planned_hours:1.5,objective:'Respecter la conservation des atomes.',tasks:['30 équations','correction immédiate','fiche méthode'],diagnostic_questions:[]},
        {subject:'informatique',activity_kind:'exercice',title:'Boucles pour/tant que',planned_hours:1.5,objective:'Répéter une instruction et tracer les variables.',tasks:['8 boucles pour','6 boucles tant que','3 traces'],diagnostic_questions:[]},
        {subject:'maths',activity_kind:'exercice',title:'Développement et factorisation',planned_hours:1.5,objective:'Réduire les erreurs de signe.',tasks:['25 développements','20 factorisations','liste erreurs'],diagnostic_questions:[]}
      ]},
      { day_number: 5, title: 'Jour 5 · Test semaine 2', planned_hours: 5, themes: [
        {subject:'maths',activity_kind:'test',title:'Test maths semaine 2',planned_hours:1.5,objective:'Évaluer calcul, équations, fonctions.',tasks:['Test 45 min','note /20','correction'],diagnostic_questions:[]},
        {subject:'physique',activity_kind:'test',title:'Test physique semaine 2',planned_hours:1,objective:'Évaluer unités et mouvement.',tasks:['Test 30 min','note /20','correction'],diagnostic_questions:[]},
        {subject:'chimie',activity_kind:'test',title:'Test chimie semaine 2',planned_hours:1,objective:'Évaluer mole, concentration, équation.',tasks:['Test 30 min','note /20','correction'],diagnostic_questions:[]},
        {subject:'svt',activity_kind:'test',title:'Test SVT semaine 2',planned_hours:.8,objective:'Évaluer méthode documentaire.',tasks:['1 document','10 questions','correction'],diagnostic_questions:[]},
        {subject:'informatique',activity_kind:'test',title:'Test informatique semaine 2',planned_hours:.7,objective:'Évaluer variables, conditions et boucles.',tasks:['2 algorithmes','1 trace','correction'],diagnostic_questions:[]}
      ]}
    ]
  },
  {
    week_number: 3, title: 'Semaine 3 · Consolidation fonctions, forces, mole et algorithmes', objective: 'Renforcer les notions qui serviront en terminale.', target_hours: 24,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:`Jour ${d} · Entraînement progressif`,planned_hours:d===5?5:4.75,themes:[
      {subject:'maths',activity_kind:d===5?'test':'exercice',title:d===5?'Test fonctions et équations':'Fonctions, équations et problèmes',planned_hours:1.8,objective:'Lire, calculer et rédiger.',tasks:['exercices progressifs','correction active','carnet erreurs'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:d===5?'test':'exercice',title:d===5?'Test forces':'Forces, poids et schémas',planned_hours:1.1,objective:'Identifier les forces et écrire les unités.',tasks:['schémas','calculs','fiche méthode'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:d===5?'test':'exercice',title:d===5?'Test mole et réaction':'Mole, équations et proportions',planned_hours:1.0,objective:'Utiliser les coefficients correctement.',tasks:['équations','n=m/M','proportions'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:'methode',title:'Génétique et méthode documentaire',planned_hours:.9,objective:'Répondre avec précision.',tasks:['vocabulaire','documents','schémas'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:'exercice',title:'Boucles et tableaux simples',planned_hours:.7,objective:'Renforcer la logique.',tasks:['algorithmes','traces','correction'],diagnostic_questions:[]}
    ]}))
  },
  {
    week_number: 4, title: 'Semaine 4 · Bilan du mois 1', objective: 'Mesurer les progrès du premier mois et corriger les bases fragiles.', target_hours: 22,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:d===5?'Jour 5 · Bilan mensuel':'Jour '+d+' · Révision ciblée',planned_hours:d===5?5:4.25,themes:[
      {subject:'maths',activity_kind:d===5?'test':'revision',title:d===5?'Test bilan maths mois 1':'Révision calcul, équations, fonctions',planned_hours:1.8,objective:'Stabiliser les bases.',tasks:['exercices ciblés','correction','fiche erreurs'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:d===5?'test':'revision',title:d===5?'Test bilan physique mois 1':'Révision unités, mouvement, forces',planned_hours:1,objective:'Raisonner avec schéma et unités.',tasks:['exercices','schémas','correction'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:d===5?'test':'revision',title:d===5?'Test bilan chimie mois 1':'Révision mole, concentration, équations',planned_hours:1,objective:'Relier formules et sens chimique.',tasks:['exercices','fiche formules','correction'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:d===5?'test':'revision',title:d===5?'Test bilan SVT mois 1':'Révision cellule, génétique, documents',planned_hours:.75,objective:'Améliorer la rédaction scientifique.',tasks:['documents','schémas','flashcards'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:d===5?'test':'revision',title:d===5?'Test bilan informatique mois 1':'Révision conditions, boucles, tableaux',planned_hours:.7,objective:'Écrire un algorithme propre.',tasks:['algorithmes','traces','correction'],diagnostic_questions:[]}
    ]}))
  },
  {
    week_number: 5, title: 'Semaine 5 · Approche douce des chapitres de terminale', objective: 'Aborder limites, électricité, redox, génétique et fonctions sans brûler les étapes.', target_hours: 24,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:`Jour ${d} · Préparation terminale`,planned_hours:d===5?5:4.75,themes:[
      {subject:'maths',activity_kind:d===5?'test':'cours',title:d===5?'Test limites/dérivées guidé':'Limites, dérivées et variations',planned_hours:1.8,objective:'Comprendre l’idée avant la technicité.',tasks:['lecture graphique','calculs simples','variations'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:d===5?'test':'cours',title:d===5?'Test électricité':'Électricité : U, I, R, loi d’Ohm',planned_hours:1.1,objective:'Maîtriser les relations de base.',tasks:['loi d’Ohm','circuits','unités'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:d===5?'test':'cours',title:d===5?'Test redox guidé':'Oxydoréduction : vocabulaire et demi-équations',planned_hours:1.1,objective:'Comprendre oxydant/réducteur.',tasks:['couples','demi-équations','méthode'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:'cours',title:'Génétique : croisements et pedigrees',planned_hours:.9,objective:'Lire les transmissions.',tasks:['croisements','arbres','vocabulaire'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:'cours',title:'Fonctions et procédures',planned_hours:.75,objective:'Découper un problème.',tasks:['fonctions','paramètres','retour'],diagnostic_questions:[]}
    ]}))
  },
  {
    week_number: 6, title: 'Semaine 6 · Suites, ondes, cinétique, immunité', objective: 'Augmenter l’endurance et la capacité à expliquer.', target_hours: 23,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:`Jour ${d} · Endurance`,planned_hours:d===5?5:4.5,themes:[
      {subject:'maths',activity_kind:d===5?'test':'exercice',title:d===5?'Test suites':'Suites arithmétiques et géométriques',planned_hours:1.7,objective:'Reconnaître et utiliser les formules.',tasks:['calcul de termes','problèmes','correction'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:d===5?'test':'exercice',title:d===5?'Test ondes':'Ondes : période, fréquence, longueur d’onde',planned_hours:1.1,objective:'Lire un signal et calculer.',tasks:['applications','graphiques','fiche'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:'exercice',title:'Cinétique chimique',planned_hours:.9,objective:'Lire les courbes et facteurs.',tasks:['courbes','facteurs','réponses'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:'methode',title:'Immunité et vaccination',planned_hours:.9,objective:'Schématiser et expliquer.',tasks:['schémas','documents','vocabulaire'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:'exercice',title:'Chaînes et fichiers',planned_hours:.7,objective:'Traiter du texte et des listes.',tasks:['chaînes','recherche','correction'],diagnostic_questions:[]}
    ]}))
  },
  {
    week_number: 7, title: 'Semaine 7 · Exercices longs et correction active', objective: 'Apprendre à tenir un raisonnement complet et chronométré.', target_hours: 25,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:`Jour ${d} · Raisonnement complet`,planned_hours:5,themes:[
      {subject:'maths',activity_kind:d===5?'test':'probleme',title:d===5?'Test long maths':'Problèmes mixtes maths',planned_hours:2,objective:'Relier plusieurs notions.',tasks:['exercice long','correction active','refaire sans aide'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:'probleme',title:'Problèmes guidés physique',planned_hours:1,objective:'Données, inconnues, formule, unités.',tasks:['problèmes','checklist','correction'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:'probleme',title:'Problèmes guidés chimie',planned_hours:1,objective:'Organiser les calculs.',tasks:['solution','réaction','fiche erreurs'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:'probleme',title:'Analyse documentaire longue',planned_hours:.6,objective:'Construire une réponse complète.',tasks:['document long','réécriture','méthode'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:'probleme',title:'Algorithme complet',planned_hours:.4,objective:'Combiner les notions.',tasks:['problème complet','trace','correction'],diagnostic_questions:[]}
    ]}))
  },
  {
    week_number: 8, title: 'Semaine 8 · Consolidation finale avant septembre', objective: 'Mesurer les progrès, réparer les derniers trous et préparer la rentrée.', target_hours: 22,
    days: [1,2,3,4,5].map((d) => ({day_number:d,title:d===5?'Jour 5 · Bilan final été':'Jour '+d+' · Remédiation personnalisée',planned_hours:d===5?5:4.25,themes:[
      {subject:'maths',activity_kind:d===5?'test':'remediation',title:d===5?'Test final maths':'Remédiation maths',planned_hours:1.8,objective:'Reprendre les 3 points faibles.',tasks:['exercices ciblés','correction','plan septembre'],diagnostic_questions:[]},
      {subject:'physique',activity_kind:d===5?'test':'remediation',title:d===5?'Test final physique':'Remédiation physique',planned_hours:.9,objective:'Réparer les erreurs récurrentes.',tasks:['exercices ciblés','fiche méthode','plan septembre'],diagnostic_questions:[]},
      {subject:'chimie',activity_kind:d===5?'test':'remediation',title:d===5?'Test final chimie':'Remédiation chimie',planned_hours:.9,objective:'Revoir mole, concentration, redox/acide-base.',tasks:['exercices ciblés','correction','plan septembre'],diagnostic_questions:[]},
      {subject:'svt',activity_kind:d===5?'test':'remediation',title:d===5?'Test final SVT':'Remédiation SVT',planned_hours:.8,objective:'Renforcer documents et vocabulaire.',tasks:['documents','schémas','flashcards'],diagnostic_questions:[]},
      {subject:'informatique',activity_kind:d===5?'test':'remediation',title:d===5?'Test final informatique':'Remédiation informatique',planned_hours:.6,objective:'Consolider algorithmique.',tasks:['algorithme complet','trace','correction'],diagnostic_questions:[]}
    ]}))
  }
];
