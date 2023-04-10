import React from 'react';
import { Footer } from './components/sharedComponents/Footer';
import Header from './components/sharedComponents/Header';
import Router from './Router';
import './resources/styles/css/main.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
