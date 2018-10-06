import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/login-in';
import sellBuyPanel from './components/sellBuyPanel';

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact name="home" path="/" component={Login}/>
                    <Route exact name="home" path="/sellBuyPanel" component={sellBuyPanel}/>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
