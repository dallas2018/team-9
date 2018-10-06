import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './components/App.css';
import Login from './components/login-in';
import page2 from './components/page2';
import sellBuyPanel from './components/sellBuyPanel';

class App extends Component {
  render() {
    return (
        <Router>
            <div>

                <Switch>

                    <Route exact name="home" path="/" component={Login}/>
                    <Route exact name="page2" path="/page2" component={page2}/>
                    <Route exact name="sellBuyPanel" path="/sellBuyPanel" component={sellBuyPanel}/>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default App;
