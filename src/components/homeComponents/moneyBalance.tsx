import styled from 'styled-components';
import { useState } from 'react';
import { IoWallet, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import formatValueToBr from '../../utils/formatValues';

export default function MoneyBalance() {
  const [moneyHidden, setMoneyHidden] = useState(false);

  function changeVisibility() {
    setMoneyHidden(!moneyHidden);
  }

  return (
    <MoneyBalanceContainer hidden={moneyHidden}>
      <IoWallet className="walletIcon" />
      <span>{formatValueToBr(2849.54)}</span>
      {moneyHidden ? (
        <IoEyeOutline className="iconEye" onClick={changeVisibility} />
      ) : (
        <IoEyeOffOutline className="iconEye" onClick={changeVisibility} />
      )}
    </MoneyBalanceContainer>
  );
}

const MoneyBalanceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  span {
    font-size: 0.8em;
    color: ${(props) => (props.hidden ? 'transparent' : 'black')};
    text-shadow: ${(props) => (props.hidden ? '0 0 8px #000' : null)};
    transition: all .5s;
  }

  .iconEye {
    cursor: pointer;
  }
`;
