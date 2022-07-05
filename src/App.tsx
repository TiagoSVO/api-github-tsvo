import React from 'react';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
      </header>
      <body>
        <h2>Um título interessante.</h2>
        <p>Aqui vai um paragrafo interessante.</p>
        <HomePage />
      </body>
    </div>
  );
}

export default App;
