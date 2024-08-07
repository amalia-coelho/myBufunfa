import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo à Minha Página Simples em React!</h1>
        <p>
          Este é um exemplo básico de uma página criada com React.
        </p>
        <button onClick={() => alert('Você clicou no botão!')}>Clique aqui</button>
      </header>
    </div>
  );
}

export default App;