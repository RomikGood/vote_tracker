import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import VoteTracker from './components/vote_tracker/vote_tracker.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Header></Header>
       <VoteTracker></VoteTracker>
       <Footer></Footer>             
     </React.Fragment>
    );
  }
}


