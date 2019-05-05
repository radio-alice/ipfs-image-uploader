import React from 'react';
import './App.css';
import Gallery from './components/Gallery';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>IPFS Image Uploader!</p>
      </header>
      <Gallery />
    </div>
  );
}

export default App;