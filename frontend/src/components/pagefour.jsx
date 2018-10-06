import React, {Component} from 'react';

class Pagefour extends React.Component{
constructor(props){
  super(props);
  this.state={
  selectedFile: ""
  }
}

fileSelectedHandler = event => {
this.setState({
selectedFile:event.target.files[0]})
}
uploadHandler = () => {
console.log(this.state.selectedFile)
}
    render() {
        return (
            <div className="page4-pg">
                <div className="container">
                    <div className="info-buttons">

                        <input type="file" onChange={this.fileSelectedHandler}/>
                        <button onClick={this.uploadHandler}>Upload All Images</button>
                        <a>Category: </a>
                        <a>Size: </a>
                        <a>Price:$ </a>
                        <img src = {this.state.selectedFile}/>
                    </div>
                </div>

            </div>
        );
    }

}

export default Pagefour;
