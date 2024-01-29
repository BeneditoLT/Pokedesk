import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinhe no topo da tela */
  height: 100vh;
  background-color: #151f32;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #0e1725;
  margin-top: 50px; /* Adicione margem superior para alinhar ao centro superior */
`;

export const PokemonImage = styled.img`
  width: 300px; // Defina o tamanho desejado
  height: auto;
  margin-bottom: 10px; // Adicione um espaçamento inferior
`;

export const PokemonName = styled.h2`
  margin-top: 1px;
  text-transform: capitalize;
  color: #6edcc4;
`;

export const Attribute = styled.div`
  margin-top: 5px;
  color: #6edcc4;
  display: flex;

  strong {
    color: red;
    padding-right: 10px;
  }

  span {
    margin-right: 10px;
    text-transform: capitalize;
    color: #6edcc4;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    color: red;
  }
`;

export const BackLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: yellow;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #4da081;
  }
`;
