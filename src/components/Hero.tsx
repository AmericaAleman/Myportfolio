import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { CVDownloadButton } from "./CVDownloadButton";
{/* import { ContactForm } from "./ContactForm";*/} 

export function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar 
          <div className="mb-8">
            <Avatar className="w-50 h-50 mx-auto">
              <AvatarImage src="profile.png" />
              <AvatarFallback className="gradient-purple-pink text-white text-2xl">TN</AvatarFallback>
            </Avatar>
          </div>*/}

          {/* Main content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">{t('heroGreeting')}</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight">
                <span className="gradient-text">{t('heroName')}</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                {t('heroRole')}
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('heroDescription')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
               {/*<ContactForm>
                <Button 
                  size="lg" 
                  className="gradient-purple-pink hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                  {t('contactMe')}
                </Button>
              </ContactForm>*/}
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
                onClick={() => scrollToSection('projects')}
              >
                {t('projects')}
              </Button>
              <CVDownloadButton />
            </div>

            {/* Scroll indicator */}
            <div className="pt-12">
              <button 
                onClick={() => scrollToSection('about')}
                className="animate-bounce hover:text-primary transition-colors"
                aria-label={t('aboutTitle')}
              >
                <ArrowDown className="w-6 h-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}