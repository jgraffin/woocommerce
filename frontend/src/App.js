import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselContainer from './components/organisms/carouselContainer';
import Header from './components/organisms/header';
import './sass/App.scss';

const App = () => {
  return (
    <Router>
      <>
        <div className="app-root">
          <Header userName="Julio Graffin" />
          <CarouselContainer />
        </div>
      </>
    </Router>
  );
};

export default App;
