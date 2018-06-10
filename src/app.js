import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Groceries from './components/Groceries';
import SelectedGroceries from './components/Selected-Groceries';
import AddGrocery from './components/Add-Grocery';
import ErrorMessage from './components/Error-Message';

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
        <Groceries
          groceries={this.state.groceries}
          handleToggleGrocery={this.handleToggleGrocery}
        />
        <AddGrocery handleAddGrocery={this.handleAddGrocery} />
        <ErrorMessage message={this.state.error} />
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
