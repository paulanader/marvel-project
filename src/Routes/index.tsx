import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from "../pages/Main";

export const PagesRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
