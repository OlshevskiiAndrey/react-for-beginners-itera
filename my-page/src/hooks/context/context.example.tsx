import { FC } from "react";
import { Contacts } from "./contacts";
import { authorData, AuthorDataContext } from "./createContext";

const Main = () => {
  <main>
    <h1>Hello, this is my blog page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum ea
      dolorum labore, est quam velit soluta omnis tenetur odit placeat
      exercitationem distinctio optio minima dolorem nihil libero ullam iste.
    </p>

    <Contacts />
  </main>;
};
const Footer: FC<{ author: string }> = ({ author }) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      By {author}. C {year}
    </footer>
  );
};

const App = () => {
  const { authorName } = authorData;
  return (
    <>
      <AuthorDataContext.Provider value={authorData}>
        <Main />
      </AuthorDataContext.Provider>
      <Footer author={authorName} />
    </>
  );
};

export default App;
