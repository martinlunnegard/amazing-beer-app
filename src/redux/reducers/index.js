import resultsReducer from './results';
import favoritesReducer from './favorites';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  results : resultsReducer,
  favorites: favoritesReducer
});

export default rootReducer