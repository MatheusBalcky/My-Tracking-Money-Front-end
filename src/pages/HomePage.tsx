import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

export default function HomePage (){
  return (
    <BackgroundHomePage>
      <Header>
        <h1>Ola, Fulano</h1>
        <IoExitOutline className="iconExit"/>
      </Header>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </BackgroundHomePage>
  );
}

const BackgroundHomePage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1{
    font-weight: 800;
    font-size: 1.5em;
  }

  .iconExit {
    font-size: 1.8em;
    cursor: pointer;
    &:hover{
      color: white;
    }
  }

`;

const Dashboard = styled.div`
  background-color: white;
  width: 100%;
  height: 300px;
  border-radius: 4px;
`;

const Footer = styled.div`

`;