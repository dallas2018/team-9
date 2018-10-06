import React, {Component} from 'react';
import {auth, provider} from "./firebase";
import { Redirect } from 'react-router';

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
            <div>
                <div className="container">
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
                    {this.state.user ?
                        <div>
                            <div className='user-profile'>
                                <img src={this.state.user.photoURL}/>
                            </div>
                        </div> :
                        <div className='wrapper'>
                            <p>You must be logged in to sell or buy items for charity.</p>
                        </div>
                    }
            </div>
            <div className="login-pg">
                <div className="container">
                    <div className="login-buttons">
                        {/* using Bootstrap for button prettiness */}
                        <button className="btn btn-primary btn-block" onClick={ () => {this.login()}}>Facebook Login</button>
                        <br/>
                        <button className="btn btn-primary btn-block">Google Login</button>


                    </div>
                </div>

            </div>
                {this.state.user ? <page2 /> : null}
            </div>
            
        );
    }

}

export default LoginIn;