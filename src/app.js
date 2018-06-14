import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addGrocery } from './actions/groceries';
import AddGrocery from './components/Add-Grocery';
import ErrorMessage from './components/Error-Message';
import GroceryList from './components/GroceryList';
import Header from './components/Header';
import SelectedGroceries from './components/Selected-Groceries';
import getGroceries from './selectors/groceries';
import configureStore from './store/configureStore';

class MyApp extends React.Component {
  state = {
    groceries: [
      {
        title: 'Item 1',
        checked: false
      },
      {
        title: 'Item 2',
        checked: false
      },
      {
        title: 'Item 3',
        checked: false
      },
      {
        title: 'Item 4',
        checked: false
      },
      {
        title: 'Item 5',
        checked: false
      }
    ]
  };

  handleToggleGrocery = groceryToUpdate => {
    this.setState(prevState => ({
      groceries: prevState.groceries.map(grocery => {
        if (groceryToUpdate === grocery) {
          return {
            ...grocery,
            checked: !grocery.checked
          };
        }
        return grocery;
      })
    }));
  };

  handleAddGrocery = grocery => {
    if (!grocery) {
      this.setState(() => ({ error: 'Enter valid value to add item' }));
    } else if (this.state.groceries.find(g => g.title === grocery)) {
      this.setState(() => ({ error: 'This grocery already exists' }));
    } else {
      this.setState(prevState => ({
        groceries: prevState.groceries.concat({
          title: grocery,
          checked: false
        })
      }));
    }
  };

  render() {
    return (
      <div>
        <Header />
        <SelectedGroceries
          groceries={this.state.groceries.filter(grocery => grocery.checked)}
        />
        <GroceryList />
        {/* <Groceries
          groceries={this.state.groceries}
          handleToggleGrocery={this.handleToggleGrocery}
        /> */}
        <AddGrocery handleAddGrocery={this.handleAddGrocery} />
        <ErrorMessage message={this.state.error} />
      </div>
    );
  }
}

const store = configureStore();

store.dispatch(addGrocery({ title: 'foo', checked: true }));
store.dispatch(addGrocery({ title: 'bar', checked: true }));
store.dispatch(addGrocery({ title: 'baz', checked: true }));

const state = store.getState();
const visibleGroceries = getGroceries(state.groceries);
console.log(visibleGroceries);

const jsx = (
  <Provider store={store}>
    <MyApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
