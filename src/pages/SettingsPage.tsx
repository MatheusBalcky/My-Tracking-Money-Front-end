import styled from 'styled-components';
import { IoArrowBackOutline, IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import EditCategories from './settingsPageComponents/EditCategories';
import CleanTransactions from './settingsPageComponents/CleanTransactions';
import { useState } from 'react';

interface renderOptionI {
  status: boolean;
  optionId: null | number;
}

export default function SettingsPage() {
  const navigate = useNavigate();
  const [optionsHidden, setOptionsHidden] = useState<boolean>(false);
  const [renderOption, setRenderOption] = useState<renderOptionI>({
    status: false,
    optionId: null,
  });

  function openOption(optionId: number) {
    setOptionsHidden(true);
    setRenderOption({ status: true, optionId: optionId });
  }

  function closeOption() {
    setRenderOption({
      status: false,
      optionId: null,
    });
    setOptionsHidden(false);
  }

  return (
    <BackgroundSettings>
      <Header>
        <h1>Configurações</h1>

        {renderOption.optionId === null ? (
          <IoArrowBackOutline
            onClick={() => {
              navigate('/home');
            }}
            className="arrowBackIco"
          />
        ) : (
          <IoCloseOutline onClick={closeOption} className="arrowBackIco" />
        )}
      </Header>

      <Options hidden={optionsHidden}>
        <h1 onClick={() => openOption(0)}>&gt; Editar categorias</h1>
        <h1 onClick={() => openOption(1)}>&gt; Limpar transações</h1>
      </Options>

      <RenderOption optionId={renderOption.optionId} />
    </BackgroundSettings>
  );
}

function RenderOption({ optionId }: { optionId: number | null }) {
  if (optionId === null) return null;

  const options = {
    0: <EditCategories />,
    1: <CleanTransactions />,
  };
  type optionsI = typeof options;

  const toRender = options[optionId as keyof optionsI];

  return toRender;
}

// & CSS

const BackgroundSettings = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 99vh;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 0px 10px;
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

const Options = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  padding: 0px 20px;
  gap: 10px;
  width: 100%;
  h1 {
    cursor: pointer;
  }
  h1:hover {
    color: white;
  }
`;
