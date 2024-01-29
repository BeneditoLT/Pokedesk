import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;


export const Nav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  justify-content: space-between;  
  align-items: center;

  h1 {
    font-family: 'Honk', 'Open Sans', sans-serif;
    font-size: 54px; 
  }
`;


export const PokemonGrid = styled.ul`
  display: grid;
  gap: 10px;
  padding: 10px;
  list-style: none;
  margin: 0;
  max-width: 1000px;
  border: 1px solid #ccc;

  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  `;

export const PokemonItem = styled.li`
  text-align: center;

  a {
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-decoration: none;
    
    background-color: #0e1725;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
      background-color: #0e1725;
      transform: translateY(-5px) scale(1.02);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

   
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #0e1725;
  color: #6edcc4;

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin-top: 10px;
    font-weight: bold;
    text-transform: capitalize;  
  }

  a {
    text-decoration: none;
    color: #6edcc4;
  }

  &:hover {
    background-color: #0e1725;
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
