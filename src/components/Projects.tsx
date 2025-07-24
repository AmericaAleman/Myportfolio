import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const { t, getProjects } = useLanguage();
  const { navigateToProject } = useNavigation();
  
  const projects = getProjects();

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">{t('projectsTitle')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('projectsDescription')}
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 gradient-card cursor-pointer"
              onClick={() => navigateToProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Demo link functionality
                      }}
                    >
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="h-8 w-8 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={(e) => {
                        e.stopPropagation();
                        // GitHub link functionality
                      }}
                    >
                      <Github className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="sm" 
                    className="gradient-purple-pink hover:opacity-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToProject(project.id);
                    }}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    {t('seeProject')}
                  </Button>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.shortDescription}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{t('technologies')}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech: string) => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/20 hover:bg-primary/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToProject(project.id);
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      {t('seeProject')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}