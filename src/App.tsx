import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApresentationPage from "./pages/ApresentationPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NewTransactionPage from "./pages/NewTransactionPage";
import MyWalletPage from "./pages/MyWalletPage";
import SettingsPage from "./pages/SettingsPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*' || '/apresentation'} element={<ApresentationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new-transaction" element={<NewTransactionPage />} />
        <Route path="/my-wallet" element={<MyWalletPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
