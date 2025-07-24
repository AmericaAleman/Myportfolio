import { Button } from "./ui/button";
import { Menu, Moon, Sun, Github, Linkedin, Mail, Figma } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { ContactForm } from "./ContactForm";

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h3 className="gradient-text">{t('portfolio')}</h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-primary transition-colors"
            >
              {t('home')}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-primary transition-colors"
            >
              {t('about')}
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-primary transition-colors"
            >
              {t('projects')}
            </button>
             {/* <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-primary transition-colors"
            >
              {t('contact')}
            </button>*/}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/americaaleman/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.figma.com/design/aw162XJfBDSRbRobdPl3gC/Am%C3%A9rica-library?node-id=4348-301&t=uIMjBaZNjI9SbLMp-1" target="_blank" rel="noopener noreferrer">
                  <Figma className="h-5 w-5" />
                </a>
              </Button>
               {/*<ContactForm>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </ContactForm>*/}
            </div>
            
            <LanguageSelector />
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              aria-label={t('toggleTheme')}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t('toggleMenu')}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left hover:text-primary transition-colors"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left hover:text-primary transition-colors"
              >
                {t('about')}
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left hover:text-primary transition-colors"
              >
                {t('projects')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left hover:text-primary transition-colors"
              >
                {t('contact')}
              </button>
              
              <div className="flex items-center space-x-2 pt-4 border-t border-border">
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <ContactForm>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </ContactForm>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}