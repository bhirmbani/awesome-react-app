import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import PhotoCard from './components/PhotoList'
import FavoritePictures from './components/FavoritePictures'
import AddPhoto from './components/AddPhoto';
import ByPhotographer from './components/PhotoListPhotographer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path={`/my-favorite`} component={FavoritePictures} />
          <Route path={'/add-photo'} component={AddPhoto} />
          <Route path={'/search'} component={ByPhotographer} />
          <Route exact path='/' component={PhotoCard} />
        </div>
      </Router>

      
    );
  }
}

export default App;
