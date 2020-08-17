import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselAPI from './components/organisms/CarouselAPI';
import Header from './components/organisms/Header';
import './sass/App.scss';

const App = () => {
  return (
    <Router>
      <>
        <div className="app-root">
          <Header userName="Julio Graffin" />
          <CarouselAPI />
        </div>
      </>
    </Router>
  );
};

export default App;
