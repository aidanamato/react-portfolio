import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Aside />
      <Main />
    </React.Fragment>
  );
}

export default App;
