import { type as findSuggestionsType } from '../actions/findSuggestions';
import items from '../../data/items'

const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findSuggestionsType: {
      //evita el case sensitive (trata igual mayus y minus)
      const regex = new RegExp(`^${payload}`, 'i');
      //filtra todos los elementos que pasen el regex
      return items.filter(n => regex.test(n.title));
    }
    default:
      return state;
  }
}

export default reducer; 