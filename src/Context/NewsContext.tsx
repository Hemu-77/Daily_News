"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
  content: string;
};

type NewsContextType = {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article) => void;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <NewsContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider");
  }
  return context;
}
