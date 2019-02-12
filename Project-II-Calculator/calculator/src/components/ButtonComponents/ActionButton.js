import React from 'react';
import './Button.css';

const ActionButton = ({ value, clicker }) => {
  return (
    <button className="action-button" onClick={clicker} data-value={value}>{value}</button>
  );
}

export default ActionButton;