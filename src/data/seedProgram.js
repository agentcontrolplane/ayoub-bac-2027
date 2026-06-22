
export const SUBJECTS = {
  maths: { label: 'Maths', icon: '📐', color: '#2563eb' },
  physique: { label: 'Physique', icon: '🧲', color: '#7c3aed' },
  chimie: { label: 'Chimie', icon: '⚗️', color: '#0f766e' },
  svt: { label: 'SVT', icon: '🧬', color: '#16a34a' },
  informatique: { label: 'Informatique', icon: '💻', color: '#ea580c' },
};

// V7 : exercices diagnostiques plus profonds pour un élève qui entre/reprend la 4ème année secondaire
// section sciences expérimentales en Tunisie. Tous les exercices sont originaux et conçus pour évaluer
// les bases nécessaires avant la rentrée : calcul, fonctions, raisonnement, unités, exploitation de documents,
// algorithmique et méthode de correction.
export const DIAGNOSTIC_EXERCISES = {
  maths: [
    {
      title: 'Diagnostic maths 1 · calcul algébrique et équations',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : vérifier les automatismes indispensables avant les limites, dérivées et suites.\n\n1) Calculer A = 7 - 3 × 2 + 18 ÷ 6.\n2) Calculer B = (-2)^3 + 4 × (-3) - (-5).\n3) Simplifier C = 3/4 + 5/6 - 1/2.\n4) Développer et réduire : D = 3(2x - 5) - 2(x + 4).\n5) Factoriser : E = 6x^2 - 9x.\n6) Résoudre : 4x - 7 = 2x + 9.\n7) Résoudre : 3(x - 2) > 2x + 5.\n8) Résoudre le système : { x + y = 11 ; 2x - y = 4 }.\n9) Un produit coûte 80 dinars. Il augmente de 15 %, puis diminue de 10 %. Calculer son prix final.\n10) Expliquer en une phrase la différence entre développer et factoriser.`,
      expected_answer: `1) 4. 2) -15. 3) 13/12. 4) D = 4x - 23. 5) E = 3x(2x - 3). 6) x = 8. 7) x > 11. 8) x = 5 et y = 6. 9) 82,8 dinars. 10) Développer enlève les parenthèses ; factoriser écrit une somme sous forme de produit.`,
      correction: `Barème conseillé : 2 points par question. Les erreurs les plus importantes à repérer : priorités opératoires, signes négatifs, fractions, distributivité, passage d’un terme d’un membre à l’autre, confusion entre taux successifs et taux unique. Si le score est inférieur à 10/20, Ayoub doit refaire deux semaines de calcul algébrique avant d’attaquer les notions de 4ème année.`
    },
    {
      title: 'Diagnostic maths 2 · fonctions, lecture graphique et variations',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : vérifier la compréhension des fonctions avant les limites, continuité et dérivation.\n\nSoit f(x) = x² - 4x + 3.\n1) Calculer f(0), f(1), f(3) et f(5).\n2) Résoudre f(x)=0.\n3) Montrer que f(x) = (x - 1)(x - 3).\n4) Déterminer l’axe de symétrie de la parabole.\n5) Donner le minimum de f et la valeur de x où il est atteint.\n\nSoit g une fonction affine telle que g(2)=7 et g(5)=16.\n6) Calculer son coefficient directeur.\n7) Trouver l’expression de g(x).\n8) Résoudre g(x) = 0.\n9) Dire si g est croissante ou décroissante, en justifiant.\n10) Rédiger une phrase qui explique ce qu’est un antécédent.`,
      expected_answer: `1) f(0)=3, f(1)=0, f(3)=0, f(5)=8. 2) x=1 ou x=3. 3) (x-1)(x-3)=x²-4x+3. 4) x=2. 5) minimum f(2)=-1. 6) a=(16-7)/(5-2)=3. 7) g(x)=3x+1. 8) x=-1/3. 9) g est croissante car a=3>0. 10) Un antécédent de y est une valeur de x dont l’image vaut y.`,
      correction: `Barème : 2 points par question. Ce test mesure la lecture de fonction, la factorisation, les zéros, la variation et le vocabulaire. S’il ne sait pas expliquer image/antécédent, il risque d’être perdu en analyse.`
    },
    {
      title: 'Diagnostic maths 3 · suites, logique et raisonnement',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester la logique avant les suites réelles de 4ème année.\n\n1) Une suite est définie par u0 = 3 et u(n+1)=u(n)+4. Calculer u1, u2, u3.\n2) Donner une expression de un en fonction de n.\n3) Calculer u10.\n4) Une suite v est définie par v0=2 et v(n+1)=3v(n). Calculer v1, v2, v3.\n5) Donner une expression de vn en fonction de n.\n6) Une population de bactéries double chaque heure. Au départ il y en a 500. Combien y en a-t-il après 5 heures ?\n7) Dire si la suite 5 ; 8 ; 11 ; 14 est arithmétique ou géométrique. Justifier.\n8) Dire si la suite 2 ; 6 ; 18 ; 54 est arithmétique ou géométrique. Justifier.\n9) Trouver le 20ème terme de la suite arithmétique de premier terme 7 et de raison 3, en prenant u1=7.\n10) Expliquer pourquoi il faut toujours préciser le premier indice d’une suite.`,
      expected_answer: `1) u1=7, u2=11, u3=15. 2) un=3+4n. 3) u10=43. 4) v1=6, v2=18, v3=54. 5) vn=2×3^n. 6) 500×2^5=16000. 7) Arithmétique, raison 3. 8) Géométrique, raison 3. 9) u20=7+19×3=64. 10) Car la formule change selon que le premier terme est u0 ou u1.`,
      correction: `Barème : 2 points par question. Ce test distingue calcul mécanique et compréhension. S’il confond arithmétique/géométrique, reprendre les suites très progressivement.`
    },
    {
      title: 'Diagnostic maths 4 · géométrie, vecteurs et probabilités',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les bases de géométrie analytique et probabilités.\n\nDans un repère, A(1 ; 2), B(5 ; 4), C(3 ; -2).\n1) Calculer les coordonnées du vecteur AB.\n2) Calculer la longueur AB.\n3) Calculer les coordonnées du milieu I de [AB].\n4) Calculer le produit scalaire AB · AC.\n5) Les vecteurs AB et AC sont-ils orthogonaux ? Justifier.\n6) Donner l’équation réduite de la droite passant par A et B.\n\nOn lance un dé équilibré à 6 faces.\n7) Quelle est la probabilité d’obtenir un nombre pair ?\n8) Quelle est la probabilité d’obtenir un nombre strictement supérieur à 4 ?\n9) On lance deux fois le dé. Quelle est la probabilité d’obtenir deux 6 ?\n10) Expliquer la différence entre événement impossible et événement certain.`,
      expected_answer: `1) AB=(4 ; 2). 2) AB=√20=2√5. 3) I(3 ; 3). 4) AC=(2 ; -4), donc AB·AC = 4×2 + 2×(-4)=0. 5) Oui, produit scalaire nul. 6) pente = 1/2, donc y = 0,5x + 1,5. 7) 3/6=1/2. 8) 2/6=1/3. 9) 1/36. 10) Impossible : probabilité 0 ; certain : probabilité 1.`,
      correction: `Barème : 2 points par question. Ce diagnostic prépare produit scalaire/vectoriel dans l’espace et probabilités. Les erreurs d’unités, de coordonnées ou de formule sont à noter dans le carnet d’erreurs.`
    }
  ],
  physique: [
    {
      title: 'Diagnostic physique 1 · unités, conversions et mouvement',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les bases de mesure et mouvement.\n\n1) Convertir 90 km/h en m/s.\n2) Convertir 0,75 h en secondes.\n3) Convertir 250 cm en m.\n4) Une voiture parcourt 180 m en 12 s. Calculer sa vitesse en m/s.\n5) Convertir cette vitesse en km/h.\n6) Un mobile se déplace à 5 m/s pendant 3 min. Calculer la distance parcourue.\n7) Donner les unités SI de la masse, du temps, de la distance, de la vitesse et de la force.\n8) Un graphique x(t) est une droite croissante. Que peut-on dire du mouvement ?\n9) Si la pente de x(t) augmente, que peut-on dire de la vitesse ?\n10) Pourquoi une réponse numérique sans unité est-elle incomplète ?`,
      expected_answer: `1) 25 m/s. 2) 2700 s. 3) 2,5 m. 4) 15 m/s. 5) 54 km/h. 6) 5×180=900 m. 7) kg, s, m, m/s, N. 8) Mouvement rectiligne uniforme si la droite est régulière. 9) La vitesse augmente. 10) L’unité indique la grandeur mesurée et permet de vérifier la cohérence du résultat.`,
      correction: `Barème : 2 points par question. Si conversions et unités sont faibles, physique et chimie deviendront très difficiles. Reprendre les conversions tous les jours pendant 10 minutes.`
    },
    {
      title: 'Diagnostic physique 2 · forces, poids et bilan mécanique',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : évaluer la compréhension des forces avant oscillations et systèmes mécaniques.\n\n1) Définir une force en une phrase.\n2) Donner l’unité d’une force.\n3) Un corps de masse 3 kg est près de la Terre, avec g = 10 N/kg. Calculer son poids.\n4) Indiquer direction et sens du poids.\n5) Un livre est posé immobile sur une table. Citer les deux forces principales.\n6) Un objet est suspendu à un fil. Citer les forces qui s’appliquent.\n7) Si un objet est immobile, peut-on dire qu’aucune force ne s’applique ? Justifier.\n8) Calculer l’intensité d’une force résultante si deux forces de 8 N et 3 N ont même direction et même sens.\n9) Même question si elles sont de sens opposés.\n10) Faire une phrase qui explique ce qu’est un bilan des forces.`,
      expected_answer: `1) Action mécanique capable de modifier le mouvement ou déformer un corps. 2) Newton N. 3) P=30 N. 4) Verticale, vers le bas. 5) Poids et réaction de la table. 6) Poids et tension du fil. 7) Non, les forces peuvent se compenser. 8) 11 N. 9) 5 N dans le sens de la plus grande. 10) Inventaire des forces appliquées à un système avec direction, sens et intensité.`,
      correction: `Barème : 2 points par question. On vérifie surtout le raisonnement physique : système, force, compensation, schéma mental.`
    },
    {
      title: 'Diagnostic physique 3 · énergie, travail et puissance',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : préparer les futurs chapitres d’oscillations et d’énergie.\n\nDonnées : Ec = 1/2 m v² ; W = F × d si la force et le déplacement ont même direction ; P = W/t.\n1) Calculer l’énergie cinétique d’un corps de masse 2 kg roulant à 4 m/s.\n2) Calculer l’énergie cinétique d’un corps de masse 5 kg roulant à 2 m/s.\n3) Une force de 12 N déplace un objet de 3 m. Calculer le travail.\n4) Ce travail est réalisé en 6 s. Calculer la puissance.\n5) Si la vitesse double, par combien l’énergie cinétique est-elle multipliée ?\n6) Donner deux formes d’énergie.\n7) Dans une chute sans frottement, quelle énergie diminue et quelle énergie augmente ?\n8) Expliquer pourquoi le frottement peut faire perdre de l’énergie mécanique.\n9) Donner l’unité de l’énergie.\n10) Donner l’unité de la puissance.`,
      expected_answer: `1) 16 J. 2) 10 J. 3) 36 J. 4) 6 W. 5) Par 4. 6) Cinétique, potentielle, électrique, thermique... 7) Potentielle diminue, cinétique augmente. 8) Une partie est transformée en chaleur. 9) Joule J. 10) Watt W.`,
      correction: `Barème : 2 points par question. Ce test repère les élèves qui appliquent une formule sans comprendre les unités.`
    },
    {
      title: 'Diagnostic physique 4 · électricité de base',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : préparer les chapitres condensateur, dipôles RC/RL et oscillations électriques.\n\n1) Que représente l’intensité du courant électrique ?\n2) Que représente la tension électrique ?\n3) Donner les unités de I, U et R.\n4) Écrire la loi d’Ohm.\n5) Un conducteur ohmique a R = 20 Ω et I = 0,3 A. Calculer U.\n6) Un dipôle a U = 12 V et R = 40 Ω. Calculer I.\n7) Deux résistances R1=10 Ω et R2=20 Ω sont en série. Calculer Req.\n8) Si deux lampes sont en série et l’une grille, que se passe-t-il ?\n9) Donner une différence entre montage série et montage dérivation.\n10) Pourquoi faut-il faire un schéma électrique propre ?`,
      expected_answer: `1) Débit de charges électriques. 2) Différence d’état électrique entre deux points. 3) I en ampère A, U en volt V, R en ohm Ω. 4) U=R×I. 5) U=6 V. 6) I=0,3 A. 7) Req=30 Ω. 8) Le circuit s’ouvre, les lampes s’éteignent. 9) Série : même branche ; dérivation : branches différentes. 10) Pour identifier les dipôles, les grandeurs et les relations.`,
      correction: `Barème : 2 points par question. S’il ne maîtrise pas U, I, R, il faut reprendre l’électricité avant les circuits plus avancés.`
    }
  ],
  chimie: [
    {
      title: 'Diagnostic chimie 1 · atome, ion, molécule et équation chimique',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : vérifier le vocabulaire indispensable.\n\n1) Donner la différence entre atome et ion.\n2) Donner la différence entre molécule et ion.\n3) Dans Na+, combien de charges positives porte l’ion ?\n4) Dans Cl-, quelle est la charge globale ?\n5) Donner la composition de H2O.\n6) Donner la composition de CO2.\n7) Équilibrer : H2 + O2 → H2O.\n8) Équilibrer : CH4 + O2 → CO2 + H2O.\n9) Expliquer pourquoi on doit équilibrer une équation chimique.\n10) Dans une réaction, que deviennent les atomes ?`,
      expected_answer: `1) Un ion est un atome ou groupe qui a perdu/gagné des électrons. 2) Une molécule est neutre ; un ion est chargé. 3) Charge +1. 4) Charge -1. 5) 2 H et 1 O. 6) 1 C et 2 O. 7) 2H2 + O2 → 2H2O. 8) CH4 + 2O2 → CO2 + 2H2O. 9) Conservation des atomes. 10) Ils se réarrangent, ils ne disparaissent pas.`,
      correction: `Barème : 2 points par question. Les erreurs ici montrent souvent une faiblesse de vocabulaire, pas seulement de calcul.`
    },
    {
      title: 'Diagnostic chimie 2 · mole, masse molaire et concentration',
      duration_minutes: 55,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les calculs de base utilisés toute l’année.\n\nDonnées : H=1 g/mol ; C=12 g/mol ; O=16 g/mol ; Na=23 g/mol ; Cl=35,5 g/mol.\n1) Calculer M(H2O).\n2) Calculer M(CO2).\n3) Calculer M(NaCl).\n4) Calculer la quantité de matière dans 18 g d’eau.\n5) Calculer la masse de 0,5 mol de CO2.\n6) Une solution contient 10 g de NaCl dans 500 mL. Calculer la concentration massique en g/L.\n7) Une solution a C = 0,2 mol/L et V = 0,25 L. Calculer n.\n8) On dilue une solution. Sa concentration augmente-t-elle ou diminue-t-elle ?\n9) Convertir 250 mL en L.\n10) Expliquer la différence entre concentration massique et concentration molaire.`,
      expected_answer: `1) 18 g/mol. 2) 44 g/mol. 3) 58,5 g/mol. 4) 1 mol. 5) 22 g. 6) 20 g/L. 7) n=0,05 mol. 8) Elle diminue. 9) 0,250 L. 10) Massique en g/L, molaire en mol/L.`,
      correction: `Barème : 2 points par question. Les conversions mL/L et les unités sont à surveiller de très près.`
    },
    {
      title: 'Diagnostic chimie 3 · acide-base et pH',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : préparer les chapitres sur pH et solutions aqueuses.\n\n1) Une solution de pH=2 est-elle acide, basique ou neutre ?\n2) Une solution de pH=7 est-elle acide, basique ou neutre ?\n3) Une solution de pH=12 est-elle acide, basique ou neutre ?\n4) Quand le pH diminue, l’acidité augmente-t-elle ou diminue-t-elle ?\n5) Définir une dilution.\n6) On prélève 10 mL d’une solution mère et on complète à 100 mL. Le facteur de dilution vaut combien ?\n7) Si Cmère = 0,5 mol/L et facteur F=10, quelle est Cfille ?\n8) Donner un exemple d’acide courant.\n9) Donner un exemple de base courante.\n10) Pourquoi faut-il manipuler les acides/bases avec prudence ?`,
      expected_answer: `1) Acide. 2) Neutre. 3) Basique. 4) Elle augmente. 5) Ajouter du solvant pour diminuer la concentration. 6) F=10. 7) 0,05 mol/L. 8) Acide chlorhydrique, vinaigre... 9) Soude, ammoniaque... 10) Risque de brûlures/irritation et réaction dangereuse.`,
      correction: `Barème : 2 points par question. Ce diagnostic doit repérer s’il comprend le sens du pH et la logique de dilution.`
    },
    {
      title: 'Diagnostic chimie 4 · oxydoréduction et réactif limitant',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : évaluer l’entrée vers les chapitres redox et piles.\n\n1) Une oxydation correspond-elle à une perte ou un gain d’électrons ?\n2) Une réduction correspond-elle à une perte ou un gain d’électrons ?\n3) Dans Cu2+ + 2e- → Cu, Cu2+ est-il oxydé ou réduit ?\n4) Dans Zn → Zn2+ + 2e-, Zn est-il oxydé ou réduit ?\n5) Définir réactif limitant.\n6) On a la réaction A + 2B → C. Si on dispose de 3 mol de A et 4 mol de B, quel est le réactif limitant ?\n7) Pour la question 6, quelle quantité de C peut se former ?\n8) Pourquoi les coefficients d’une équation chimique sont-ils importants ?\n9) Dans une pile, y a-t-il transformation chimique en énergie électrique ?\n10) Citer une difficulté personnelle possible dans ce chapitre.`,
      expected_answer: `1) Perte d’électrons. 2) Gain d’électrons. 3) Réduit. 4) Oxydé. 5) Réactif consommé totalement en premier. 6) B est limitant : 4 mol de B nécessitent 2 mol de A. 7) 2 mol de C. 8) Ils donnent les proportions. 9) Oui. 10) Réponse personnelle.`,
      correction: `Barème : 2 points par question, la question 10 sert au carnet d’erreurs. Si les proportions sont incomprises, refaire des exercices très guidés.`
    }
  ],
  svt: [
    {
      title: 'Diagnostic SVT 1 · méthode documentaire et vocabulaire cellulaire',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : évaluer la méthode SVT, pas seulement les définitions.\n\n1) Citer quatre éléments d’une cellule eucaryote.\n2) Donner le rôle du noyau.\n3) Donner le rôle de la membrane plasmique.\n4) Différencier observation et interprétation.\n5) Un document montre que la quantité d’ADN double avant la division cellulaire. Formuler une observation.\n6) Formuler une interprétation possible de cette observation.\n7) Différencier ADN, chromosome et gène.\n8) Expliquer ce qu’est une mutation.\n9) Pourquoi une réponse SVT doit-elle citer le document ?\n10) Rédiger une mini-réponse structurée : observation → interprétation → conclusion sur le doublement de l’ADN avant division.`,
      expected_answer: `1) Noyau, cytoplasme, membrane, mitochondrie... 2) Il contient l’information génétique. 3) Elle délimite et contrôle les échanges. 4) Observation = ce que je vois ; interprétation = ce que j’en déduis. 5) La quantité d’ADN augmente et devient double. 6) L’ADN est répliqué avant division. 7) ADN molécule support ; chromosome forme organisée/condensée ; gène portion d’ADN. 8) Modification de l’ADN. 9) Pour justifier scientifiquement. 10) Réponse structurée attendue.`,
      correction: `Barème : 2 points par question. Ce test prépare les exercices de bac où il faut exploiter un document et construire une conclusion.`
    },
    {
      title: 'Diagnostic SVT 2 · génétique humaine et croisements',
      duration_minutes: 55,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les bases de génétique formelle et humaine.\n\nOn étudie un caractère contrôlé par un gène ayant deux allèles : A dominant et a récessif.\n1) Définir allèle.\n2) Définir génotype.\n3) Définir phénotype.\n4) Donner le phénotype d’un individu AA.\n5) Donner le phénotype d’un individu Aa.\n6) Donner le phénotype d’un individu aa.\n7) Croiser deux individus Aa × Aa. Faire le tableau de croisement.\n8) Donner les proportions génotypiques attendues.\n9) Donner les proportions phénotypiques attendues.\n10) Dans un arbre généalogique, pourquoi étudie-t-on les parents et les enfants ?`,
      expected_answer: `1) Version d’un gène. 2) Combinaison d’allèles. 3) Caractère observable. 4) Dominant. 5) Dominant. 6) Récessif. 7) Tableau avec AA, Aa, Aa, aa. 8) 1/4 AA, 1/2 Aa, 1/4 aa. 9) 3/4 dominant, 1/4 récessif. 10) Pour déterminer le mode de transmission.`,
      correction: `Barème : 2 points par question. Si le tableau de croisement est impossible pour lui, il faut reprendre génétique depuis le vocabulaire.`
    },
    {
      title: 'Diagnostic SVT 3 · immunité',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les bases de l’immunité, chapitre fréquent et exigeant.\n\n1) Définir antigène.\n2) Définir anticorps.\n3) Citer deux cellules impliquées dans la réponse immunitaire.\n4) Différencier immunité innée et immunité adaptative.\n5) Expliquer la phagocytose en une phrase.\n6) Quel est le rôle des lymphocytes B ?\n7) Quel est le rôle des lymphocytes T ?\n8) Pourquoi la réponse secondaire est-elle plus rapide ?\n9) Expliquer le principe de la vaccination.\n10) Rédiger une phrase de conclusion : pourquoi le système immunitaire protège-t-il l’organisme ?`,
      expected_answer: `1) Élément reconnu comme étranger. 2) Protéine qui reconnaît spécifiquement un antigène. 3) Phagocytes, lymphocytes B, lymphocytes T. 4) Innée rapide/non spécifique ; adaptative spécifique avec mémoire. 5) Capture/destruction d’un élément étranger. 6) Production d’anticorps. 7) Destruction/coordination selon type. 8) Cellules mémoire. 9) Présenter un antigène inoffensif pour créer une mémoire. 10) Réponse synthétique.`,
      correction: `Barème : 2 points par question. On attend un vocabulaire précis, pas une récitation floue.`
    },
    {
      title: 'Diagnostic SVT 4 · reproduction, neurophysiologie et régulation',
      duration_minutes: 55,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les bases de procréation et de régulation nerveuse/hormonale.\n\n1) Définir gamète.\n2) Nommer les gamètes mâle et femelle.\n3) Définir fécondation.\n4) Donner le rôle général des hormones.\n5) Expliquer ce qu’est un organe cible.\n6) Donner un exemple de régulation hormonale dans la reproduction.\n7) Définir neurone.\n8) Expliquer le rôle d’un message nerveux.\n9) Différencier récepteur sensoriel et centre nerveux.\n10) Pourquoi les schémas fléchés sont-ils utiles en SVT ?`,
      expected_answer: `1) Cellule reproductrice. 2) Spermatozoïde et ovule. 3) Union des deux gamètes. 4) Messagers chimiques. 5) Organe sensible à une hormone. 6) Axe hypothalamo-hypophysaire/gonades ou hormones ovariennes. 7) Cellule nerveuse. 8) Transporter une information. 9) Récepteur capte le stimulus ; centre nerveux traite l’information. 10) Ils montrent relations, étapes et régulations.`,
      correction: `Barème : 2 points par question. Si les réponses sont trop vagues, travailler avec schémas fléchés et définitions courtes.`
    }
  ],
  informatique: [
    {
      title: 'Diagnostic informatique 1 · variables, types et affectation',
      duration_minutes: 40,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : vérifier la base de l’algorithmique.\n\n1) Définir une variable.\n2) Donner le type adapté pour : âge, nom, moyenne, admis.\n3) Quelle est la valeur de x après : x ← 5 ; x ← x + 3 ; x ← 2*x ?\n4) Écrire un algorithme qui lit deux nombres et affiche leur somme.\n5) Écrire un algorithme qui lit une note et affiche “admis” si note ≥ 10, sinon “refusé”.\n6) Que signifie initialiser une variable ?\n7) Pourquoi faut-il choisir des noms de variables clairs ?\n8) Quelle différence entre entrée et sortie ?\n9) Donner un exemple de booléen.\n10) Corriger cette erreur : moyenne ← note1 + note2 / 2.`,
      expected_answer: `1) Espace mémoire nommé. 2) entier, chaîne, réel, booléen. 3) x=16. 4) Lire a,b ; s←a+b ; afficher s. 5) Condition si/sinon. 6) Donner une première valeur. 7) Lisibilité. 8) Entrée = donnée reçue ; sortie = résultat affiché. 9) vrai/faux. 10) moyenne ← (note1+note2)/2.`,
      correction: `Barème : 2 points par question. On mesure la logique, pas seulement la syntaxe d’un langage précis.`
    },
    {
      title: 'Diagnostic informatique 2 · conditions et logique',
      duration_minutes: 45,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les conditions simples et composées.\n\n1) Écrire une condition pour tester si x est positif.\n2) Écrire une condition pour tester si x est compris entre 0 et 20.\n3) Écrire un algorithme qui affiche le maximum de deux nombres.\n4) Écrire un algorithme qui affiche le maximum de trois nombres.\n5) Une note est valide si elle est entre 0 et 20. Écrire la condition.\n6) Différencier ET et OU avec un exemple.\n7) Que fait l’instruction sinon ?\n8) Pourquoi l’ordre des conditions peut-il être important ?\n9) Corriger : si x=10 alors afficher “égal”.\n10) Donner un exemple de condition imbriquée.`,
      expected_answer: `1) x>0. 2) x>=0 ET x<=20. 3) Algorithme max deux nombres. 4) Algorithme max trois nombres. 5) note>=0 ET note<=20. 6) ET exige les deux ; OU au moins une. 7) Cas contraire. 8) Certains cas peuvent être captés avant les autres. 9) Selon langage : x==10 pour comparaison, ou notation algorithmique correcte. 10) Si ... alors si ...`,
      correction: `Barème : 2 points par question. Si le maximum de trois nombres bloque, reprendre conditions imbriquées.`
    },
    {
      title: 'Diagnostic informatique 3 · boucles et accumulation',
      duration_minutes: 50,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : tester les boucles, base essentielle avant les tableaux.\n\n1) Écrire une boucle qui affiche les nombres de 1 à 10.\n2) Écrire une boucle qui affiche les nombres pairs de 2 à 20.\n3) Écrire un algorithme qui lit 5 notes et calcule leur somme.\n4) Modifier l’algorithme pour calculer la moyenne.\n5) À quoi sert un compteur ?\n6) À quoi sert un accumulateur ?\n7) Différencier boucle Pour et boucle Tant que.\n8) Que peut-il se passer si la condition d’une boucle Tant que ne devient jamais fausse ?\n9) Écrire un algorithme qui compte le nombre de notes ≥ 10 parmi 5 notes.\n10) Donner une erreur fréquente dans les boucles.`,
      expected_answer: `1) Pour i de 1 à 10 afficher i. 2) Pour i de 2 à 20 pas 2. 3) somme initialisée à 0 puis ajout. 4) moyenne=somme/5. 5) Compter. 6) Additionner progressivement. 7) Pour : répétitions connues ; Tant que : condition. 8) Boucle infinie. 9) compteur admis. 10) Oublier initialisation/incrémentation.`,
      correction: `Barème : 2 points par question. Les oublis d’initialisation sont à noter dans le carnet d’erreurs.`
    },
    {
      title: 'Diagnostic informatique 4 · tableaux et fonctions',
      duration_minutes: 55,
      points: 20,
      difficulty: 'diagnostic',
      question: `Objectif : évaluer l’entrée vers les exercices pratiques plus longs.\n\n1) Définir un tableau.\n2) Pourquoi utilise-t-on un tableau plutôt que cinq variables séparées ?\n3) Écrire un algorithme qui remplit un tableau T de 5 notes.\n4) Calculer la moyenne des 5 notes du tableau.\n5) Trouver la plus grande note du tableau.\n6) Écrire une fonction carre(x) qui retourne x².\n7) Écrire une fonction max2(a,b) qui retourne le plus grand des deux.\n8) Différencier procédure et fonction.\n9) Qu’est-ce qu’un paramètre ?\n10) Pourquoi découper un programme en fonctions ?`,
      expected_answer: `1) Structure qui contient plusieurs valeurs. 2) Pour traiter une collection avec une boucle. 3) Boucle de saisie. 4) Somme puis division par 5. 5) max initialisé puis comparaison. 6) retourner x*x. 7) si a>b retourner a sinon b. 8) Fonction retourne une valeur ; procédure réalise une action. 9) Valeur donnée à une fonction/procédure. 10) Lisibilité et réutilisation.`,
      correction: `Barème : 2 points par question. Si tableaux/fonctions sont faibles, construire un plan informatique spécifique.`
    }
  ]
};

export const SEED_PROGRAM = [
  {
    week_number: 1,
    title: 'Semaine 1 · Diagnostic approfondi 4ème sciences expérimentales',
    target_hours: 25,
    objective: 'Évaluer sérieusement le niveau réel d’Ayoub avant de construire la suite : bases de calcul, fonctions, unités, chimie, SVT et algorithmique.',
    days: [
      { day_number: 1, title: 'Jour 1 · Diagnostic maths', target_hours: 5, objective: 'Passer les 4 tests de maths puis noter les erreurs.', lessons: [
        { subject:'maths', title:'Test diagnostic maths complet', target_minutes:210, objective:'Évaluer calcul algébrique, fonctions, suites, géométrie et probabilités.', exercises:['maths'], tasks:['Passer les 4 exercices sans aide.', 'Ne pas effacer les brouillons : ils servent à comprendre les erreurs.', 'Remplir le carnet d’erreurs après correction.'] },
        { subject:'maths', title:'Correction active maths', target_minutes:90, objective:'Refaire les exercices faux sans regarder la correction.', exercises:[], tasks:['Classer les erreurs : calcul, signe, méthode, compréhension.', 'Refaire au moins 10 questions ratées.', 'Soumettre une photo du cahier.'] }
      ]},
      { day_number: 2, title:'Jour 2 · Diagnostic physique', target_hours:5, objective:'Tester unités, mouvement, forces, énergie et électricité.', lessons:[
        { subject:'physique', title:'Test diagnostic physique complet', target_minutes:210, objective:'Évaluer les bases nécessaires avant RC/RL, oscillations et ondes.', exercises:['physique'], tasks:['Passer les 4 exercices sans aide.', 'Écrire les unités dans toutes les réponses.', 'Noter les formules oubliées.'] },
        { subject:'physique', title:'Correction active physique', target_minutes:90, objective:'Reprendre les erreurs de conversion, schéma et formule.', exercises:[], tasks:['Créer une fiche unités/formules.', 'Refaire les calculs faux.', 'Soumettre une photo du cahier.'] }
      ]},
      { day_number: 3, title:'Jour 3 · Diagnostic chimie', target_hours:5, objective:'Tester atome, mole, concentration, acide-base et redox.', lessons:[
        { subject:'chimie', title:'Test diagnostic chimie complet', target_minutes:210, objective:'Évaluer les bases nécessaires avant cinétique, pH, loi d’action de masse, piles.', exercises:['chimie'], tasks:['Passer les 4 exercices sans aide.', 'Écrire toutes les unités.', 'Noter les confusions de vocabulaire.'] },
        { subject:'chimie', title:'Correction active chimie', target_minutes:90, objective:'Reprendre mole, concentration, dilution et équations chimiques.', exercises:[], tasks:['Créer une fiche n=m/M, C=n/V, Cm=m/V.', 'Refaire 10 calculs faux.', 'Soumettre une photo du cahier.'] }
      ]},
      { day_number:4, title:'Jour 4 · Diagnostic SVT', target_hours:5, objective:'Tester méthode documentaire, génétique, immunité, reproduction et neurophysiologie.', lessons:[
        { subject:'svt', title:'Test diagnostic SVT complet', target_minutes:210, objective:'Évaluer les connaissances et surtout la méthode de réponse scientifique.', exercises:['svt'], tasks:['Répondre avec des phrases complètes.', 'Séparer observation, interprétation et conclusion.', 'Noter les mots mal compris.'] },
        { subject:'svt', title:'Correction active SVT', target_minutes:90, objective:'Transformer les erreurs en fiches courtes.', exercises:[], tasks:['Créer une fiche vocabulaire SVT.', 'Réécrire une réponse documentaire.', 'Soumettre une photo du cahier.'] }
      ]},
      { day_number:5, title:'Jour 5 · Diagnostic informatique et bilan', target_hours:5, objective:'Tester l’algorithmique puis faire un bilan général avec Wejden.', lessons:[
        { subject:'informatique', title:'Test diagnostic informatique complet', target_minutes:210, objective:'Évaluer variables, conditions, boucles, tableaux et fonctions.', exercises:['informatique'], tasks:['Écrire les algorithmes proprement.', 'Tester les valeurs à la main.', 'Noter les blocages de logique.'] },
        { subject:'informatique', title:'Correction informatique', target_minutes:60, objective:'Corriger les algorithmes et repérer la notion la plus faible.', exercises:[], tasks:['Refaire deux algorithmes faux.', 'Créer une fiche pseudo-code.'] },
        { subject:'maths', title:'Bilan général avec Wejden', target_minutes:30, objective:'Décider des priorités de la semaine 2.', exercises:[], tasks:['Noter les 3 priorités par matière.', 'Wejden attribue les notes diagnostic.', 'Décider si une matière doit être reprise en priorité.'] }
      ]}
    ]
  },
  {
    week_number: 2,
    title: 'Semaine 2 · Remédiation selon diagnostic',
    target_hours: 20,
    objective: 'Reprendre les lacunes urgentes détectées en semaine 1.',
    days: [
      { day_number:1, title:'Jour 1 · Calcul et équations', target_hours:4, objective:'Réparer les bases maths les plus urgentes.', lessons:[
        {subject:'maths', title:'Calculs, fractions, équations', target_minutes:120, objective:'Automatiser les bases.', exercises:[], tasks:['Lire le cours de la plateforme.', 'Faire 30 exercices progressifs.', 'Soumettre une photo du cahier.']},
        {subject:'physique', title:'Conversions rapides', target_minutes:60, objective:'Installer les unités.', exercises:[], tasks:['Faire 30 conversions.', 'Corriger avec unités.']},
        {subject:'informatique', title:'Variables et conditions', target_minutes:60, objective:'Reprendre les bases algorithmiques.', exercises:[], tasks:['Faire 8 algorithmes simples.', 'Noter les erreurs de logique.']}
      ]},
      { day_number:2, title:'Jour 2 · Fonctions et mouvement', target_hours:4, objective:'Relier maths et physique.', lessons:[
        {subject:'maths', title:'Fonctions et lecture graphique', target_minutes:120, objective:'Image, antécédent, zéros et variations.', exercises:[], tasks:['Faire 20 questions de fonctions.', 'Tracer 3 courbes simples.', 'Soumettre une photo.']},
        {subject:'physique', title:'Mouvement et vitesse', target_minutes:90, objective:'Calculer et interpréter.', exercises:[], tasks:['Faire 20 exercices v=d/t.', 'Lire 2 graphiques.']},
        {subject:'svt', title:'Méthode observation/interprétation', target_minutes:30, objective:'Structurer une réponse SVT.', exercises:[], tasks:['Réécrire une réponse en 3 étapes.']}
      ]},
      { day_number:3, title:'Jour 3 · Chimie calculatoire', target_hours:4, objective:'Mole, concentration et dilution.', lessons:[
        {subject:'chimie', title:'Mole et masse molaire', target_minutes:90, objective:'Utiliser n=m/M.', exercises:[], tasks:['Faire 20 calculs de masse molaire.', 'Faire 15 applications n=m/M.']},
        {subject:'chimie', title:'Concentration et dilution', target_minutes:90, objective:'Utiliser C=n/V, Cm=m/V et dilution.', exercises:[], tasks:['Faire 20 exercices.', 'Créer une fiche formules.']},
        {subject:'maths', title:'Proportionnalité et pourcentages', target_minutes:60, objective:'Réparer les calculs utilisés en chimie.', exercises:[], tasks:['Faire 20 exercices.']}
      ]},
      { day_number:4, title:'Jour 4 · SVT génétique et immunité', target_hours:4, objective:'Reprendre vocabulaire et méthode.', lessons:[
        {subject:'svt', title:'Génétique de base', target_minutes:90, objective:'Allèle, génotype, phénotype, croisement.', exercises:[], tasks:['Faire une fiche définitions.', 'Faire 5 tableaux de croisement.']},
        {subject:'svt', title:'Immunité de base', target_minutes:90, objective:'Antigène, anticorps, lymphocytes, mémoire.', exercises:[], tasks:['Faire un schéma immunité.', 'Répondre à 10 questions.']},
        {subject:'informatique', title:'Boucles simples', target_minutes:60, objective:'Automatiser pour/tant que.', exercises:[], tasks:['Faire 6 algorithmes de boucle.']}
      ]},
      { day_number:5, title:'Jour 5 · Test court de remédiation', target_hours:4, objective:'Vérifier si la semaine 2 a réparé les bases.', lessons:[
        {subject:'maths', title:'Mini-test remédiation maths', target_minutes:60, objective:'Calculs, équations, fonctions.', exercises:[], tasks:['Créer un mini-test sur la plateforme.', 'Wejden note /20.']},
        {subject:'physique', title:'Mini-test physique/chimie', target_minutes:60, objective:'Unités, vitesse, mole, concentration.', exercises:[], tasks:['Faire un test court.', 'Corriger les erreurs.']},
        {subject:'svt', title:'Mini-test SVT/info', target_minutes:60, objective:'Vocabulaire et algorithmes.', exercises:[], tasks:['Faire 10 questions SVT.', 'Faire 2 algorithmes.']},
        {subject:'maths', title:'Bilan semaine 2', target_minutes:60, objective:'Décider validation ou reprise.', exercises:[], tasks:['Wejden valide la semaine ou repasse un thème.']}
      ]}
    ]
  },
  { week_number:3, title:'Semaine 3 · Fonctions, forces et solutions', target_hours:20, objective:'Installer les bases qui reviendront toute l’année.', days:[] },
  { week_number:4, title:'Semaine 4 · Trigonométrie, énergie et génétique', target_hours:20, objective:'Renforcer les outils scientifiques essentiels.', days:[] },
  { week_number:5, title:'Semaine 5 · Limites, électricité et redox', target_hours:22, objective:'Approcher les chapitres de 4ème année sans brûler les étapes.', days:[] },
  { week_number:6, title:'Semaine 6 · Suites, ondes, cinétique et immunité', target_hours:22, objective:'Augmenter l’endurance et la méthode.', days:[] },
  { week_number:7, title:'Semaine 7 · Exercices longs et correction active', target_hours:24, objective:'Apprendre à tenir un exercice complet.', days:[] },
  { week_number:8, title:'Semaine 8 · Consolidation et préparation septembre', target_hours:20, objective:'Réparer les derniers trous et préparer la rentrée.', days:[] }
];

for (const week of SEED_PROGRAM) {
  if (!week.days.length) {
    week.days = [1,2,3,4,5].map((n)=>({
      day_number:n,
      title:`Jour ${n} · Programme personnalisé`,
      target_hours: Math.round(week.target_hours/5),
      objective:'Travail structuré par matière avec preuve à soumettre.',
      lessons:[
        {subject:'maths', title:'Maths · exercices progressifs', target_minutes:100, objective:'Cours + exercices + correction active.', exercises:[], tasks:['Lire le cours.', 'Faire 20 exercices.', 'Noter les erreurs.', 'Soumettre une photo du cahier.']},
        {subject:n%2?'physique':'chimie', title:'Sciences physiques · pratique', target_minutes:80, objective:'Formules, unités et problèmes guidés.', exercises:[], tasks:['Revoir les formules.', 'Faire 15 exercices.', 'Soumettre une preuve.']},
        {subject:n%2?'svt':'informatique', title:'SVT/Informatique · méthode', target_minutes:60, objective:'Méthode documentaire ou algorithmique.', exercises:[], tasks:['Faire le travail demandé.', 'Noter blocages.', 'Préparer questions pour Wejden.']}
      ]
    }));
  }
}
