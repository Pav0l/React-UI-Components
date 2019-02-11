import React from 'react';
import './Button.css';

const ActionButton = ({ value }) => {
  return (
    <div className="action-button">
      <button>{value}</button>
    </div>
  );
}

export default ActionButton;