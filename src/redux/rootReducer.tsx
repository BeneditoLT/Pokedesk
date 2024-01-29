import { combineReducers, Reducer } from 'redux';
import { pokeReducer, POKE_KEY, PokeState } from './pokeredux/poke.reducer';

interface RootState {
  [POKE_KEY]: PokeState;
  // Add other slices of the state if you have more reducers
}

const rootReducer: Reducer<RootState> = combineReducers({
  [POKE_KEY]: pokeReducer,
  // Add other reducers if you have more slices of the state
});

export { rootReducer };
