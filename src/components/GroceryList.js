import React from 'react';
import { connect } from 'react-redux';
import selectGroceries from '../selectors/groceries';

const GroceryList = (props) => (
  <div>
    <h2>Grocery List</h2>
    {props.groceries.map((grocery) => {
      return <div key={grocery.id}>{grocery.title}</div>
    })}
  </div>
);

const mapStateToProps = (state) => ({
  groceries: selectGroceries(state.groceries)
});

export default connect(mapStateToProps)(GroceryList);
