import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ProjectDetail } from "./components/ProjectDetail";
import { LanguageProvider } from "./context/LanguageContext";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { Toaster } from "./components/ui/sonner";
import './styles/globals.css';
import './App.css';


function AppContent() {
  const { currentView, currentProjectId } = useNavigation();

  if (currentView === 'project' && currentProjectId) {
    return <ProjectDetail projectId={currentProjectId} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AppContent />
        <Toaster 
          position="bottom-right"
          theme="system"
          richColors
          closeButton
        />
      </NavigationProvider>
    </LanguageProvider>
  );
}
