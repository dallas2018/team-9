import React, {Component} from 'react';
import {auth, provider} from "./firebase";
import { Redirect } from 'react-router';
import './App.css';

class Page2 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            redirect: false,
            user: null,

        }
        this.login = this.login.bind(this); // <-- add this line
        this.logout = this.logout.bind(this); // <-- add this line
    }

    handleBuyClick = () => {
        this.handleOnClick("Buy");
    }

    handleSellClick = () => {
        this.handleOnClick("Donate");
    }

    logout = () =>{
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }
    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            }
        });
    }

    handleOnClick = (action) => {
        // some action...
        // then redirect
        this.setState({redirect: action});
    }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const val = result;
                this.setState({
                    result: val
                });
                console.log(result);
            });
    }


    render() {
        if(this.state.redirect){
            return ( <Redirect push to={{ pathname : "/sellBuyPanel",
                                        state : {status : this.state.redirect}}} />);
            //to={{
            //                 pathname: '/user/profile',
            //                 state: { referrer: this.state.profile }
            //             }}

        }


        return (
            <div className="page2">



                    <header>
                        <div className="wrapper">
                            <h1>Team 9</h1>

                            {this.state.user ?
                                <button onClick={this.logout}>Logout</button>
                                :
                                <button onClick={this.login}>Log In</button>
                            }
                        </div>
                    </header>

                <div className="login-buttons">
                    {this.state.user ?
                        <div>

                            <button className="btn btn-primary " onClick={ () => {this.handleBuyClick();}}>Buy</button>
                            <button className="btn btn-primary " onClick={ () => {this.handleSellClick();}}>Donate</button>
                            <div className='user-profile'>
                                <img src={this.state.user.photoURL}/>
                            </div>
                        </div>

                        :
                        <div className='wrapper-log'>
                            <br/>
                            <p>You must be logged in to donate or buy items for charity.</p>
                        </div>
                    }

                </div>

            </div>
        );
    }

}

export default Page2;
