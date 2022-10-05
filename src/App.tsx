import React from "react";
import { PagesRoutes } from "./Routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <PagesRoutes />
    </>
  );
};

export default App;
