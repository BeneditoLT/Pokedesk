// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { GlobalStyles, AppContainer } from "./components/pages/style/App.style"; // Importa estilos do arquivo styles.js
import Home from "./components/pages/Home";
import PokeApp from "./components/pages/PokeApp";
import PokemonDetails from "./components/pages/PokeDetails";


const App = () => {
  return (
    <React.Fragment>
      {/* Aplica os estilos globais */}
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          {/* Utiliza o container principal da aplicação */}
          <AppContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/poke" element={<PokeApp />} />
              <Route path="/details/:url" element={<PokemonDetails />} />
            </Routes>
          </AppContainer>
        </Router>
        
      </Provider>
    </React.Fragment>
  );
};

export default App;

