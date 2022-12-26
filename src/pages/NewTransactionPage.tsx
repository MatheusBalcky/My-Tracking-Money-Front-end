import styled from 'styled-components';
import { IoArrowBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import {
  transcationFormI,
  inputsFormI,
  dictionaryCategories,
  dictionaryCategoriesI,
} from './interfaces/interfacesAndDatas';

const options = ['A', 'B', 'C'];

export default function NewTransactionPage() {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState<'enter' | 'out'>(
    'enter'
  );

  function selectTransaction(transcationType: 'enter' | 'out') {
    setTransactionType(transcationType);
  }

  return (
    <BackgroundNewTransaction>
      <Header>
        <h1>Nova transação</h1>
        <IoArrowBackOutline
          onClick={() => {
            navigate('/home');
          }}
          className="arrowBackIco"
        />
      </Header>

      <Body>
        <h1>Escolha um tipo de transação</h1>
        <Buttons about={transactionType}>
          <button
            onClick={() => selectTransaction('enter')}
            className="enterButton"
          >
            Entrada
          </button>
          <button
            onClick={() => selectTransaction('out')}
            className="outButton"
          >
            Saída
          </button>
        </Buttons>

        <TransactionForm transactionType={transactionType} />
      </Body>
    </BackgroundNewTransaction>
  );
}

function TransactionForm({ transactionType }: transcationFormI) {
  const [formInputs, setFormInputs] = useState<inputsFormI>({
    title: '',
    type: transactionType,
    value: 0,
    category: undefined,
    description: '',
  });

  function test(e: React.FormEvent) {
    e.preventDefault();
    console.log('Salvando transação');
  }

  useEffect(() => {
    setFormInputs({ ...formInputs, type: transactionType });
  }, [transactionType]);

  return (
    <Form onSubmit={test} about={transactionType}>
      <input
        required
        value={formInputs.title}
        onChange={(e) =>
          setFormInputs({
            ...formInputs,
            title: e.target.value,
          })
        }
        type="text"
        placeholder="Título"
      />

      <CurrencyInput
        required
        placeholder="R$ Valor"
        prefix="R$ "
        decimalsLimit={2}
        decimalSeparator=","
        groupSeparator="."
        onValueChange={(value) => {
          const valueFormated = value?.replace(',', '.');
          setFormInputs({ ...formInputs, value: Number(valueFormated) });
        }}
      />

      <select
        defaultValue={'default'}
        onChange={(e) => {
          const categorieSelectedId =
            dictionaryCategories[e.target.value as keyof dictionaryCategoriesI];
          setFormInputs({
            ...formInputs,
            category: categorieSelectedId,
          });
        }}
      >
        <option hidden disabled value={'default'}>
          Escolha uma categoria
        </option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>

      <textarea
        value={formInputs.description}
        onChange={(e) =>
          setFormInputs({
            ...formInputs,
            description: e.target.value,
          })
        }
        placeholder="Pequena descrição"
      />

      <ButtonConfirm>Salvar transação</ButtonConfirm>
    </Form>
  );
}

// & CSS STYLED COMPONENTS

const BackgroundNewTransaction = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 99vh;
  width: 100%;
  padding: 15px;
  align-items: center;
`;

const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  h1,
  .arrowBackIco {
    font-size: 1.5em;
  }
  .arrowBackIco {
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;

  button {
    box-sizing: border-box;
    border: 3px solid transparent;
    width: 100px;
    background-color: black;
    color: white;
    border-radius: 55px;
    font-weight: bold;
    padding: 10px 0px;
  }

  .enterButton {
    filter: ${(props) => (props.about === 'out' ? 'opacity(50%)' : null)};
    border: ${(props) => (props.about === 'enter' ? '3px solid white' : null)};
    cursor: ${(props) => (props.about === 'enter' ? 'default' : 'pointer')};
    &:hover {
      animation: ${(props) =>
        props.about === 'enter' ? null : 'float 1s infinite'};
    }
  }
  .outButton {
    filter: ${(props) => (props.about === 'enter' ? 'opacity(50%)' : null)};
    border: ${(props) => (props.about === 'out' ? '3px solid white' : null)};
    cursor: ${(props) => (props.about === 'out' ? 'default' : 'pointer')};
    &:hover {
      animation: ${(props) =>
        props.about === 'out' ? null : 'float 1s infinite'};
    }
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-2px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

const Body = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Form = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input:nth-child(2) {
    color: ${(props) => (props.about === 'enter' ? 'green' : 'red')};
  }

  input,
  textarea,
  select {
    box-sizing: border-box;
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 5px;
  }

  textarea {
    height: 130px;
    resize: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const ButtonConfirm = styled.button`
  width: 250px;
  height: 40px;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    filter: opacity(60%);
  }
`;
