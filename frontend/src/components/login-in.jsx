import React, {Component} from 'react';

class LoginIn extends React.Component{

    render() {
        return (
            <div className="login-pg">
                <div className="container">
                    <div className="login-buttons">
                        <button className="btn btn-primary">Facebook Login</button>
                        <br/>
                        <button>Google Login</button>


                    </div>
                </div>

            </div>
        );
    }

}

export default LoginIn;