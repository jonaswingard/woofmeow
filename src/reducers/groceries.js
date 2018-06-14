// Groceries Reducer

const groceriesReducerDefaultState = [];

export default (state = groceriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_GROCERY':
      return [
        ...state,
        action.grocery
      ];
    default:
      return state;
  }
};
