import React, {Component} from 'react';

class LoginIn extends React.Component{

    render() {
        return (
            <div>
                <div className="container">
                <div classname="project-header">
                CAUSE STUFF
                </div>
            </div>
            <div className="login-pg">
                <div className="container">
                    <div className="login-buttons">
                        {/* using Bootstrap for button prettiness */}
                        <button className="btn btn-primary btn-block">Facebook Login</button>
                        <br/>
                        <button className="btn btn-primary btn-block">Google Login</button>


                    </div>
                </div>

            </div>
            </div>
            
        );
    }

}

export default LoginIn;