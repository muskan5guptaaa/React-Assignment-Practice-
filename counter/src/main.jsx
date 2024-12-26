// App.js
import React from 'react';
import Counter from './counter';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Counter App</h1>
      <Counter />
      <App/>
    </div>
  );
};

export default App;
