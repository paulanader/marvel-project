import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Character } from "../pages/Character";
import { Characteres } from "../pages/Characteres";
import { Main } from "../pages/Main";

export const PagesRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/characteres" element={<Characteres />} />
      <Route path="/characteres/:id" element={<Character />} />
    </Routes>
  </BrowserRouter>
);
