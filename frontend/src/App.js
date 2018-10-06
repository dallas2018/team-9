import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login-in';
import page2 from './components/page2';
class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact name="home" path="/" component={Login}/>
                    <Route exact name="page2" path="/page2" component={page2}/>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
