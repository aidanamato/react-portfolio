import React, { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  const [mainContent, setMainContent] = useState('about');

  return (
    <React.Fragment>
      <Header />
      <Aside mainContent={mainContent} setMainContent={setMainContent} />
      <Main mainContent={mainContent} />
    </React.Fragment>
  );
}

export default App;
