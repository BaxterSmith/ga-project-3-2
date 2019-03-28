import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage.js';
import SingleCard from './components/SingleCard.js';
import NewForm from './components/NewForm.js';
import EditForm from './components/EditForm.js';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/new" component={NewForm}/>
          <Route path="/:cardId/edit" component={EditForm}/>
          <Route path="/:cardId" component={SingleCard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
