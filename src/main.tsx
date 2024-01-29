import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

// Aplica estilos inline para ocupar 100% da tela
rootElement.style.height = '100%'; // 100% da altura da viewport
rootElement.style.width = '100%';  // 100% da largura da viewport

// Adiciona estilos específicos para telas pequenas
if (window.innerWidth < 768) {
  rootElement.style.display = 'flex';
  rootElement.style.flexDirection = 'column'; // Coluna para centralizar verticalmente
  rootElement.style.alignItems = 'center'; // Centraliza horizontalmente
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);