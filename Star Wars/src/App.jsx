import './App.css'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;

