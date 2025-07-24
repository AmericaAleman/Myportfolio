import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Heart, Linkedin, Mail, Figma } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { ContactForm } from "./ContactForm";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/americaaleman/", label: "LinkedIn" },
    { icon: Figma, href: "https://www.figma.com/design/aw162XJfBDSRbRobdPl3gC/Am%C3%A9rica-library?node-id=4348-301&t=uIMjBaZNjI9SbLMp-1", label: "Figma" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Contact section 
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">
              {t('readyToCollaborate')} <span className="gradient-text">{t('collaborate')}</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('collaborateDesc')}
            </p>
            <ContactForm>
              <Button 
                size="lg" 
                className="gradient-purple-pink hover:opacity-90 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('sendMessage')}
              </Button>
            </ContactForm>
          </div>*/}

          <Separator className="mb-8" />

          {/* Footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="gradient-text">{t('portfolio')}</h3>
              <p className="text-muted-foreground">
                {t('heroDescription')}
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4>{t('navigation')}</h4>
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t('home')}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t('about')}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t('projects')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {t('contact')}
                </button>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-4">
              <h4>{t('followMe')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <Button 
                    key={index} 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p className="flex items-center">
              © 2025 {t('madeWith')} 
              <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
            </p>
            <p className="mt-2 md:mt-0">
              {t('by')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}