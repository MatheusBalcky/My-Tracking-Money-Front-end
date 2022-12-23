import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import { BackgroundPropsI, MonthOptionsI } from './interfacesAndDatas';

export default function SelectMonth(props: { months: string[] }) {
  const [monthsIsFlex, setMonthsEnable] = useState('displaynone');
  const [currentMonth, setCurrentMonth] = useState('Novembro');

  function openMonths() {
    if (monthsIsFlex === 'displaynone') return setMonthsEnable('displayflex');
    setMonthsEnable('displaynone');
  }

  function selectMonth(item: string) {
    setCurrentMonth(item);
    setMonthsEnable('displaynone');
  }

  return (
    <Container>
      <Background onClick={openMonths} monthsIsFlex={monthsIsFlex}>
        <p>{currentMonth}</p>
        <IoIosArrowDown className="arrowDown" />
      </Background>
      <MonthOptions monthsIsFlex={monthsIsFlex} className={monthsIsFlex}>
        {props.months.map((item, index) => {
          if (item === currentMonth) return;
          return (
            <p onClick={() => selectMonth(item)} key={index}>
              {item}
            </p>
          );
        })}
      </MonthOptions>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Background = styled.div<BackgroundPropsI>`
  box-sizing: border-box;
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 7px;
  border-radius: ${(props) =>
    props.monthsIsFlex === 'displaynone'
      ? '1em 1em 1em 1em'
      : '1em 1em 0em 0em'};
  cursor: pointer;
  transition: all 1s;
  p,
  .arrowDown {
    color: white;
    font-weight: bold;
    font-size: 0.8em;
  }
  .arrowDown {
    transform: ${(props) =>
      props.monthsIsFlex === 'displaynone' ? null : 'rotate(180deg)'};
    transition: all 1s;
  }
  &:hover > .arrowDown,
  &:hover > p {
    color: #8af77b;
  }
`;

const MonthOptions = styled.div<MonthOptionsI>`
  display: ${(props) =>
    props.monthsIsFlex === 'displaynone' ? 'none' : 'flex'};
  transition: all 1s;
  flex-direction: column;
  gap: 7px;
  box-sizing: border-box;
  width: 100px;
  padding: 10px 7px;
  background-color: black;
  border-radius: 0em 0em 1em 1em;
  position: absolute;
  top: 27px;
  transition: all 1s ease;
  z-index: ${(props) =>
    props.monthsIsFlex === 'displaynone' ? null : 1};
  p {
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 0.8em;
  }
  p:hover {
    color: #8af77b;
  }

  &.displayflex {
    animation: fade 1s ease;
  }
  @keyframes fade {
    from {
      opacity: 0;
      top: 10px;
    }
    to {
      opacity: 1;
      top: 27px;
    }
  }
`;
