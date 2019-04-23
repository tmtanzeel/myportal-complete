import React, { Component } from 'react';
import './App.css';
import Tutorials from './components/Tutorials';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LinuxFaq from './components/LinuxFaq';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/tutorials" component={Tutorials}/>
          <Route path="/linuxfaq" component={LinuxFaq}/>
        </Router>
      </div>
    );
  }
}
export default App;
