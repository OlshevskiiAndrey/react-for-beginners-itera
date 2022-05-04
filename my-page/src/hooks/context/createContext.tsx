import { createContext } from "react";

export const authorData = {
  authorName: "drag13",
  twitter: "@drag137",
};
export const AuthorDataContext = createContext(authorData);

// Чтобы использовать контекст, необходимо:
//1) Создать контекст;
//2) Передать контекст в дерево использую "контекст.Provider";
//3) Использовать хук useContext;
