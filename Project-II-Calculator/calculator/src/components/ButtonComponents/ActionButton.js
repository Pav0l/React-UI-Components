import React from 'react';
import './Button.css';

const ActionButton = ({ value }) => {
  return (
    <button className="action-button">{value}</button>
  );
}

export default ActionButton;