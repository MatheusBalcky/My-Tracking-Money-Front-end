import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
  const navigate = useNavigate();

  const login = (e: React.FormEvent ) =>{
    e.preventDefault();
    navigate('/home')
    console.log('Logando no sistema');
  }

  return (
    <BackgroundLoginPage>
      <h1>My Money Tracking</h1>

      <FormLoginPage onSubmit={(e) => login(e)}>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </FormLoginPage>

      <Link to={"/register"}>
        <span>Primeira vez? Cadastre-se!</span>
      </Link>
    </BackgroundLoginPage>
  );
}

export const BackgroundLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 18px;

  h1 {
    font-family: "Saira Stencil One", cursive;
    font-size: 1.5em;
  }

  span {
    font-size: 0.6em;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormLoginPage = styled.form`
  width: 100%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  input,
  button {
    font-family: "Raleway";
    border: none;
    border-radius: 4px;
    font-size: 1em;
    padding: 7px 8px;
  }

  button {
    background-color: black;
    color: white;
    width: 150px;
    font-size: 0.8em;
    cursor: pointer;
    &:hover {
      filter: opacity(70%);
    }
  }
`;