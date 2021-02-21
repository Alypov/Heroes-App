import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import EditHero from './components/EditHero/EditHero';
import Form from './components/Form/Form';

import Home from './components/Home/Home';


const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create_new_hero" component={Form} />
          <Route path="/edit/:id" component={EditHero} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
