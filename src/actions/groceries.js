import uuid from 'uuid';

// ADD_GROCERY
export const addGrocery = ({
  title = '',
  checked = false
} = {}) => ({
  type: 'ADD_GROCERY',
  grocery: {
    id: uuid(),
    title,
    checked
  }
});
