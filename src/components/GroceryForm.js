import React from 'react';

const GroceryForm = props => (
  <form
    onSubmit={e => {
      e.preventDefault();
      const input = e.target.elements.grocery;
      // props.handleAddGrocery(input.value);
      props.onSubmit({
        title: input.value,
        checked: false
      });
      input.value = '';
    }}
  >
    <input type="text" name="grocery" autoComplete="off" />
    <button>Add</button>
  </form>
);

export default GroceryForm;
