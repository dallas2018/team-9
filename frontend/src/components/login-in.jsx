import React, {Component} from 'react';
import {auth, provider} from "./firebase";
import { Redirect } from 'react-router';
import './App.css';

class LoginIn extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username: '',
            user: null, // <-- add this line
            redirect: false,
            result: {}
        }

    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                this.handleOnClick();
            }
        });
    }


    logout = () =>{
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const val = result;
                this.setState({
                    result: val
                });

                this.handleOnClick();
            });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to="/page2" />;
        }

        return (
            <div className='app'>

                    <header>
                        <div className="wrapper">
                            <h1>Team 9</h1>
                            {this.state.user ?
                                <button onClick={() => {this.logout()} }>Logout</button>
                                :
                                null
                            }
                        </div>
                    </header>

            <div className="login-pg">
                <div className="container-a">
                    <div className="login-buttons-s">
                        {/* using Bootstrap for button prettiness */}
                        <button className="btn btn-primary" onClick={ () => {this.login()}}>Google Login</button>

                        <button className="btn btn-primary ">Facebook Login</button>
                        {this.state.user ?
                            <div>
                                <div className='user-profile'>
                                    <img src={this.state.user.photoURL}/>
                                </div>
                            </div> :
                            <div >
                                <br/>
                                <br/>
                                <p className='wrapper-log'>You must be logged in to donate or buy items for charity.</p>
                            </div>
                        }

                    </div>
                </div>

            </div>
                {this.state.user ? <page2 /> : null}
            </div>
            
        );
    }

}

export default LoginIn;