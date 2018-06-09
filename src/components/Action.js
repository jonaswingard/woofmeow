import React from 'react';

export default class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
        <p>Actions</p>
        <ul>
          {this.props.actions.map((action, index) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>
    );
  }
}
