import React, {Component} from 'react';
import {auth, provider} from "./firebase";
import { Redirect } from 'react-router';
import './App.css';


class Pagefive extends  Component{

	constructor(props){
		super(props);
		this.state = {
			status : "",
			pho_src : require("./green.png"),
			data : [ {org_name : "Red Cross", location : "Dallas" , friend : "Jamie K."} ,
				 {org_name : "Habitat For Humanity", location : "New York" , friend : "Emily W."},
				 {org_name : "Charity Water", location : "New York" , friend : "Harsh W."},
				 {org_name : "Childrens' Hospital Denver", location : "Denver" , friend : "Jim B."},
				 {org_name : "United Way Dallas", location : "Dallas" , friend : "John S."},
				 {org_name : "Khan Academy", location : "New York" , friend : "Emily W."},
				 
				 {org_name : "Bill and Melinda Gates Foundation", location : "Seattle" , friend : "Nobody"},
				 {org_name : "American Humane", location : "Seattle" , friend : "Bill W."},

				 {org_name : "Child Find of America", location : "USA" , friend : "Timmy T."},





				 {org_name : "Innocence Project", location : "New York" , friend : "Harsh W."},
				 {org_name : "African Wildlife Foundation", location : "Denver" , friend : "Jim B."},
				 {org_name : "National Park Trust", location : "Dallas" , friend : "John S."},
				 {org_name : "Yosemite Conservancy", location : "New York" , friend : "Emily W."},
				 {org_name : "National Kidney Foundation", location : "Seattle" , friend : "Nobody"},
				 {org_name : "Hispanic Federation", location : "Seattle" , friend : "Bill W."},
				 {org_name : "Hunger Project", location : "USA" , friend : "Timmy T."},


				 ],
		}
	}

	handler = (e) => {

		this.setState({status : e.target.value});

	}

	render(){
		return(
			<div>
			<header>
			      <div className="wrapper">
                            <h1>Team 9</h1>
                   </div>
            </header>

            <div className="wrap-stuff">
				<select name="state[]" size="8" multiple>
					{this.state.data.map( (item)=>{
						return(
							<option value={item.org_name + '  | Location: ' + item.location + '  |  Your friend '+item.friend+ ' also donated to this charity'} onClick={ (e) => {this.handler(e)}} >{item.org_name}</option>

						)
						
					})}
					
				</select>

				<p>You have currently selected:</p>
				<p> {this.state.status}</p>


				<div className="sameline">
					<img className="statusbar"src={this.state.pho_src}/>

					<button onClick={() => {this.clickHandler();}}className="btn btn-primary ads">Donate</button>

				</div>

			</div>

			</div>
		)
	}
}

export default Pagefive;
