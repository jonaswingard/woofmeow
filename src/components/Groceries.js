import React from 'react';

const Groceries = props => (
  <ul>
    {props.groceries.map(grocery => (
      <li key={grocery.title}>
        <label>
          <input
            checked={grocery.checked}
            type="checkbox"
            onChange={() => props.handleToggleGrocery(grocery)}
          />
          {grocery.title}
        </label>
      </li>
    ))}
  </ul>
);

export default Groceries;
