/**
 * Données détaillées des projets du portfolio
 * Chaque projet contient :
 * - id : Identifiant unique (utilisé pour le lien URL hash ex: #darkchild-story)
 * - title : Nom du projet
 * - tagline : Phrase d'accroche courte
 * - dimension : "2D" ou "3D"
 * - teamSize : Nombre de personnes dans l'équipe
 * - duration : Durée du projet
 * - year : Année de réalisation
 * - tech : Tableau des technologies utilisées
 * - roles : Rôles occupés par Alexandre Babé
 * - links : Objets de liens (github, demo, itch, etc.)
 * - story : Tableau de paragraphes expliquant la genèse, l'histoire et le travail effectué
 * - mechanics : Tableau d'objets { title, desc, icon } décrivant les mécaniques clés
 * - gallery : Tableau d'objets médias { type: 'image'|'video', src, poster, caption }
 */

const PROJECTS_DATA = [
    {
        id: "darkchild-story",
        title: "DarkChild Story",
        tagline: "Un rogue-lite où un dessin d'enfant combat les cauchemars pour protéger son créateur.",
        dimension: "3D",
        teamSize: "9 personnes",
        duration: "1 mois / 2 semaines",
        year: "2026",
        tech: ["Unity", "C#", "Blender", "Photoshop", "IA"],
        roles: ["Lead Developer", "Lead Artist", "Sound Designer", "Game Designer"],
        links: {
            github: "https://github.com/zBrozen",
            demo: "#",
            itch: "#"
        },
        story: [
            "DarkChild Story est mon tout premier grand projet de jeu vidéo. L'idée est nées de la volonté de raconter une histoire touchante à travers une direction artistique et une boucle de gameplay singulières : le joueur y incarne l'incarnation vivante d'un dessin fait par un enfant, qui doit s'enfoncer dans son imaginaire et affronter des créatures cauchemardesques menaçant sa quiétude.",
            "En tant que Lead Developer et Lead Artist, j'ai supervisé et conçu la structure technique du jeu sous Unity C#, ainsi que la cohérence visuelle 3D et sonore. J'ai notamment mis en place l'architecture complète du joueur, la gestion des états de jeu, la caméra dynamique, ainsi que l'intégration des effets sonores et de la musique pour accentuer l'atmosphère onirique et sombre.",
            "Ce projet a été une formidable opportunité d'apprendre à coordonner une équipe de 9 personnes tout en garantissant un pipeline de production fluide entre la modélisation 3D (Blender), les shaders Unity et la programmation des mécaniques de combat."
        ],
        mechanics: [
            {
                title: "Boucle Rogue-Lite & Progression",
                desc: "Chaque run génère des vagues d'ennemis cauchemardesques. La défaite permet de débloquer des améliorations permanentes pour le dessin.",
                icon: "shield"
            },
            {
                title: "Pouvoirs de Dessin",
                desc: "Attaques uniques et compétences spéciales basées sur des coup de crayons, feutres et gommes magiques altérant la réalité.",
                icon: "brush"
            },
            {
                title: "Système de Vagues & Boss",
                desc: "Gestion d'un spawner d'ennemis intelligent réagissant aux actions du joueur, suivi d'un affrontement contre un cauchemar géant.",
                icon: "zap"
            }
        ],
        gallery: [
            {
                type: "video",
                src: "data/img/DarkChild_Demo-ezgif.com-gif-to-webm-converter.webm",
                poster: "data/img/DarkChild_Demo_poster.jpg",
                caption: "Gameplay vidéo : Aperçu des combats et des mouvements du personnage principal."
            },
            {
                type: "image",
                src: "data/img/DarkChild_Demo.webp",
                caption: "Illustration et scène 3D de DarkChild Story."
            }
        ]
    },
    {
        id: "classlab",
        title: "ClassLab",
        tagline: "Serious game de simulation pédagogique pour futurs enseignants à UNIMINUTO.",
        dimension: "3D",
        teamSize: "5 personnes",
        duration: "2 mois (en cours)",
        year: "2025-2026",
        tech: ["Unity", "C#", "Photoshop", "IA"],
        roles: ["Developer", "Animator", "UI Designer"],
        links: {
            github: "https://github.com/zBrozen",
            demo: "#"
        },
        story: [
            "ClassLab est un jeu sérieux développé sur mesure pour l'université UNIMINUTO. L'objectif est d'offrir aux étudiants en formation d'enseignants un outil immersif de simulation de classe en 3D.",
            "Le joueur incarne un élève-professeur confronté à divers scénarios pédagogiques réalistes (gestion de conflits, élèves perturbateurs, questions imprévues). Les choix de dialogue faits par le joueur influencent directement l'attention des élèves, le climat de la classe et le score final d'évaluation.",
            "Sur ce projet, je me suis concentré sur la programmation des arbres de dialogues à choix multiples, la conception et l'animation de l'interface utilisateur (UI responsive), ainsi que l'intégration des animations de personnages 3D pour donner vie à la salle de classe."
        ],
        mechanics: [
            {
                title: "Arbres de Dialogues et Choix Dynamiques",
                desc: "Système de choix ramifiés impactant la jauge de satisfaction et d'attention des élèves en temps réel.",
                icon: "message-square"
            },
            {
                title: "Simulation d'Environnement 3D",
                desc: "Interactions avec les éléments de la classe (tableau, pupitres, fiches de révision) et animations des étudiants.",
                icon: "monitor"
            },
            {
                title: "Bilan & Débriefing Pédagogique",
                desc: "Système de calcul de note et feedbacks détaillés en fin de scénario pour faire progresser l'étudiant.",
                icon: "award"
            }
        ],
        gallery: [
            {
                type: "video",
                src: "data/img/ClassLab_Demo-ezgif.com-gif-to-webm-converter.webm",
                poster: "data/img/ClassLab_Demo_poster.jpg",
                caption: "Démonstration vidéo : Interaction en salle de classe et choix de dialogues."
            },
            {
                type: "image",
                src: "data/img/ClassLab_Demo.webp",
                caption: "Aperçu visuel du projet ClassLab."
            }
        ]
    },
    {
        id: "thermoclash",
        title: "ThermoClash",
        tagline: "Serious game éducatif et déjanté sur les changements d'état de l'eau avec une esthétique Jojo's Bizarre Adventure.",
        dimension: "2D",
        teamSize: "4 personnes",
        duration: "4 jours",
        year: "2026",
        tech: ["Unity", "C#", "IA"],
        roles: ["Developer", "Game Designer"],
        links: {
            github: "https://github.com/zBrozen",
            demo: "#"
        },
        story: [
            "Créé en seulement 4 jours lors d'une Game Jam, ThermoClash est un jeu sérieux conçu pour enseigner la physique-chimie (les états de la matière : solide, liquide, gazeux) à des élèves de collège et début lycée.",
            "Pour rendre l'apprentissage captivant et décalé, nous avons choisi une direction artistique inspirée des animés d'action comme Jojo's Bizarre Adventure. Les molécules et températures s'affrontent dans des duels épiques où chaque changement de phase devient une compétence dévastatrice.",
            "J'ai pris en charge la programmation de la physique 2D, de la logique des transformations d'état (fusion, vaporisation, condensation) et la création des mécanismes de combat éducatifs."
        ],
        mechanics: [
            {
                title: "Transformations d'État en Combat",
                desc: "Passez de l'état Glace (bouclier solide) à l'état Vapeur (esquive & mobilité) selon la température ambiante.",
                icon: "flame"
            },
            {
                title: "Gamification Pédagogique",
                desc: "Intégration d'explications scientifiques réelles au cœur des mécanismes de duel pour valider les notions scolaires.",
                icon: "book-open"
            },
            {
                title: "Défis Chronométrés & Combos",
                desc: "Système de combo rapide récompensant les réactions théoriques correctes face aux éléments perturbateurs.",
                icon: "activity"
            }
        ],
        gallery: [
            {
                type: "video",
                src: "data/img/ThermoClash_Demo-ezgif.com-gif-to-webm-converter.webm",
                poster: "data/img/ThermoClash_Demo_poster.png",
                caption: "Vidéo démo : Combats d'états de l'eau et effets visuels."
            },
            {
                type: "image",
                src: "data/img/ThermoClash_Demo.webp",
                caption: "Illustration du jeu ThermoClash."
            }
        ]
    }
];
