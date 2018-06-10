import React from 'react';

const SelectedGroceries = props => (
  <ul>
    {props.groceries.map(grocery => (
      <li key={grocery.title}>{grocery.title}</li>
    ))}
  </ul>
);

export default SelectedGroceries;
