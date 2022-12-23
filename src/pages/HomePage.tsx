import styled from 'styled-components';
import {
  IoExitOutline,
  IoWalletOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { HiArrowsRightLeft } from 'react-icons/hi2';
import SelectMonth from '../components/homeComponents/selectMonth';
import {
  months,
  transactionsExample,
} from '../components/homeComponents/interfacesAndDatas';
import MoneyBalance from '../components/homeComponents/moneyBalance';
import { useNavigate } from 'react-router-dom';
import formatValueToBr from '../utils/formatValues';

export default function HomePage() {
  const navigate = useNavigate();

  function logout() {
    alert('Deslogando da aplicação');
    navigate('/apresentation');
  }

  return (
    <BackgroundHomePage>
      <Header>
        <div className="topHeader">
          <h1> &gt; Ola, Fulano</h1>
          <IoExitOutline onClick={logout} className="iconExit" />
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
                <p>{item.title}</p>
              </div>
              <p className="value">{formatValueToBr(item.value)}</p>
            </TransactionComponent>
          );
        })}
      </BodyTransactions>

      <Footer>
        <IconFooter>
          <HiArrowsRightLeft className="iconMenu" />
          <p>Transações</p>
        </IconFooter>
        <IconFooter>
          <IoWalletOutline className="iconMenu" />
          <p>Carteira</p>
        </IconFooter>
        <IconFooter>
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
  padding: 10px;
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
`;

const TransactionComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
`;

const Footer = styled.nav`
  width: 100%;
  background-color: black;
  box-sizing: border-box;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const IconFooter = styled.div`
  color: white;

  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .iconMenu {
    font-size: 1.5em;
  }
  p {
    font-size: 0.7em;
  }
`;
