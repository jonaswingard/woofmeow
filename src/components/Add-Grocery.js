import React from 'react';
import { connect } from 'react-redux';
import { addGrocery } from '../actions/groceries';
import GroceryForm from './GroceryForm';

const AddGrocery = props => (
  <GroceryForm
    onSubmit={(grocery) => {
      props.dispatch(addGrocery(grocery));
    }}
  />
);

export default connect()(AddGrocery);
