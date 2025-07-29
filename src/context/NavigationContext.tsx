import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type ViewType = 'home' | 'project';

interface NavigationContextType {
  currentView: ViewType;
  currentProjectId: string | null;
  navigateToProject: (projectId: string) => void;
  navigateToHome: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  const navigateToProject = (projectId: string) => {
    setCurrentView('project');
    setCurrentProjectId(projectId);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentView('home');
    setCurrentProjectId(null);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{
      currentView,
      currentProjectId,
      navigateToProject,
      navigateToHome
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}