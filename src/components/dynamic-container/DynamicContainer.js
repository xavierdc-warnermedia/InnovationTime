import React from 'react';
import './DynamicContainer.css';

const DynamicContainer = () => {
  const nothing = () => {
    alert('nothing happened');
  }

  return (
    <div className="container">
      <h3>DynamicContainer</h3>
      <button className="button" onClick={nothing}>This button doesn't do anything</button>
    </div>
  )
}

export default DynamicContainer;
