"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type CategoryContextType = {
  category: string;
  setCategory: (cat: string) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("General");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within CategoryProvider");
  }
  return context;
};
