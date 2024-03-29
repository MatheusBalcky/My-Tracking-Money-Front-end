import styled from 'styled-components';
import { IoExitOutline, IoSettingsOutline } from 'react-icons/io5';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import SelectMonth from './homeComponents/selectMonth';
import { months, transactionsExample } from './interfaces/interfacesAndDatas';
import MoneyBalance from './homeComponents/moneyBalance';
import { useNavigate } from 'react-router-dom';
import formatValueToBr from '../utils/formatValues';
import { useCallback } from 'react';

export default function HomePage() {
  const navigate = useNavigate();
  const navigateNewTransaction = useCallback(() => navigate('/new-transaction'), []);
  const navigateHome = useCallback(() => navigate('/home'), []);
  const navigateSettings = useCallback(() => navigate('/settings'), []);
  const handleLogout = useCallback(() => {
    alert('Deslogando da aplicação');
    navigate('/apresentation');
  }, []);

  return (
    <BackgroundHomePage>
      <Header>
        <div className="topHeader">
          <h1> &gt; Ola, Fulano</h1>
          <IoExitOutline onClick={handleLogout} className="iconExit" />
        </div>

        <InfoHeader>
          <SelectMonth months={months} />
          <MoneyBalance />
        </InfoHeader>
      </Header>

      <BodyTransactions>
        {transactionsExample.map((item) => {
          return (
            <TransactionComponent key={item.id} about={item.type}>
              <div className="dateAndName">
                <p className="date">{item.date}</p>
                <p className="title">{item.title}</p>
              </div>
              <p className="value">{formatValueToBr(item.value)}</p>
            </TransactionComponent>
          );
        })}
        <BsFillPlusCircleFill onClick={navigateNewTransaction} className="plusButton" />
      </BodyTransactions>

      <Footer>
        <IconFooter onClick={navigateHome}>
          <HiArrowsRightLeft className="iconMenu" />
          <p>Transações</p>
        </IconFooter>

        <IconFooter onClick={navigateSettings}>
          <IoSettingsOutline className="iconMenu" />
          <p>Configurações</p>
        </IconFooter>
      </Footer>
    </BackgroundHomePage>
  );
}

const BackgroundHomePage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 99.9vh;
  align-items: center;
  gap: 10px;
`;

const Header = styled.div`
  box-sizing: border-box;
  padding: 10px 10px 0px 10px;
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

const BodyTransactions = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: white;
  padding: 20px;
  width: 100%;
  height: 100%; //! não mexe agora apenas qnd tiver footer pronto
  position: relative;
  .plusButton {
    cursor: pointer;
    font-size: 1.7em;
    color: black;
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
      animation: float 1s ease-in-out infinite;
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-3px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

const TransactionComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.8em;
  }

  .dateAndName {
    display: flex;
    gap: 18px;
  }
  .date {
    color: lightgray;
  }
  .value {
    color: ${(props) => (props.about === 'out' ? 'red' : '#03AC00')};
    font-weight: 500;
  }

  .title:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const Footer = styled.nav`
  width: 100%;
  background-color: black;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  gap: 20px;
`;

const IconFooter = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #8af77b;
  }

  .iconMenu {
    font-size: 1.5em;
  }
  p {
    font-size: 0.7em;
  }
`;
