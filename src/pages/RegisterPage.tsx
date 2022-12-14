import { BackgroundLoginPage, FormLoginPage } from "./LoginPage";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const register = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Se registrando no sistema");
  };

  return (
    <BackgroundLoginPage>
      <h1>My Money Tracking</h1>

      <FormLoginPage onSubmit={(e) => register(e)}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <button>Cadastrar</button>
      </FormLoginPage>

      <Link to={"/login"}>
        <span>Já tem uma conta? Entre agora!</span>
      </Link>
    </BackgroundLoginPage>
  );
}