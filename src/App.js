import React from 'react';
import Navbar from './components/Navbar'
import Logo from './components/Logo'

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
          <Logo />
          <Navbar />
      </div>
    </div>
  );
}

export default App;
