import React, { createContext, useState } from 'react';
import { Feed } from '../types/Feed';

type FeedContextType = {
  feed: Feed[];
  setFeed: (v: Feed[]) => void;
};

export const FeedContext = createContext<FeedContextType>({
  feed: [],
  setFeed: () => {},
});

export const FeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [feed, setFeed] = useState<Feed[]>([]);

  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {children}
    </FeedContext.Provider>
  );
};
