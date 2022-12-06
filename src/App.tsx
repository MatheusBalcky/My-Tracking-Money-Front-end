import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApresentationPage from "./pages/ApresentationPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*" || "/apresentation"} element={<ApresentationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
