import { useContext } from "react";
import { AuthorDataContext } from "./createContext";

export const Contacts = () => {
  const { twitter } = useContext(AuthorDataContext);
  //   const twitter = "??? How to get my twitter";
  return <p>Feel free to contact me in twitter: {twitter}</p>;
};
