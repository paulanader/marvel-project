import React from "react";
import { CharactersProvider } from "./hooks/CharactersProvider";
import { PagesRoutes } from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CharactersProvider>
        <PagesRoutes />
      </CharactersProvider>
    </>
  );
};

export default App;
