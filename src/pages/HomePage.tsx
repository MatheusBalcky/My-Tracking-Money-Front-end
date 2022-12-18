import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import {
  IoExitOutline,
  IoWallet,
  IoEyeOffOutline,
  IoEyeOutline,
} from "react-icons/io5";
import SelectMonth from "../components/homeComponents/selectMonth";


export default function HomePage() {
  return (
    <BackgroundHomePage>
      <Header>
        <div className="topHeader">
          <h1> &gt; Ola, Fulano</h1>
          <IoExitOutline className="iconExit" />
        </div>

        <InfoHeader>
          <SelectMonth months={["a"]} />

          <div className="moneyBalance">
            <IoWallet className="walletIcon" />
            <span>R$ 2.849,96</span>
            <IoEyeOffOutline />
          </div>
        </InfoHeader>
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
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  .topHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-weight: 800;
      font-size: 1.5em;
    }

    .iconExit {
      font-size: 1.8em;
      cursor: pointer;
      &:hover {
        color: white;
      }
    }
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  .moneyBalance {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    span {
      font-size: 0.8em;
    }
  }
`;

const Dashboard = styled.div`
  background-color: white;
  width: 100%;
  height: 300px;
  border-radius: 4px;
`;

const Footer = styled.div``;
