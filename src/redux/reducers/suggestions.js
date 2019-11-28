const defaultState = [
  {
    id: 3,
    title: 'teact'
  }
];

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case 'findSuggestions': {
      return [
        {
          id: 1,
          title: 'react'
        }
      ]
    }
    default:
      return state;
  }
}

export default reducer; 