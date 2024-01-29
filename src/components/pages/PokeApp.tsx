// Importa as dependências necessárias do React e do Redux
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Importa as actions do Redux para carregamento de dados
import { loadData, loadTypeList, loadTypeData } from "../../redux/pokeredux/poke.actions";

// Importa a chave do reducer
import { POKE_KEY } from "../../redux/pokeredux/poke.reducer";

// Importa o componente de busca de Pokémon
import PokemonSearch from "./PokemonSearch";

// Importa os componentes estilizados
import { Container, Nav, PokemonGrid, PokemonItem, PokemonCard } from "./style/PokeApp.style.";
import Footer from "./Footer";

// Interface representando a estrutura de um Pokémon
interface Pokemon {
  name: string;
  types: string[];
  sprites: {
    front_default: string;
  };
  url: string;
}

// Componente funcional para a aplicação principal
const PokeApp: React.FC = () => {
  // Instancia o dispatcher do Redux
  const dispatch = useDispatch();

  // Estados locais para armazenar dados filtrados
  const [filteredPokemonList, setFilteredPokemonList] = useState<Pokemon[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [pokemonNamesOfType, setPokemonNamesOfType] = useState<string[]>([]);

  // Obtém a lista completa de Pokémon da store
  const pokemonList = useSelector((state: any) => state[POKE_KEY]?.data.results || []);

  // Efeito colateral para carregar dados iniciais ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Carrega dados gerais e a lista de tipos de Pokémon
        await dispatch(loadData());
        const typeListResponse = await dispatch(loadTypeList());

        // Extrai tipos únicos da lista de tipos
        const uniqueTypes = extractUniqueTypes(typeListResponse?.payload?.results || []);
        setTypes(uniqueTypes);
      } catch (error) {
        console.error("Erro ao carregar dados da API:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // Efeito colateral para filtrar a lista de Pokémon baseado no tipo selecionado
  useEffect(() => {
    const fetchTypeData = async () => {
      try {
        if (selectedType) {
          // Carrega dados específicos do tipo selecionado
          const namesOfType = await loadTypeData(selectedType);
          setPokemonNamesOfType(namesOfType);

          // Filtra a lista de Pokémon baseado no tipo selecionado
          const filteredList = pokemonList.filter((pokemon: Pokemon) => {
            const typeMatch = namesOfType.includes(pokemon.name);
            return typeMatch;
          });

          setFilteredPokemonList(filteredList);
        } else {
          // Se nenhum tipo selecionado, mostra a lista completa
          setFilteredPokemonList(pokemonList);
        }
      } catch (error) {
        console.error("Erro ao carregar dados do tipo:", error);
      }
    };

    fetchTypeData();
  }, [dispatch, selectedType, pokemonList]);

  // Função para lidar com a busca de Pokémon
  const handleSearch = async (searchInput: string, type: string) => {
    try {
      // Define o tipo selecionado para a busca
      setSelectedType(type);

      // Mapeia a lista completa de Pokémon para adicionar tipos
      const fullPokemonList = pokemonList.map((pokemon: Pokemon) => ({
        ...pokemon,
        types: getPokemonTypes(pokemon.name),
      }));

      // Filtra a lista de Pokémon baseado na busca e no tipo
      const filteredList = fullPokemonList.filter((pokemon: Pokemon) => {
        const nameMatch = pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
        const typeMatch = type === "" || pokemon.types.includes(type.toLowerCase());
        return nameMatch && typeMatch;
      });

      setFilteredPokemonList(filteredList);
    } catch (error) {
      console.error("Erro ao realizar a busca:", error);
    }
  };

  // Função para extrair tipos únicos da lista de tipos de Pokémon
  const extractUniqueTypes = (typeList: any[]): string[] => {
    const typesSet = new Set(typeList.map((type) => type.name));
    return Array.from(typesSet);
  };

  // Função fictícia para obter os tipos de um Pokémon (deve ser implementada conforme a API utilizada)
  const getPokemonTypes = (pokemonName: string): string[] => {
    return [""]; // Implemente conforme necessário
  };

  // Função para extrair o ID do Pokémon a partir da URL
  const getPokemonIdFromUrl = (url: string): string => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  };

  
  // Renderiza o componente
  return (
    <Container>
      {/* Barra de navegação */}
      <Nav>
        <h1>Lista de Pokémon</h1>
        {/* Componente de busca de Pokémon */}
        <PokemonSearch types={types} selectedType={selectedType} onSearch={handleSearch} />
      </Nav>

      {/* Grid de Pokémon */}
      <PokemonGrid>
        {/* Mapeia a lista filtrada de Pokémon para exibição */}
        {filteredPokemonList.map((pokemon: Pokemon) => (
          <PokemonItem key={pokemon.name}>
            {/* Link para os detalhes do Pokémon */}
            <Link to={`/details/${pokemon.name}`}>
              {/* Card de Pokémon */}
              <PokemonCard>
                {/* Imagem do Pokémon */}
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(pokemon.url)}.png`}
                  alt={pokemon.name}
                  className="pokeImage"
                />
                {/* Nome do Pokémon */}
                <p>{pokemon.name}</p>
              </PokemonCard>
            </Link>
          </PokemonItem>
        ))}
      </PokemonGrid>
      
    </Container>
  );
};

// Exporta o componente
export default PokeApp;
