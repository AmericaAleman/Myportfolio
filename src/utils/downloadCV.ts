// Simulamos la descarga de un CV. En un proyecto real, tendrías un archivo PDF estático
// o generarías el CV dinámicamente usando una librería como jsPDF
export const downloadCV = (language: 'es' | 'en') => {
  // Crear un CV con la información específica de América Alemán
  const cvData = language === 'es' ? {
    name: "América Alemán",
    title: "Diseñadora UX/UI",
    email: "ameri.aleman@gmail.com",
    phone: "+52 5547966293",
    location: "Ciudad de México, México",
    summary: "Diseñadora UX/UI con una sólida formación en desarrollo front-end y estrategia de productos digitales. He contribuido a proyectos de banca digital, educación y software empresarial, aplicando metodologías centradas en el usuario, investigación y pensamiento de diseño. Combino visión estratégica, diseño funcional y habilidades técnicas para crear experiencias digitales eficientes e intuitivas.",
    experience: [
      {
        title: "Diseñadora UX/UI | Líder UX",
        company: "Cloud Core",
        period: "Abril 2025 - Actualidad | Ciudad de México",
        description: "Diseño y construcción de una plataforma SaaS escalable que optimiza operaciones financieras, administrativas y de recursos humanos para empresas."
      },
      {
        title: "Diseñadora UX/UI",
        company: "Tecnológico de Monterrey | Proceti",
        period: "Octubre 2024 - Abril 2025 | Ciudad de México",
        description: "Diseño de un chat interactivo con inteligencia artificial para estudiantes universitarios, enfocado en ofrecer conversaciones personalizadas por materia."
      },
      {
        title: "Diseñadora UX/UI",
        company: "Think Outside",
        period: "Enero 2023 - Octubre 2024 | Ciudad de México",
        description: "Trabajé como freelance en diversos proyectos enfocados en el desarrollo de plataformas digitales y soluciones para empresas de las industrias textil, belleza, cuidado personal, entretenimiento y arte."
      },
      {
        title: "Desarrolladora Front End",
        company: "Santander",
        period: "Noviembre 2021 - Enero 2024 | Ciudad de México",
        description: "Contribuí en varios proyectos enfocados en el desarrollo de productos digitales para usuarios finales, como el flujo de onboarding para solicitud y activación de tarjetas de crédito. Colaboré estrechamente con equipos multidisciplinarios para resolver problemas reportados por usuarios y prevenir errores antes del lanzamiento a producción."
      },
      {
        title: "Investigación UX | Desarrolladora Front End",
        company: "GFT",
        period: "Mayo 2018 - Noviembre 2021 | Ciudad de México",
        description: "Contribuí al desarrollo y optimización de productos bancarios digitales mediante implementación front-end e investigación centrada en el usuario, mejorando herramientas internas y plataformas para clientes."
      },
      {
        title: "E-commerce y Marketing Digital",
        company: "Comisa",
        period: "Junio 2016 - Agosto 2017 | Ciudad de México",
        description: "Lideré el lanzamiento de un proyecto de comercio electrónico mediante el análisis del mercado digital y la creación de estrategias de ventas online, con enfoque en campañas efectivas de marketing digital."
      }
    ],
    education: [
      {
        degree: "Licenciatura en Mercadotecnia",
        school: "IPN ESCA",
        year: "2012 - 2016"
      },
      {
        degree: "Ingeniería en Sistemas (incompleta)",
        school: "UNADM",
        year: "2020 - 2023"
      },
      {
        degree: "Bootcamp en UX/UI Design",
        school: "EBAC",
        year: "2022"
      },
      {
        degree: "Bootcamp en Desarrollo Front-End",
        school: "Laboratoria",
        year: "2017 - 2018"
      },
      {
        degree: "Taller en Design Thinking & Product Design",
        school: "DTX",
        year: "2024"
      },
      {
        degree: "Programa en Análisis de Datos",
        school: "Open Academy",
        year: "2025"
      }
    ],
    skills: [
      "Figma",
      "Illustrator",
      "After Effects",
      "Canva",
      "Agile",
      "Design Thinking",
      "UDC",
      "CSS",
      "HTML5",
      "Git",
      "Angular",
      "JavaScript (JS)",
      "TypeScript (TS)",
      "jQuery",
      "Dynatrace",
      "Google Analytics",
      "Uizard",
      "Elementor",
      "Notion",
      "Miro",
      "Mapas de experiencia (Journey Maps)"
    ]
  } : {
    name: "América Alemán",
    title: "UX/UI Designer",
    email: "ameri.aleman@gmail.com",
    phone: "+52 5547966293",
    location: "Mexico City, Mexico",
    summary: "UX/UI Designer with a strong background in front-end development and digital product strategy. I've contributed to projects in digital banking, education, and enterprise software, applying user-centered methodologies, research, and design thinking. I combine strategic insight, functional design, and technical skills to create efficient and intuitive digital experiences.",
    experience: [
      {
        title: "UX/UI Designer | Lead UX",
        company: "Cloud Core",
        period: "April 2025 - Present | Mexico City",
        description: "Design and build a scalable SaaS platform that streamlines finance, administrative, and HR operations for businesses."
      },
      {
        title: "UX/UI Designer",
        company: "Tecnológico de Monterrey | Proceti",
        period: "October 2024 - April 2025 | Mexico City",
        description: "Design of an AI-powered interactive chat for university students, focused on delivering personalized conversations by subject."
      },
      {
        title: "UX/UI Designer",
        company: "Think Outside",
        period: "January 2023 - October 2024 | Mexico City",
        description: "I worked as freelance on various projects focused on developing digital platforms and solutions for companies in the textile, beauty, personal care, entertainment, and arts industries."
      },
      {
        title: "Front End Developer",
        company: "Santander",
        period: "November 2021 - January 2024 | Mexico City",
        description: "I contributed to various projects focused on developing end-user digital products, such as the onboarding flow for credit card application and activation. I worked closely with cross-functional teams to resolve user-reported issues and to proactively detect and prevent errors before production releases."
      },
      {
        title: "UX Research | Front End Developer",
        company: "GFT",
        period: "May 2018 - November 2021 | Mexico City",
        description: "I contributed to the development and optimization of digital banking products through front-end implementation and user-centered research, enhancing both internal tools and customer-facing platforms."
      },
      {
        title: "E-commerce & Digital Marketing",
        company: "Comisa",
        period: "June 2016 - August 2017 | Mexico City",
        description: "I led the launch of an e-commerce project by analyzing the digital market and developing online sales strategies, with a focus on implementing effective digital marketing campaigns."
      }
    ],
    education: [
      {
        degree: "Bachelor's in Marketing",
        school: "IPN ESCA",
        year: "2012 - 2016"
      },
      {
        degree: "Systems Engineering (incomplete)",
        school: "UNADM",
        year: "2020 - 2023"
      },
      {
        degree: "UX/UI Design Bootcamp",
        school: "EBAC",
        year: "2022"
      },
      {
        degree: "Front-End Development Bootcamp",
        school: "Laboratoria",
        year: "2017 - 2018"
      },
      {
        degree: "Workshop in Design Thinking & Product Design",
        school: "DTX",
        year: "2024"
      },
      {
        degree: "Data Analytics Program",
        school: "Open Academy",
        year: "2025"
      }
    ],
    skills: [
      "Figma",
      "Illustrator",
      "After Effects",
      "Canva",
      "Agile",
      "Design Thinking",
      "UDC",
      "CSS",
      "HTML5",
      "Git",
      "Angular",
      "JavaScript (JS)",
      "TypeScript (TS)",
      "jQuery",
      "Dynatrace",
      "Google Analytics",
      "Uizard",
      "Elementor",
      "Notion",
      "Miro",
      "Journey Maps"
    ]
  };

  // Crear contenido del CV en formato de texto
  const cvContent = `
${cvData.name}
${cvData.title}

${language === 'es' ? 'CONTACTO' : 'CONTACT'}
${language === 'es' ? 'Email:' : 'Email:'} ${cvData.email}
${language === 'es' ? 'Teléfono:' : 'Phone:'} ${cvData.phone}
${language === 'es' ? 'Ubicación:' : 'Location:'} ${cvData.location}

${language === 'es' ? 'RESUMEN PROFESIONAL' : 'PROFESSIONAL SUMMARY'}
${cvData.summary}

${language === 'es' ? 'EXPERIENCIA LABORAL' : 'WORK EXPERIENCE'}
${cvData.experience.map(exp => `
${exp.title}
${exp.company} | ${exp.period}
${exp.description}
`).join('\n')}

${language === 'es' ? 'EDUCACIÓN' : 'EDUCATION'}
${cvData.education.map(edu => `
${edu.degree}
${edu.school} | ${edu.year}
`).join('\n')}

${language === 'es' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS'}
${cvData.skills.join(' • ')}

---
${language === 'es' ? 'CV generado desde mi portafolio web' : 'CV generated from my web portfolio'}
${new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}
`;

  // Crear el archivo y descargarlo
  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `CV_${cvData.name.replace(/\s+/g, '_')}_${language.toUpperCase()}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Función alternativa para generar CV en formato PDF usando jsPDF
export const downloadCVPDF = async (language: 'es' | 'en') => {
  try {
    // Importar jsPDF dinámicamente
    const { jsPDF } = await import('jspdf');
    
    const cvData = language === 'es' ? {
      name: "América Alemán",
      title: "Diseñadora UX/UI",
      email: "ameri.aleman@gmail.com",
      phone: "+52 5547966293",
      location: "Ciudad de México, México",
      summary: "Diseñadora UX/UI con una sólida formación en desarrollo front-end y estrategia de productos digitales. He contribuido a proyectos de banca digital, educación y software empresarial, aplicando metodologías centradas en el usuario, investigación y pensamiento de diseño. Combino visión estratégica, diseño funcional y habilidades técnicas para crear experiencias digitales eficientes e intuitivas.",
      experience: [
        {
          title: "Diseñadora UX/UI | Líder UX",
          company: "Cloud Core",
          period: "Abril 2025 - Septiembre 2025 | Ciudad de México",
          description: "Diseño y construcción de una plataforma SaaS escalable que optimiza operaciones financieras, administrativas y de recursos humanos para empresas."
        },
        {
          title: "Diseñadora UX/UI",
          company: "Tecnológico de Monterrey | Proceti",
          period: "Octubre 2024 - Abril 2025 | Ciudad de México",
          description: "Diseño de un chat interactivo con inteligencia artificial para estudiantes universitarios, enfocado en ofrecer conversaciones personalizadas por materia."
        },
        {
          title: "Diseñadora UX/UI",
          company: "Think Outside",
          period: "Enero 2023 - Octubre 2024 | Ciudad de México",
          description: "Trabajé como freelance en diversos proyectos enfocados en el desarrollo de plataformas digitales y soluciones para empresas de las industrias textil, belleza, cuidado personal, entretenimiento y arte."
        },
        {
          title: "Desarrolladora Front End",
          company: "Santander",
          period: "Noviembre 2021 - Enero 2024 | Ciudad de México",
          description: "Contribuí en varios proyectos enfocados en el desarrollo de productos digitales para usuarios finales, como el flujo de onboarding para solicitud y activación de tarjetas de crédito. Colaboré estrechamente con equipos multidisciplinarios para resolver problemas reportados por usuarios y prevenir errores antes del lanzamiento a producción."
        },
        {
          title: "Investigación UX | Desarrolladora Front End",
          company: "GFT",
          period: "Mayo 2018 - Noviembre 2021 | Ciudad de México",
          description: "Contribuí al desarrollo y optimización de productos bancarios digitales mediante implementación front-end e investigación centrada en el usuario, mejorando herramientas internas y plataformas para clientes."
        },
        {
          title: "E-commerce y Marketing Digital",
          company: "Comisa",
          period: "Junio 2016 - Agosto 2017 | Ciudad de México",
          description: "Lideré el lanzamiento de un proyecto de comercio electrónico mediante el análisis del mercado digital y la creación de estrategias de ventas online, con enfoque en campañas efectivas de marketing digital."
        }
      ],
      education: [
        {
          degree: "Licenciatura en Mercadotecnia",
          school: "IPN ESCA",
          year: "2012 - 2016"
        },
        {
          degree: "Ingeniería en Sistemas (incompleta)",
          school: "UNADM",
          year: "2020 - 2023"
        },
        {
          degree: "Bootcamp en UX/UI Design",
          school: "EBAC",
          year: "2022"
        },
        {
          degree: "Bootcamp en Desarrollo Front-End",
          school: "Laboratoria",
          year: "2017 - 2018"
        },
        {
          degree: "Taller en Design Thinking & Product Design",
          school: "DTX",
          year: "2024"
        },
        {
          degree: "Programa en Análisis de Datos",
          school: "Open Academy",
          year: "2025"
        }
      ],
      skills: [
        "Figma",
        "Illustrator",
        "After Effects",
        "Canva",
        "Agile",
        "Design Thinking",
        "UDC",
        "CSS",
        "HTML5",
        "Git",
        "Angular",
        "JavaScript (JS)",
        "TypeScript (TS)",
        "jQuery",
        "Dynatrace",
        "Google Analytics",
        "Uizard",
        "Elementor",
        "Notion",
        "Miro",
        "Mapas de experiencia (Journey Maps)"
      ]
    } : {
      name: "América Alemán",
      title: "UX/UI Designer",
      email: "ameri.aleman@gmail.com",
      phone: "+52 5547966293",
      location: "Mexico City, Mexico",
      summary: "UX/UI Designer with a strong background in front-end development and digital product strategy. I've contributed to projects in digital banking, education, and enterprise software, applying user-centered methodologies, research, and design thinking. I combine strategic insight, functional design, and technical skills to create efficient and intuitive digital experiences.",
      experience: [
        {
          title: "UX/UI Designer | Lead UX",
          company: "Cloud Core",
          period: "April 2025 - September 2025 | Mexico City",
          description: "Design and build a scalable SaaS platform that streamlines finance, administrative, and HR operations for businesses."
        },
        {
          title: "UX/UI Designer",
          company: "Tecnológico de Monterrey | Proceti",
          period: "October 2024 - April 2025 | Mexico City",
          description: "Design of an AI-powered interactive chat for university students, focused on delivering personalized conversations by subject."
        },
        {
          title: "UX/UI Designer",
          company: "Think Outside",
          period: "January 2023 - October 2024 | Mexico City",
          description: "I worked as freelance on various projects focused on developing digital platforms and solutions for companies in the textile, beauty, personal care, entertainment, and arts industries."
        },
        {
          title: "Front End Developer",
          company: "Santander",
          period: "November 2021 - January 2024 | Mexico City",
          description: "I contributed to various projects focused on developing end-user digital products, such as the onboarding flow for credit card application and activation. I worked closely with cross-functional teams to resolve user-reported issues and to proactively detect and prevent errors before production releases."
        },
        {
          title: "UX Research | Front End Developer",
          company: "GFT",
          period: "May 2018 - November 2021 | Mexico City",
          description: "I contributed to the development and optimization of digital banking products through front-end implementation and user-centered research, enhancing both internal tools and customer-facing platforms."
        },
        {
          title: "E-commerce & Digital Marketing",
          company: "Comisa",
          period: "June 2016 - August 2017 | Mexico City",
          description: "I led the launch of an e-commerce project by analyzing the digital market and developing online sales strategies, with a focus on implementing effective digital marketing campaigns."
        }
      ],
      education: [
        {
          degree: "Bachelor's in Marketing",
          school: "IPN ESCA",
          year: "2012 - 2016"
        },
        {
          degree: "Systems Engineering (incomplete)",
          school: "UNADM",
          year: "2020 - 2023"
        },
        {
          degree: "UX/UI Design Bootcamp",
          school: "EBAC",
          year: "2022"
        },
        {
          degree: "Front-End Development Bootcamp",
          school: "Laboratoria",
          year: "2017 - 2018"
        },
        {
          degree: "Workshop in Design Thinking & Product Design",
          school: "DTX",
          year: "2024"
        },
        {
          degree: "Data Analytics Program",
          school: "Open Academy",
          year: "2025"
        }
      ],
      skills: [
        "Figma",
        "Illustrator",
        "After Effects",
        "Canva",
        "Agile",
        "Design Thinking",
        "UDC",
        "CSS",
        "HTML5",
        "Git",
        "Angular",
        "JavaScript (JS)",
        "TypeScript (TS)",
        "jQuery",
        "Dynatrace",
        "Google Analytics",
        "Uizard",
        "Elementor",
        "Notion",
        "Miro",
        "Journey Maps"
      ]
    };

    const doc = new jsPDF();
    let yPosition = 20;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    const contentWidth = pageWidth - 2 * margin;

    // Helper function to add new page if needed
    const checkPageSpace = (neededSpace: number) => {
      if (yPosition + neededSpace > doc.internal.pageSize.height - 20) {
        doc.addPage();
        yPosition = 20;
      }
    };

    // Header
    doc.setFontSize(24);
    doc.setTextColor(139, 92, 246); // Purple color
    doc.text(cvData.name, margin, yPosition);
    yPosition += 10;

    doc.setFontSize(16);
    doc.setTextColor(100, 100, 100);
    doc.text(cvData.title, margin, yPosition);
    yPosition += 20;

    // Contact Info
    doc.setFontSize(14);
    doc.setTextColor(139, 92, 246);
    doc.text(language === 'es' ? 'CONTACTO' : 'CONTACT', margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(`Email: ${cvData.email}`, margin, yPosition);
    yPosition += 6;
    doc.text(`${language === 'es' ? 'Teléfono:' : 'Phone:'} ${cvData.phone}`, margin, yPosition);
    yPosition += 6;
    doc.text(`${language === 'es' ? 'Ubicación:' : 'Location:'} ${cvData.location}`, margin, yPosition);
    yPosition += 15;

    // Summary
    checkPageSpace(30);
    doc.setFontSize(14);
    doc.setTextColor(139, 92, 246);
    doc.text(language === 'es' ? 'RESUMEN PROFESIONAL' : 'PROFESSIONAL SUMMARY', margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const summaryLines = doc.splitTextToSize(cvData.summary, contentWidth);
    doc.text(summaryLines, margin, yPosition);
    yPosition += summaryLines.length * 5 + 10;

    // Experience
    checkPageSpace(30);
    doc.setFontSize(14);
    doc.setTextColor(139, 92, 246);
    doc.text(language === 'es' ? 'EXPERIENCIA LABORAL' : 'WORK EXPERIENCE', margin, yPosition);
    yPosition += 8;

    cvData.experience.forEach((exp) => {
      checkPageSpace(25);
      
      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      doc.text(exp.title, margin, yPosition);
      yPosition += 6;

      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${exp.company} | ${exp.period}`, margin, yPosition);
      yPosition += 5;

      doc.setTextColor(50, 50, 50);
      const descLines = doc.splitTextToSize(exp.description, contentWidth);
      checkPageSpace(descLines.length * 5);
      doc.text(descLines, margin, yPosition);
      yPosition += descLines.length * 5 + 8;
    });

    // Education
    checkPageSpace(30);
    doc.setFontSize(14);
    doc.setTextColor(139, 92, 246);
    doc.text(language === 'es' ? 'EDUCACIÓN' : 'EDUCATION', margin, yPosition);
    yPosition += 8;

    cvData.education.forEach((edu) => {
      checkPageSpace(15);
      
      doc.setFontSize(12);
      doc.setTextColor(50, 50, 50);
      doc.text(edu.degree, margin, yPosition);
      yPosition += 6;

      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${edu.school} | ${edu.year}`, margin, yPosition);
      yPosition += 10;
    });

    // Skills
    checkPageSpace(30);
    doc.setFontSize(14);
    doc.setTextColor(139, 92, 246);
    doc.text(language === 'es' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS', margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    const skillsText = cvData.skills.join(' • ');
    const skillsLines = doc.splitTextToSize(skillsText, contentWidth);
    doc.text(skillsLines, margin, yPosition);

    // Footer
    yPosition += skillsLines.length * 5 + 15;
    checkPageSpace(15);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `${language === 'es' ? 'CV generado desde mi portafolio web' : 'CV generated from my web portfolio'} - ${new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US')}`,
      margin,
      yPosition
    );

    // Save the PDF
    doc.save(`CV_${cvData.name.replace(/\s+/g, '_')}_${language.toUpperCase()}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    // Fallback to text download
    downloadCV(language);
    throw error; // Re-throw to allow proper error handling in the component
  }
};