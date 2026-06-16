import React, { createContext, useState } from 'react';
import { ViewMode } from '../types/ViewMode';

type ViewContextType = {
  view: ViewMode;
  setView: (v: ViewMode) => void;
};

export const ViewContext = createContext<ViewContextType>({
  view: 'list',
  setView: () => {},
});

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = useState<ViewMode>('list');

  return (
    <ViewContext.Provider value={{ view, setView }}>
      {children}
    </ViewContext.Provider>
  );
};
