export type Language = "es" | "en";

export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  results: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
}

export interface TranslationData {
  // Header
  portfolio: string;
  home: string;
  about: string;
  projects: string;
  contact: string;
  toggleTheme: string;
  toggleMenu: string;
  
  // Hero Section
  heroGreeting: string;
  heroName: string;
  heroRole: string;
  heroDescription: string;
  contactMe: string;
  downloadCV: string;
  
  // About Section
  aboutTitle: string;
  aboutDescription: string;
  skills: string;
  experience: string;
  
  // Projects Section
  projectsTitle: string;
  projectsDescription: string;
  seeProject: string;
  technologies: string;
  
  // Project Data
  projectsData: ProjectData[];
  
  // Footer
  madeWith: string;
  by: string;
  allRightsReserved: string;
  readyToCollaborate: string;
  collaborate: string;
  collaborateDesc: string;
  navigation:string;
  followMe: string;
  
  
  // Contact Form
  contactFormTitle: string;
  contactFormSubtitle: string;
  nameLabel: string;
  emailLabel: string;
  subjectLabel: string;
  messageLabel: string;
  yourName: string;
  yourEmail: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendMessage: string;
  sending: string;
  cancel: string;
  
  // Contact Form Validation
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  subjectRequired: string;
  messageRequired: string;
  messageSuccess: string;
  messageError: string;
  
  // CV Download
  downloadingCV: string;
  cvDownloadSuccess: string;
  cvDownloadError: string;
  
  // Project Detail View
  backToProjects: string;
  projectOverview: string;
  keyFeatures: string;
  challengesAndSolutions: string;
  resultsAndImpact: string;
  viewDemo: string;
  viewCode: string;
  technologiesUsed: string;
}

export type TranslationKey = keyof TranslationData;

export const translations: Record<Language, TranslationData> = {
  en: {
    // Header
    portfolio: "Portfolio",
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    toggleTheme: "Toggle theme",
    toggleMenu: "Toggle menu",
    
    // Hero Section
    heroGreeting: "Hi, I'm",
    heroName: "América Alemán",
    heroRole: "UX/UI Designer",
    heroDescription: "I strongly believe that well-designed technology can improve people’s lives.",
    contactMe: "Contact Me",
    downloadCV: "Download CV",
    
    // About Section
    aboutTitle: "About Me",
    aboutDescription: "I'm a UX/UI Designer with a strong background in front-end development and digital product strategy. I've contributed to projects in digital banking, education, and enterprise software, applying user-centered methodologies, research, and design thinking.",
    skills: "Skills",
    experience: "Experience",
    
    // Projects Section
    projectsTitle: "My Projects",
    projectsDescription:"Learn about some of my projects that have had the greatest impact on my career.",
    seeProject: "See Project",
    technologies: "Technologies",
    
    // Project Data
    projectsData: [
      {
        id: "ecommerce-platform",
        title: "IA Chat Bot",
        shortDescription: "An AI-powered chatbot was developed, specialized in various subjects to support univesity students.",
        fullDescription: "Design of an AI-powered interactive chat for university students, focused on delivering personalized conversations by subject. The goal was to enhance the learning experience through a virtual assistant tailored to each student’s academic context.",
        technologies: ["Figma", "Bamboo Design System", "Jira"],
        features: [
          "Clear communication with technical and non-technical teams",
          "Cross-functional collaboration with stakeholders and developers",
          "Facilitation of design workshops and co-creation sessions",
          "Strategic and user-centered thinking",
          "Data-driven and empathy-based decision-making",
          "Organization of research, design, and validation phases",
          "Leadership in efficient design process creation",
          "Autonomy in solving complex problems creatively",
          "Adaptability to changes and user feedback",
          "Continuous learning of new tools and methodologies"
        ],
        challenges: "",
        results: "",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "task-management",
        title: "IA Management ChatBot",
        shortDescription: "Created a system that will be used to manage the ChatBot's AI.",
        fullDescription: "A CRUD system was designed and developed to manage the responses and documents uploaded to TecBot, an AI-powered chatbot tailored to provide subject-specific support for professors. This platform enables educators to curate and update the information consumed by the AI, ensuring that the chatbot delivers accurate, relevant, and up-to-date content aligned with each course's academic goals.",
        technologies: ["Figma", "Bamboo Design System", "Jira"],
        features: [
          "Teamwork",
          "Assertive Communication",
          "Creativity",
          "Attention to Detail",
          "Analysis",
          "Agile Methodologies",
        ],
        challenges: ".",
        results: "",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "weather-dashboard",
        title: "Core Business",
        shortDescription: "Creation of a new system that will host existing functionalities using the DS created.",
        fullDescription: "Design and build a scalable SaaS platform that streamlines finance, administrative, and HR operations for businesses. As a UX/UI designer, I led the user-centered design process   from research to delivery—conducting UX research to identify user needs, mapping customer journeys, and translating insights into intuitive user flows and high-fidelity interfaces. I also created a design system to ensure consistency across modules and collaborated closely with developers to support front-end implementation.",
        technologies: ["Figma","UX research", "Journey maps", "HTML", "CSS"],
        features: [
          "UX research: interviews, surveys, and usability testing",
          "Analysis of qualitative and quantitative data",
          "Creation of personas, empathy maps, and customer journeys",
          "Mapping complex multi-channel experiences",
          "Design of accessible and user-friendly interfaces",
          "Documentation and maintenance of scalable design systems",
          "Prototyping in Figma",
          "Delivery of high-fidelity mockups",
          "Translation of design into clear technical specs",
          "Collaboration with development using HTML, CSS, and JavaScript"
        ],
        challenges: "It required a deep understanding of diverse business workflows and translating them into clear and efficient digital experiences for various user roles. This involved conducting user research, mapping journeys, defining intuitive flows, and building a design system to ensure visual and functional consistency across modules. Additionally, close collaboration with technical teams and stakeholders was essential to ensure that the solutions were both feasible and aligned with business goals.",
        results: "By applying a user-centered approach, the platform streamlined internal processes, reduced operational errors, and significantly improved overall efficiency. The intuitive interface enabled users to make faster, more informed decisions, leading to increased product adoption and higher satisfaction among enterprise clients. As a result, the company enhanced customer retention and strengthened its competitive positioning in the market.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    
    // Footer
    madeWith: "Made with Love",
    by: "by América Alemán & Figma",
    allRightsReserved: "All rights reserved",
    readyToCollaborate:"Want to",
    collaborate:"collaborate",
    collaborateDesc:"Write me if you want to create something together.",
    navigation:"Navigation",
    followMe: "Follow me",
  
    
    // Contact Form
    contactFormTitle: "Get in Touch",
    contactFormSubtitle: "Let's discuss your next project",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    yourName: "Your name",
    yourEmail: "your@email.com",
    subjectPlaceholder: "Project subject",
    messagePlaceholder: "Tell me about your project...",
    sendMessage: "Send Message",
    sending: "Sending...",
    cancel: "Cancel",
    
    // Contact Form Validation
    nameRequired: "Name is required",
    emailRequired: "Email is required",
    emailInvalid: "Please enter a valid email",
    subjectRequired: "Subject is required",
    messageRequired: "Message is required",
    messageSuccess: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    
    // CV Download
    downloadingCV: "Downloading CV...",
    cvDownloadSuccess: "CV downloaded successfully!",
    cvDownloadError: "Error downloading CV. Please try again.",
    
    // Project Detail View
    backToProjects: "← Back to Projects",
    projectOverview: "Project Overview",
    keyFeatures: "Key Features",
    challengesAndSolutions: "Challenges & Solutions",
    resultsAndImpact: "Results & Impact",
    viewDemo: "View Demo",
    viewCode: "View Code",
    technologiesUsed: "Technologies Used"
  },
  es: {
    // Header
    portfolio: "Portafolio",
    home: "Inicio",
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    toggleTheme: "Cambiar tema",
    toggleMenu: "Abrir menú",
    
    // Hero Section
    heroGreeting: "Hola, soy",
    heroName: "América Alemán",
    heroRole: "Diseñadora UX/UI",
    heroDescription: "Creo firmemente que la tecnología bien diseñada puede mejorar la vida de las personas.",
    contactMe: "Contáctame",
    downloadCV: "Descargar CV",
    
    // About Section
    aboutTitle: "Acerca de Mí",
    aboutDescription: "Soy una diseñadora UX/UI con una sólida formación en desarrollo front-end y estrategia de productos digitales. He contribuido a proyectos de banca digital, educación y software empresarial, aplicando metodologías centradas en el usuario, investigación y pensamiento de diseño.",
    skills: "Habilidades",
    experience: "Experiencia",
    
    // Projects Section
    projectsTitle: "Mis Proyectos",
    projectsDescription:"Conoce algunos de mis proyectos que mayor impacto han tenido en mi carrera.",
    seeProject: "Ver Proyecto",
    technologies: "Tecnologías",
    
    // Project Data
    projectsData: [
      {
        id: "ecommerce-platform",
        title: "IA Chat Bot",
        shortDescription: "Se diseñó un chatbot que usa IA, especializado en diversas materias para apoyar a estudiantes universitarios.",
        fullDescription: "Diseño de un chat interactivo basado en inteligencia artificial para estudiantes universitarios, enfocado en ofrecer conversaciones personalizadas por materia. El objetivo fue mejorar la experiencia de estudio mediante un asistente virtual que se adapta al contexto académico de cada estudiante.",
        technologies: ["Figma", "Bamboo Design System", "Jira"],
        features: [
          "Comunicación clara con equipos técnicos y no técnicos",
          "Colaboración interdisciplinaria con stakeholders y developers",
          "Facilitación de workshops y sesiones de co-creación",
          "Pensamiento estratégico y centrado en el usuario",
          "Toma de decisiones basada en datos y empatía",
          "Organización de fases de investigación, diseño y validación",
          "Liderazgo en procesos de diseño eficientes",
          "Autonomía en la resolución de problemas complejos",
          "Adaptabilidad a cambios y retroalimentación",
          "Aprendizaje continuo de herramientas y metodologías nuevas"
        ],
        challenges: "",
        results: "",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "task-management",
        title: "Gestión IA ChatBot",
        shortDescription: "Se creó un sistema que administrará la información consumida por el ChatBot IA.",
        fullDescription: "Se diseñó y desarrolló un sistema CRUD para la administración de respuestas y documentos cargados al TecBot, un chatbot potenciado con inteligencia artificial y enfocado en brindar apoyo personalizado a profesores según su materia. Este sistema permite a los docentes gestionar la información que la IA consume, garantizando que el contenido entregado por el bot sea pertinente, actualizado y alineado con los objetivos académicos de cada asignatura.",
        technologies: ["Figma", "Bamboo Design System", "Jira"],
        features: [
          "Trabajo en equipo",
          "Comunicación asertiva",
          "Creatividad",
          "Atención al detalle",
          "Análisis",
          "Metodologías Agile",
        ],
        challenges: "",
        results: "",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      },
      {
        id: "weather-dashboard",
        title: "Core Business",
        shortDescription: "Creación de un nuevo sistema que albergará las funcionalidades existentes con el uso del DS creado.",
        fullDescription: "Diseñé y construí una plataforma SaaS escalable que optimiza las operaciones financieras, administrativas y de RR. HH. de las empresas. Como diseñador de UX/UI, lideré el proceso de diseño centrado en el usuario desde la investigación hasta la entrega: realicé investigación de UX para identificar las necesidades del usuario, mapeé las experiencias del cliente y traduje la información en flujos de usuario intuitivos e interfaces de alta fidelidad. También creé un sistema de diseño para garantizar la coherencia entre los módulos y colaboré estrechamente con los desarrolladores para apoyar la implementación del frontend.",
        technologies: ["Figma","UX research", "Journey maps", "HTML", "CSS"],
        features: [
           "Investigación UX: entrevistas, encuestas y pruebas de usabilidad",
            "Análisis de datos cualitativos y cuantitativos",
            "Creación de personas, mapas de empatía y customer journeys",
            "Mapeo de experiencias complejas multicanal",
            "Diseño de interfaces accesibles y usables",
            "Documentación y mantenimiento de design systems escalables",
            "Prototipado en Figma",
            "Entrega de mockups de alta fidelidad",
            "Traducción de diseño a especificaciones técnicas claras",
            "Colaboración con desarrollo usando HTML, CSS y JavaScript"
        ],
        challenges: "Fue necesario comprender procesos empresariales diversos y transformarlos en experiencias digitales claras y eficientes para distintos perfiles de usuario. Esto implicó realizar investigación centrada en el usuario, mapear journeys, definir flujos intuitivos y crear un sistema de diseño que garantizara consistencia visual y funcional entre módulos. Asimismo, se requirió una colaboración constante con equipos técnicos y stakeholders para asegurar que las soluciones fueran viables y alineadas con los objetivos del negocio.",
        results: "La implementación de un enfoque centrado en el usuario permitió optimizar procesos internos, reducir errores operativos y mejorar la eficiencia general de la plataforma. Gracias a la claridad de la interfaz y a la facilidad de uso, los usuarios pudieron tomar decisiones más rápidas e informadas. Esto se tradujo en una mayor adopción del producto, aumento en la satisfacción de los clientes empresariales y una mejora en la retención del servicio. En consecuencia, la empresa fortaleció su propuesta de valor y su posicionamiento competitivo en el mercado.",
        image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
        demoUrl: "#",
        githubUrl: "#"
      }
    ],
    
    // Footer
    madeWith: "Hecho con Amor",
    by: "por América Alemán & Figma",
    allRightsReserved: "Todos los derechos reservados",
    readyToCollaborate:"¿Quieres que",
    collaborate:"colaboremos",
    collaborateDesc:"Escríbeme si quieres crear algo juntos.",
    navigation:"Navegación",
    followMe: "Sigueme",
    
    // Contact Form
    contactFormTitle: "Ponte en Contacto",
    contactFormSubtitle: "Hablemos de tu próximo proyecto",
    nameLabel: "Nombre",
    emailLabel: "Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    yourName: "Tu nombre",
    yourEmail: "tu@email.com",
    subjectPlaceholder: "Asunto del proyecto",
    messagePlaceholder: "Cuéntame sobre tu proyecto...",
    sendMessage: "Enviar Mensaje",
    sending: "Enviando...",
    cancel: "Cancelar",
    
    // Contact Form Validation
    nameRequired: "El nombre es requerido",
    emailRequired: "El email es requerido",
    emailInvalid: "Por favor ingresa un email válido",
    subjectRequired: "El asunto es requerido",
    messageRequired: "El mensaje es requerido",
    messageSuccess: "¡Mensaje enviado exitosamente!",
    messageError: "Error al enviar mensaje. Por favor intenta de nuevo.",
    
    // CV Download
    downloadingCV: "Descargando CV...",
    cvDownloadSuccess: "¡CV descargado exitosamente!",
    cvDownloadError: "Error al descargar CV. Por favor intenta de nuevo.",
    
    // Project Detail View
    backToProjects: "← Volver a Proyectos",
    projectOverview: "Resumen del Proyecto",
    keyFeatures: "Características Principales",
    challengesAndSolutions: "Desafíos y Soluciones",
    resultsAndImpact: "Resultados e Impacto",
    viewDemo: "Ver Demo",
    viewCode: "Ver Código",
    technologiesUsed: "Tecnologías Utilizadas"
  }
};