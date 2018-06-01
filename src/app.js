class MyApp extends React.Component {
  render() {
    const title = 'My App';
    const actions = ['action1', 'action2'];
    return (
      <div>
        <Header title={title} />
        <Action actions={actions} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Header</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
        <p>Actions</p>
        <ul>{this.props.actions.map(action => <li>{action}</li>)}</ul>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));
