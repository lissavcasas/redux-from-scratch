import { type as findCurrentItemType } from '../actions/findCurrentItem';
import items from '../../data/items';
const defaultState = {};

//use destructuring for the action. they are properties
function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case findCurrentItemType: {
      return items.find(n => n.id === payload);
    }
    default:
      return state;
  }
}

export default reducer; 