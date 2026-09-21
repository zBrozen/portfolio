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
            itch: "https://dayroxoff.itch.io/dark-child-story"
        },
        story: [
            "DarkChild Story est mon tout premier grand projet de jeu vidéo. L'idée est nées de la volonté de raconter une histoire touchante à travers une direction artistique et une boucle de gameplay singulières : le joueur y incarne l'incarnation vivante d'un dessin fait par un enfant, qui doit s'enfoncer dans son imaginaire et affronter des créatures cauchemardesques menaçant sa quiétude.",
            "En tant que Lead Developer et Lead Artist, j'ai supervisé et conçu la structure technique du jeu sous Unity C#, ainsi que la cohérence visuelle 3D et sonore. J'ai notamment mis en place l'architecture complète du joueur, la gestion des états de jeu, la caméra dynamique, ainsi que l'intégration des effets sonores et de la musique pour accentuer l'atmosphère onirique et sombre.",
            "Ce projet a été une formidable opportunité d'apprendre à coordonner une équipe de 9 personnes tout en garantissant un pipeline de production fluide entre la modélisation 3D (Blender), les shaders Unity et la programmation des mécaniques de combat."
        ],
        mechanics: [
            {
                title: "Boucle Rogue-Lite & Progression",
                desc: "Chaque run génère des vagues d'ennemis cauchemardesques (puisqu'ils s'éveillent uniquement à la nuit tombée). La défaite permet de débloquer des améliorations permanentes pour le dessin, ce qui aggrandi le bestiaire ce qui vous maintiendra plus longtemps en vie durant la nuit.",
                icon: "shield"
            },
            {
                title: "Pouvoirs de Dessin",
                desc: "Attaques uniques et compétences spéciales basées sur l'évolution du personnage au cours de la partie.",
                icon: "brush"
            },
            {
                title: "Système de Vagues & Boss",
                desc: "Gestion d'un spawner d'ennemis intelligent réagissant aux actions du joueur, suivi d'un affrontement contre un cauchemar géant si vous parvenez à vaincre le premier boss !",
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
                src: "data/img/Gallery/DarkChild1.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild2.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild3.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild4.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild5.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild6.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild7.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild8.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild9.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            },
            {
                type: "image",
                src: "data/img/Gallery/DarkChild10.png",
                caption: "Illustration et scène 3D de DarkChild Story."
            }
        ]
    },
    {
        id: "vestige",
        title: "Vestige",
        tagline: "Un jeu d'exploration et de puzzle solver très inspiré par les donjons Zelda 3D.",
        dimension: "3D",
        teamSize: "1 personne",
        duration: "1 mois",
        year: "2026",
        tech: ["Unity", "C#", "IA", "Blender", "Photoshop"],
        roles: ["Developer", "Level Builder", "Animator", "Game Designer", "Level Designer"],
        links: {
            github: "https://github.com/zBrozen/Puzzle-Dungeon",
            itch: "https://xbrozen.itch.io/vestige"
        },
        story: [
            "Vestige est un jeu d'exploration et de résolution d'énigmes (puzzle solver), fortement inspiré par la structure et la philosophie des donjons des jeux Zelda en 3D (notamment Ocarina of Time ou même Skyward Sword).",
            "Cette démonstration vous propose de parcourir un grand niveau où vous évoluez à travers différents types d'énigmes afin d'avancer et de découvrir différents artéfacts qui vous seront utiles en tant qu'objets de donjon.",
            "Sur ce projet polyvalent, j'ai réalisé l'ensemble du pipeline de création : du Game Design à la modélisation et l'intégration décors (Level Building), jusqu'à l'animation et la programmation C# des systèmes d'interaction sous Unity."
        ],
        mechanics: [
            {
                title: "Exploration & Progression Donjon",
                desc: "Parcours d'un grand niveau interconnecté où la découverte d'artéfacts débloque de nouvelles zones et mécaniques de jeu.",
                icon: "compass"
            },
            {
                title: "Résolution d'Énigmes & Artéfacts",
                desc: "Résolution de puzzles environnementaux variés tirant parti des compétences et objets uniques découverts dans le niveau.",
                icon: "box"
            },
            {
                title: "Mouvements et combats",
                desc: "Les mouvements de personnages très familiers aux anciens Zelda ou jeux d'explorations (avec un saut automatique), et du combat à base d'esquives et de timings.",
                icon: "sword"
            }
        ],
        gallery: [
            {
                type: "video",
                src: "data/img/Vestige_Demo-ezgif.com-gif-to-webm-converter.webm",
                poster: "data/img/Vestige_Demo_poster.jpg",
                caption: "Démonstration vidéo : Aperçu du gameplay, des énigmes et de l'exploration."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige1.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige2.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige3.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige4.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige5.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige6.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige7.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige8.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige9.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige10.png",
                caption: "Aperçu visuel du projet Vestige."
            },
            {
                type: "image",
                src: "data/img/Gallery/Vestige11.png",
                caption: "Aperçu visuel du projet Vestige."
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
            "Sur ce projet, je me suis principalement mis sur l'interface utilisateur (que ce soit le main menu, le menu en jeu ou bien même la gestion des fonctions d'embranchements), j'ai effectué aussi la traduction complète vers d'autres langues, ainsi que de l'animation sur la gestion de plans de caméras."
        ],
        mechanics: [
            {
                title: "Arbres de Dialogues et Choix Dynamiques",
                desc: "Système de choix impactant la jauge de satisfaction et d'attention des élèves en temps réel.",
                icon: "message-square"
            },
            {
                title: "Simulation d'Environnement 3D",
                desc: "Modélisation de différentes zones visibles à travers les cinématiques, ainsi que une seule jouable avec les mouvements classiques de jeux vidéos.",
                icon: "monitor"
            },
            {
                title: "Bilan & Débriefing Pédagogique",
                desc: "Système de calcul de note et feedbacks détaillés en fin de scénario pour faire progresser l'étudiant. Le tour exporté dans une base de données externe.",
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
                src: "data/img/Gallery/ClassLab0.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab1.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab3.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab4.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab5.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab6.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
            {
                type: "image",
                src: "data/img/Gallery/ClassLab7.png",
                caption: "Aperçu visuel du projet ClassLab."
            },
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
        tech: ["Unity", "C#", "IA", "Photoshop", "Audacity"],
        roles: ["Developer", "Game Designer", "Voice Actor"],
        links: {
            github: "https://github.com/zBrozen",
            demo: "#"
        },
        story: [
            "Créé en seulement 4 jours et demandé pour l'un de mes cours en serious game, ThermoClash est un jeu sérieux conçu pour enseigner la physique-chimie (les états de la matière : solide, liquide, gazeux) à des élèves de collège et début lycée.",
            "Pour rendre l'apprentissage plus captivante et décalé, nous avons choisi une direction artistique inspirée des animés d'action comme Jojo's Bizarre Adventure. Des Thermo-magiciens (les Tempéramenciens) s'affrontent dans des duels épiques où chaque changement de phase permet d'attaquer et de parer les coups de son adversaire.",
            "J'ai pris en charge la programmation de l'UI, de la logique des transformations d'état (fusion, vaporisation, condensation) et aussi à la création de l'histoire et à l'enregistrement de voices lines."
        ],
        mechanics: [
            {
                title: "Transformations d'État en Combat",
                desc: "Votre adversaire vous attaques à un état de l'eau, vous devez donc réussir à parer en effectuant une transformation de son attaque.",
                icon: "flame"
            },
            {
                title: "Gamification Pédagogique",
                desc: "Intégration d'explications scientifiques réelles au cœur des mécanismes de duel pour valider les notions scolaires. Le joueur peut donc effectuer une pause sur les messages éducatifs pour assimiler les informations éducatives du jeu.",
                icon: "book-open"
            },
            {
                title: "Défis Chronométrés & Combos",
                desc: "Le combat s'effectue par echainements d'attaques de l'adversaire, ce qui implique de réflechir assez vite et d'avoir le réflexe d'effectuer le bon choix. ",
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
                src: "data/img/Gallery/ThermoClash1.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash2.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash3.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash4.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash5.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash6.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash7.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash8.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash9.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash10.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash11.png",
                caption: "Illustration du jeu ThermoClash."
            },
            {
                type: "image",
                src: "data/img/Gallery/ThermoClash12.png",
                caption: "Illustration du jeu ThermoClash."
            }
        ]
    },
    {
        id: "daylia",
        title: "Daylia",
        tagline: "Un jeu sérieux dans le cadre d'un exercice de mon Master consistant à résoudre le problème de l'approche de l'IA dans l'entreprise d'Orange. Il est possible d'y faire différents exercice pour apprendre à utiliser l'IA tout en étant accompagné par un agent IA pour poser des questions et obtenir de l'aide.",
        dimension: "2D",
        teamSize: "5 personnes",
        duration: "1 mois",
        year: "2025",
        tech: ["Unity", "C#", "IA", "Blender", "Photoshop"],
        roles: ["Developer", "Game Designer", "Voice Actor"],
        links: {
            WebGL: "https://play.unity.com/en/games/72e69d93-f722-4e43-8971-2d1efe9c1ba4/daylia-v1"
        },
        story: [
            "Daylia est un jeu sérieux en E-Learning dans le cadre d'un exercice de mon Master consistant à résoudre le problème de l'approche de l'IA dans l'entreprise d'Orange. Il est possible d'y faire différents exercice pour apprendre à utiliser l'IA tout en étant accompagné par un agent IA pour poser des questions et obtenir de l'aide."
        ],
        mechanics: [
            {
                title: "Apprentissage de l'IA",
                desc: "Apprenez à utiliser l'IA tout en étant accompagné par un agent IA pour poser des questions et obtenir de l'aide.",
                icon: "brush"
            },
            {
                title: "IA",
                desc: "L'agent IA est là pour vous aider tout au long du jeu en tant que mascotte (MALON).",
                icon: "bot"
            },
            {
                title: "Différents mini-jeux",
                desc: "On y retrouve différents mini-jeux dans le but d'apprendre à utiliser l'IA.",
                icon: "book-open"
            }
        ],
        gallery: [
            {
                type: "image",
                src: "data/img/Gallery/DayLia1.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia2.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia3.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia4.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia5.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia6.png",
                caption: "Illustration du jeu Daylia."
            },
            {
                type: "image",
                src: "data/img/Gallery/DayLia7.png",
                caption: "Illustration du jeu Daylia."
            }
        ]
    }
];
