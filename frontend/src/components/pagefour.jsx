import React, {Component} from 'react';

class Pagefour extends React.Component{
    render() {
        return (
            <div className="page4-pg">
                <div className="container">
                    <div className="info-buttons">
                        <button onClick={this.uploadHandler}>Upload</button><br/>
                        <a>Category: </a><br/>
                        <a>Size: </a><br/>
                        <a>Price:$ </a><br/>
                        <img src = "pictures/jacket.jpg"/>
                    </div>
                </div>

            </div>
        );
    }

}

export default Pagefour;
