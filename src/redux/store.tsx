import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer, RootState } from './rootReducer';

const allMiddlewares = [thunk];

const store: Store<RootState> = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...allMiddlewares))
);

export { store };