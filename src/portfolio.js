/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fallet Kamagaté",
  title: "Salut tout le monde, Je m'appelle Fallet",
  subTitle: emoji(
    "Développeur Full Stack passionné 🚀, avec une expérience dans la création d'applications web et mobiles dynamiques et réactives en utilisant JavaScript, React.js, Node.js, React Native, ainsi que d'autres bibliothèques et frameworks modernes."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Ramses-F",
  //linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "falletkamagate3@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "Développeur Full Stack audacieux qui souhaite explorer toutes les technologies possibles.",
  skills: [
    emoji(
      "⚡ Développez des interfaces utilisateur hautement interactives pour vos applications web et mobiles."
    ),
    emoji("⚡ Applications Web Progressives (PWA) dans des stacks classiques et SPA."),
    emoji(
      "⚡ Intégration de services tiers tels que Firebase, AWS."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "tailwind css",
      fontAwesomeClassname: "fab fa-css3-alt" // Tailwind n'a pas d'icône FontAwesome officielle, on utilise CSS3
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fab fa-js" // Utilise l'icône JS pour TypeScript
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "next js",
      fontAwesomeClassname: "fab fa-react" // Utilise l'icône React pour Next.js
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code" // Utilise une icône générique
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code" // Utilise une icône générique
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-google" // Utilise l'icône Google pour Flutter
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal" // Utilise une icône terminal pour Bash
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UNIVERSITE DE PERPIGNAN VIA DOMITIA",
      logo: require("./assets/images/UPVD.png"),
      subHeader: "LICENCE INFORMATIQUE",
      duration: "September 2025 - Present",
      desc: "Actuellement, je prépare une licence en informatique, axé sur le développement de logiciels et l'analyse de données. Je participe activement à des projets de recherche collaborative.",
      descBullets: [
         "Développement d'algorithmes pour optimiser les tâches de traitement de données ",
       "Participation à des projets de développement de logiciels utilisant Java et React",
        "Contribution à la publication de trois articles de recherche sur la science des données",
      ]
    },
    
    {
      schoolName: "ECOLE SUPERIEUR D'AFRIQUE DES TECHNOLOGIES DE L'INFORMATION ET DE LA COMMUNICATION",
      logo: require("./assets/images/esatic.png"),
      subHeader: "LICENCE RÉSEAUX SÉCURITÉ INFORMATIQUE",
      duration: "September 2020 - April 2023",
      desc: "Graduated in the top 10% of the program. Focused on Software Engineering, Web Security, Operating Systems, and Network Administration.",
      descBullets: [
        "Développement de compétences en configuration réseau et protocoles de sécurité",
       "Mise en place de canaux de communication sécurisés pour les applications Web",
       " Réalisation d'un projet de fin d'études sur l'amélioration des mesures de cybersécurité dans les réseaux locaux"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programmation",
      progressPercentage: "60%"
    },
    {
      Stack: "Réseaux",
      progressPercentage: "50%"
    },
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Developpeur fullstack",
      company: "Xnova",
      companylogo: require("./assets/images/logo-dark.png"),
      date: "Juillet 2023 – 2024",
      desc: "Développement d'applications web à grande échelle et gestion de projets innovants au sein de Xnova.",
      descBullets: [
        "Optimisation des performances des interfaces utilisateur",
        "Collaboration avec des équipes sur des projets open source",
        "Création de solution digitale pour palier à des problèmes"
      ]
    }
  ]
};

// Your Open Source Section to View Your Github Pinned Projects
// Pour savoir comment obtenir la clé Github, consultez le fichier readme.md

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grands Projets",
  subtitle: "Quelques réalisations concrètes dans le développement web et mobile",
  projects: [
    {
      image: require("./assets/images/safebox.png"), // Remplacer par le logo SafeBox si disponible
      projectName: "SafeBox",
      projectDesc: "Gestionnaire de mots de passe sécurisé pour protéger et organiser vos identifiants en toute simplicité.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "https://safe-box-seven.vercel.app/" // Ajouter le lien si disponible
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Remplacer par le logo liahome si disponible
      projectName: "liahome",
      projectDesc: "Site web moderne pour une agence immobilière, avec gestion des annonces et prise de contact en ligne.",
      footerLink: [
        {
          name: "Voir le site",
          url: "https://liahomeci.com/" // Ajouter le lien si disponible
        }
      ]
    },
    {
      image: require("./assets/images/logo-giga.jpg"), // Remplacer par le logo GigaPlus si disponible
      projectName: "GigaPlus",
      projectDesc: "Application mobile permettant aux utilisateurs d'obtenir des pass internet en regardant des vidéos publicitaires.",
      footerLink: [
        {
          name: "Voir l'application",
          url: "https://www.gigaplus.fr/" // Ajouter le lien si disponible
        }
      ]
    },
    {
      image: require("./assets/images/logor.png"), // Remplacer par le logo payemacaution si disponible
      projectName: "payemacaution",
      projectDesc: "Site web pour la startup xnova, permettant aux usagers de payer leur caution locative en ligne.",
      footerLink: [
        {
          name: "Voir le site",
          url: "https://xnova-ci.com/paye_ma_caution" // Ajouter le lien si disponible
        }
      ]
    },
    {
      image: require("./assets/images/logo-1.png"), // Remplacer par le logo b-homesarl si disponible
      projectName: "b-homesarl",
      projectDesc: "Site web professionnel pour une agence immobilière, gestion des biens et interface utilisateur intuitive.",
      footerLink: [
        {
          name: "Voir le site",
          url: "https://b-homesarl.com/" // Ajouter le lien si disponible
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications et Réalisations 🏆 "),
  subtitle:
    "Certifications, lettres de recommandation et distinctions obtenues !",

  achievementsCards: [
    {
      title: "Finaliste Google Code-In",
      subtitle:
        "Premier ivoirien sélectionné comme finaliste Google Code-in parmi 4000 étudiants de 77 pays.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Logo Google Code-In",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Lettre de distinction",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Blog Google Code-in",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Action Google Assistant",
      subtitle:
        "Développement d'une action Google Assistant JavaScript Guru disponible sur 2 milliards d'appareils.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Logo Google Assistant Action",
      footerLink: [
        {
          name: "Voir l'action Google Assistant",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=fr"
        }
      ]
    },

    {
      title: "Développeur PWA Web App",
      subtitle: "Certification obtenue pour le développement d'applications PWA",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Logo PWA",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Projet final",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec l'amour du développement de trucs sympas, j'aime écrire et enseigner aux autres ce que j'ai appris.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Gagnez un T-shirt Google Assistant et 200$ de crédits Google Cloud",
      description:
        "Découvrez comment gagner 200$ et un T-shirt Google Assistant en créant une action en moins de 30 minutes !"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Pourquoi REACT est le meilleur?",
      description:
        "React est une bibliothèque JavaScript permettant de créer des interfaces utilisateur. Elle est gérée par Facebook et une communauté de développeurs individuels et d'entreprises."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "Conférences",
  subtitle: emoji(
    "J'adore partager mes connaissances et intervenir lors d'événements tech 😅"
  ),

  talks: [
    {
      title: "Créer des actions pour Google Assistant",
      subtitle: "Atelier au GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Chaîne YouTube 🎥"),
  subtitle: "Je parle de cybersécurité et partage des conseils sur ma chaîne YouTube.",
  podcast: [
    "https://www.youtube.com/@UnJourUneFaille"
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Téléchargez mon CV en PDF",
  display: true
};

const contactInfo = {
  title: emoji("Contactez Moi ☎️"),
  subtitle:
    "Discutez d'un projet.",
  number: "+33-0758181149",
  email_address: "falletkamagate3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
