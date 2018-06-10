import React from 'react';

const ErrorMessage = props => (
  <div>{props.message && <p>{props.message}</p>}</div>
);

export default ErrorMessage;
