import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Universities from './components/pages/Universities';
import PostalLookup from './components/pages/PostalLookup';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        {/*Navigation Display on Page*/}
        <Navbar />
          <Switch>
            {/*Anytime you go to '/' it opens the home compnent.
            It will serve as our front page*/}
            <Route path='/' exact component={Home} />
            <Route path='/universities' exact component={Universities} />
            <Route path='/postalLookup' exact component={PostalLookup} />
            <Route path='/sign-up' exact component={SignUp} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
