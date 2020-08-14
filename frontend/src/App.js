import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Carousel from './components/organisms/Carousel';
import Header from './components/organisms/Header';
import './sass/App.scss';

const App = () => {
  return (
    <Router>
      <>
        <div className="app-root">
          <Header userName="Julio Graffin" />
          <Carousel />
        </div>
      </>
    </Router>
  );
};

export default App;
