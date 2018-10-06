import React, {Component} from 'react';

class BuySellPanel extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            option: "", // this is either buy or sell
            dataObject : [],
        }
    }

    componentDidMount(){
        // call the API to render the data information

    }

    render(){
        return(
          <div className="buy-sell">

              <div className="container">

                  <div className="c-header">
                      <h1>You action: {this.state.option}</h1>
                  </div>

                  <div className="main-body">

                  </div>
              </div>

          </div>
        );
    }


}


export default BuySellPanel