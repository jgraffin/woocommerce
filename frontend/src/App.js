import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselContainer from './components/organisms/carouselContainer';
import Header from './components/organisms/header';
import Modal from './components/organisms/modal';
import './sass/App.scss';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Router>
      <>
        <div className="app-root">
          <button
            className="a-button a-button--modal-open"
            onClick={() => setModalOpen(true)}
          >
            Abrir Menu
          </button>
          <button
            className="a-button a-button--modal-close"
            onClick={() => setModalOpen(false)}
          >
            Fechar Menu
          </button>
          <Header userName="Julio Graffin" />
          <CarouselContainer />
          {modalOpen && <Modal />}
        </div>
      </>
    </Router>
  );
};

export default App;
