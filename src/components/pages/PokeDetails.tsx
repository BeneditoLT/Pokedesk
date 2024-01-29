// Importa as dependências necessárias do React e do Redux
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Importa a action de carregamento de detalhes do Pokémon e a chave do reducer
import { loadPokeName } from '../../redux/pokeredux/poke.actions';
import { POKE_KEY } from '../../redux/pokeredux/poke.reducer';

// Importa os componentes estilizados para o detalhe do Pokémon
import {
  DetailContainer,
  DetailContent,
  PokemonImage,
  PokemonName,
  Attribute,
  BackLink,
} from './style/PokemonCard.style';

// Interface para representar a estrutura do estado que você espera
interface PokemonState {
  pokeUrlData: {
    sprites: {
      front_default: string;
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    base_experience: number;
    weight: number;
    height: number;
    types: {
      type: {
        name: string;
      };
    }[];
    stats: {
      stat: {
        name: string;
      };
      base_stat: number;
    }[];
  };
}

// Componente funcional para exibir os detalhes do Pokémon
const PokeDetails: React.FC = () => {
  // Instancia o dispatcher do Redux
  const dispatch = useDispatch();

  // Obtém o parâmetro 'url' da rota atual
  const { url: pokemonName } = useParams();

  // Efeito colateral para carregar os detalhes do Pokémon ao montar o componente
  useEffect(() => {
    if (pokemonName) {
      // Verifica se 'pokemonName' é definido antes de fazer a chamada da action
      dispatch(loadPokeName(pokemonName));
    }
  }, [dispatch, pokemonName]);

  // Obtém os dados do Pokémon da store usando o useSelector
  const viewPoke = useSelector((state: PokemonState) => state[POKE_KEY]);

  // Renderiza o componente
  return (
    <DetailContainer>
      <DetailContent>
        {/* Verifica se há dados do Pokémon antes de renderizar */}
        {Object.keys(viewPoke.pokeUrlData).length === 0 ? null : (
          <>
            {/* Exibe a imagem do Pokémon */}
            <PokemonImage src={viewPoke.pokeUrlData.sprites.front_default ?? ''} alt="" />
            {/* Exibe o nome do Pokémon */}
            <PokemonName>{pokemonName}</PokemonName>
            {/* Exibe as habilidades do Pokémon */}
            <Attribute>
              <strong>Abilities:</strong>{' '}
              {viewPoke.pokeUrlData.abilities
                ? viewPoke.pokeUrlData.abilities.map((ability: string) => ability.ability.name).join(', ')
                : ''}
            </Attribute>
            {/* Exibe a experiência base do Pokémon */}
            <Attribute>
              <strong>Base Experience:</strong> {viewPoke.pokeUrlData.base_experience}
            </Attribute>
            {/* Exibe o peso do Pokémon */}
            <Attribute>
              <strong>Weight:</strong> {viewPoke.pokeUrlData.weight}
            </Attribute>
            {/* Exibe a altura do Pokémon */}
            <Attribute>
              <strong>Height:</strong> {viewPoke.pokeUrlData.height}
            </Attribute>
            {/* Exibe os tipos do Pokémon */}
            <Attribute>
              <strong>Types:</strong>{' '}
              {viewPoke.pokeUrlData.types.map((type: string) => type.type.name).join(', ')}
            </Attribute>
            {/* Exibe as estatísticas do Pokémon */}
            <Attribute>
              {viewPoke.pokeUrlData.stats.map((stat: string) => (
                <span key={stat.stat.name}>
                  <div>{stat.stat.name}</div> {stat.base_stat}{' '}
                </span>
              ))}
            </Attribute>
            {/* Adiciona um link de volta à página inicial */}
            <BackLink to="/">
              <i></i> Voltar
            </BackLink>
          </>
        )}
      </DetailContent>
    </DetailContainer>
  );
};

// Exporta o componente
export default PokeDetails;
