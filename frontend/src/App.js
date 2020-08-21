import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CarouselContainer from './components/organisms/carouselContainer';
import Header from './components/organisms/header';
import './sass/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="app-root">
            <h1>{this.props.text}</h1>
            <Header userName="Julio Graffin" />
            <CarouselContainer />
          </div>
        </>
      </Router>
    );
  }
}

export default connect((store) => ({ text: store.text }))(App);
