import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { ArrowLeft, ExternalLink, Github, Code, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { useNavigation } from "../context/NavigationContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectDetailProps {
  projectId: string;
}

export function ProjectDetail({ projectId }: ProjectDetailProps) {
  const { t, getProjects } = useLanguage();
  const { navigateToHome } = useNavigation();
  
  const projects = getProjects();
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4">Project not found</h2>
          <Button onClick={navigateToHome} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <Button 
            onClick={navigateToHome} 
            variant="ghost" 
            className="hover:bg-accent/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToProjects')}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Project Header */}
        <div className="mb-8">
          <div className="mb-6">
            <h1 className="mb-4 gradient-text">{project.title}</h1>
            <p className="text-muted-foreground mb-6">{project.fullDescription}</p>
            
            {/* <div className="flex flex-wrap gap-3 mb-6">
              <Button className="gradient-purple-pink hover:opacity-90">
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('viewDemo')}
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                {t('viewCode')}
              </Button>
            </div>*/}
          </div>

          {/* Project Image */}
          <div className="rounded-lg overflow-hidden border gradient-card">
            <ImageWithFallback 
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>

        {/* Project Content Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Project Overview */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  {t('projectOverview')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  {t('keyFeatures')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges & Solutions 
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  {t('challengesAndSolutions')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </CardContent>
            </Card>*/}

            {/* Results & Impact 
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  {t('resultsAndImpact')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.results}
                </p>
              </CardContent>
            </Card>*/}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies Used */}
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle>{t('technologiesUsed')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions 
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gradient-purple-pink hover:opacity-90">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t('viewDemo')}
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="w-4 h-4 mr-2" />
                  {t('viewCode')}
                </Button>
              </CardContent>
            </Card>*/}

            {/* Project Stats 
            <Card className="gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    Completed
                  </Badge>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="text-sm">3 months</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Team Size</span>
                  <span className="text-sm">1-2 developers</span>
                </div>
              </CardContent>
            </Card>*/}
          </div>
        </div>

        {/* Call to Action 
        <Card className="mt-12 gradient-card border-border/50">
          <CardContent className="text-center py-8">
            <h3 className="mb-4 gradient-text">Interested in a similar project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you build your next amazing project with modern technologies and best practices.
            </p>
            <Button className="gradient-purple-pink hover:opacity-90">
              {t('contactMe')}
            </Button>
          </CardContent>
        </Card>*/}
      </main>
    </div>
  );
}