import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Action from './components/Action';

class MyApp extends React.Component {
  state = {
    title: 'My Cool App',
    actions: ['action1', 'action2', 'action3'],
    date: ''
  };

  getDate = () => {
    this.setState(() => ({ date: new Date().toISOString() }));
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Action actions={this.state.actions} />
        <button onClick={this.getDate}>Get Date</button>
        <p>{this.state.date}</p>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
