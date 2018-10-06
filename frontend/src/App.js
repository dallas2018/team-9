import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login-in';

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact name="home" path="/" component={Login}/>

                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
