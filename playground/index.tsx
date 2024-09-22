import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../dist';  // Import the component from the dist folder

const App = () => {
  return (
    <div>
      <h1>Component Library Demo</h1>
      <Button label="Click Me!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
