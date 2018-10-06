import React, {Component} from 'react';
import {auth, provider} from "./firebase";
import { Redirect } from 'react-router';
import './App.css';


class Pagefive extends  Component{

	constructor(props){
		super(props);
		this.state = {
			status : "",
			data : [ {org_name : "Red Cross", location : "Dallas" , friend : "Jamie K."} ,
				 {org_name : "H4H", location : "New York" , friend : "Emily W."}],
		}
	}

	handler = (e) => {

		this.setState({status : e.target.value});

	}

	render(){
		return(
			<div>
				<select name="state[]" size="8" multiple>
					{this.state.data.map( (item)=>{
						return(
							<option value={item.org_name + '  | Location: ' + item.location + '  |  Your friend '+item.friend+ ' also donated to this charity'} onClick={ (e) => {this.handler(e)}} >{item.org_name}</option>

						)
						
					})}
					
				</select>

				<p>You have currently selected:</p>
				<p> {this.state.status}</p>

				<button className="btn btn-primary">Donate</button>
			</div>
		)
	}
}

export default Pagefive;
