import React, { createContext, useState } from 'react';

type StartCalendarType = {
  from: Date | null;
  setFrom: (date: Date | null) => void;
};

export const StartCalendarContext = createContext<StartCalendarType>({
  from: null,
  setFrom: () => {},
});

export const StartCalendarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [from, setFrom] = useState<Date | null>(null);

  return (
    <StartCalendarContext.Provider value={{ from, setFrom }}>
      {children}
    </StartCalendarContext.Provider>
  );
};
