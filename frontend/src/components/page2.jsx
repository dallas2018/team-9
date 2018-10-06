import React, {Component} from 'react';

class Page2 extends React.Component{

    handleClick(event){

    }

    render() {
        return (
            <div className="page2">
                <div className="container">



                    <div className="buy-sell">
                    <button className="btn buy" onClick={() => this.handleClick()}>Buy</button>
                    <button className="btn sell">Sell</button>
                    </div>


                </div>

            </div>
        );
    }

}

export default Page2;
