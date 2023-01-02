import styled from 'styled-components';
import { categories } from '../interfaces/interfacesAndDatas';
import { FaEdit, FaTrash } from 'react-icons/Fa';

export default function EditCategories() {
  return (
    <Background>
      <h1>Editar Categorias</h1>
      <br />
      <Body>
        {categories.map((item) => {
          return (
            <CategorieItem color={item.cor}>
              <div className="nameAndColor">
                <div className="color"></div>
                <h1>{item.name}</h1>
              </div>
              <div className="icons">
                <FaEdit className="icon" />
                <FaTrash className="icon" />
              </div>
            </CategorieItem>
          );
        })}
      </Body>
      <br />
      <ButtonAdd>Adicionar Categoria</ButtonAdd>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Body = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CategorieItem = styled.div`
  display: flex;
  justify-content: space-between;

  .nameAndColor {
    display: flex;
    align-items: center;
    gap: 7px;
  }

  .color {
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background-color: ${(props) => props.color};
  }

  .icons {
    display: flex;
    gap: 10px;
  }

  .icons > .icon:hover {
    cursor: pointer;
    filter: opacity(60%);
  }
`;

const ButtonAdd = styled.button`
  padding: 10px;
  border-radius: 10px;
  color: white;
  background-color: black;
  font-weight: bold;
  &:hover{
    filter: opacity(60%);
  }
`
