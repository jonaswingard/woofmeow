import React from 'react';

const AddGrocery = props => (
  <form
    onSubmit={e => {
      e.preventDefault();
      const input = e.target.elements.grocery;
      props.handleAddGrocery(input.value);
      input.value = '';
    }}
  >
    <input type="text" name="grocery" autoComplete="off" />
    <button>Add</button>
  </form>
);

export default AddGrocery;
