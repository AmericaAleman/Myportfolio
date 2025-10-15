import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t, language } = useLanguage();

  const skills = [
    "Figma",
    "Illustrator",
    "Affter effcts",
    "Canva",
    "Agile",
    "Design Thinking",
    "UDC",
    "CSS",
    "HTML5",
    "Git",
    "Angular",
    "JS",
    "TS",
    "Jquery",
    "Dynatrace",
    "Google analitycs",
    "Uizard",
    "Elementor",
    "Notion",
    "Miro",
    "Journey maps",
    "Wireframing",
    "Prototyping",
    "User flows",
    "User research",
    "Usability testing",
    "A/B testing",
    "Responsive design",
    "Accessibility",
    "SEO",
    "Communication",
    "Teamwork",
    "Problem-solving",
    "Creativity",
    "Time management",
    "Adaptability",
    "Critical thinking",
    "Attention to detail",
    "Empathy",
    "Collaboration",
    "Leadership"
  ];

  const features = [
    {
      icon: Palette,
      title:
        language === "en" ? "UI/UX Design" : "Diseño UI/UX",
      description:
        language === "en"
          ? "Creating intuitive and beautiful user interfaces with focus on user experience."
          : "Creando interfaces de usuario intuitivas y hermosas con enfoque en la experiencia del usuario.",
    },
    {
      icon: Code,
      title:
        language === "en"
          ? "Frontend Development"
          : "Desarrollo Frontend",
      description:
        language === "en"
          ? "Building responsive and interactive web applications with modern technologies."
          : "Construyendo aplicaciones web responsivas e interactivas con tecnologías modernas.",
    },
    {
      icon: Rocket,
      title: language === "en" ? "Performance" : "Rendimiento",
      description:
        language === "en"
          ? "Optimizing applications for speed, accessibility and best practices."
          : "Optimizando aplicaciones para velocidad, accesibilidad y mejores prácticas.",
    },
    {
      icon: Users,
      title:
        language === "en" ? "Collaboration" : "Colaboración",
      description:
        language === "en"
          ? "Working effectively in teams and communicating technical concepts clearly."
          : "Trabajando efectivamente en equipos y comunicando conceptos técnicos claramente.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl gradient-text">
              {t("aboutTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("aboutDescription")}
            </p>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl gradient-text">
                  {language === "en"
                    ? "My Story"
                    : "Mi Historia"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Since 2016, I’ve built my career in tech, starting with digital marketing and e-commerce. My curiosity led me to programming and becoming a Front-end Developer, where I discovered a strong passion for UX/UI design. I believe intuitive experiences are essential to any product’s success. I’ve worked with BBVA, Santander, and agencies Think Outside, also in a company that create software for some companies, blending design and development. One highlight was designing an AI chatbot for Tec de Monterrey, which later led me to lead the creation of a design system at Cloud Core."
                    : "Desde 2016, he desarrollado mi carrera en tecnología, comenzando con marketing digital y comercio electrónico. Mi curiosidad me llevó a la programación y a convertirme en desarrolladora front-end, donde descubrí una gran pasión por el diseño UX/UI. Creo que las experiencias intuitivas son esenciales para el éxito de cualquier producto. He trabajado con BBVA, Santander, agencias de marketing digital Think Outside, empresas en el ramo del software empresarial, integrando diseño y desarrollo. Un logro destacado fue el diseño de un chatbot de IA para el Tec de Monterrey, lo que posteriormente me llevó a liderar la creación de un sistema de diseño en Cloud Core."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "I believe in continuous learning and staying updated with the latest technologies and best practices. Every project is an opportunity to grow and create something meaningful."
                    : "Creo en el aprendizaje continuo y mantenerme actualizado con las últimas tecnologías y mejores prácticas. Cada proyecto es una oportunidad para crecer y crear algo significativo."}
                </p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-2xl gradient-text">{t("skills")}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border gradient-card">
                <img
                  src="meIA.png"
                  alt="Me"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-purple-pink rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 gradient-purple-pink rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}