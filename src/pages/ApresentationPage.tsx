import styled from 'styled-components';
import TextImgBackground from "../assets/money-economical-background.png";
import CashIcon from "../assets/cash-icon.svg";
import { Link } from "react-router-dom";

export default function ApresentationPage (){
  return (
    <Background>
      <TitleApp>
        <div>
          <h1>My</h1>
          <h1 className="Money">Money</h1>
          <h1 className="Tracking">Tracking</h1>
        </div>
      </TitleApp>

      <Text theme={TextImgBackground}>
        <p>
          O lugar onde você registra e acompanha detalhadamente para onde o seu
          dinheiro está indo. Vem conosco e dá um track na sua grana!
        </p>
        <img src={CashIcon} alt="" />
      </Text>

      <Buttons>
        <Link to={"/login"}>
          <button>Entrar</button>
        </Link>
        <Link to={"/register"}>
          <button>Registrar-se</button>
        </Link>
      </Buttons>
    </Background>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 15px 5px;
`

const TitleApp = styled.div`
  display: flex;
  justify-content: center;

  div h1 {
    font-size: 2em;
    font-family: "Saira Stencil One", cursive;
  }
  .Money {
    padding-left: 30px;
  }
  .Tracking {
    padding-left: 55px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  width: 100%;

  p {
    width: 60%;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button {
    border: none;
    background-color: black;
    color: white;
    border-radius: 5px;
    width: 110px;
    height: 45px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      filter: opacity(70%);
    }
  }
`;