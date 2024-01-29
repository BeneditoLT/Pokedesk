import styled, { createGlobalStyle } from "styled-components";

// Estilos globais para o corpo da aplicação
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// Estilos para o container principal da aplicação
export const AppContainer = styled.div`
  
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;