import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login-in';
import Pagefour from './components/pagefour';

class App extends Component {
  render() {
    return (
        <Router>
            <div>


                <Switch>

                    <Route exact name="home" path="/" component={Login}/>
                    <Route name="pagefour" path="/pg4" component={Pagefour}/>
                </Switch>
              </div>
              </Router>
    );
  }
}

export default App;
