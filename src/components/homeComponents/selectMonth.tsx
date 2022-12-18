import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io";
import { useState} from 'react'

interface SelectMonth {
  months: String[]
}

export default function SelectMonth(props: SelectMonth) {
  const [monthsHidden, setMonthsEnable] = useState(true);

  const openMonths = () =>{
    setMonthsEnable(!monthsHidden);
  }
  
  return (
    <Container>
      <Background onClick={openMonths} monthsHidden={monthsHidden}>
        <p>Dezembro</p>
        <IoIosArrowDown className="arrowDown" />
      </Background>
      <MonthOptions hidden={monthsHidden}>
        <p>Janeiro</p>
        <p>Janeiro</p>
        <p>Janeiro</p>
        <p>Janeiro</p>
      </MonthOptions>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

interface BackgroundProps {
  monthsHidden: Boolean
}
const Background = styled.div<BackgroundProps>`
  box-sizing: border-box;
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 10px 7px;
  border-radius: ${(props) =>
    props.monthsHidden ? "1em 1em 1em 1em" : "1em 1em 0em 0em"};
  cursor: pointer;
  p,
  .arrowDown {
    color: white;
    font-weight: bold;
    font-size: 0.8em;
  }
`;

const MonthOptions = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  gap: 7px;
  box-sizing: border-box;
  width: 100px;
  padding: 10px 7px;
  background-color: black;
  border-radius: 0em 0em 1em 1em;
  position: absolute;
  top: 27px;
  p {
    color: white;
    font-weight: bold;
    font-size: 0.8em;
  }
`;


