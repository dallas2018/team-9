import React, {Component} from 'react';

class LoginIn extends React.Component{

    render() {
        return (
            <div className="login-pg">
                <div className="container">
                    <div className="login-buttons">
                        <a>Facebook Login</a>
                        <a>Google Login</a>


                    </div>
                </div>

            </div>
        );
    }

}

export default LoginIn;