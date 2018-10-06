import React from 'react';
import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);

    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Choose a Charity </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#Water">Water</a></li>
         <li><b href="#CharityWater">CharityWater</b></li>
         <li><a href="#Hunger">Hunger</a></li>
         <li><b href="#HopeforHope">HopeforHope</b></li>
         <li><a href="#Education">Education</a></li>
         <li><b href="#UnitedWay">UnitedWay</b></li>
         <li><a href="#Housing">Housing</a></li>
         <li><b href="#Habitat for Humanity">HabitatforHumanity</b></li>
         <li><a href="#Medical">Medical</a></li>
         <li><b href="#American Heart Association">American Heart Association</b></li>
          </ul>
        ):
        (
          null
        )
        }

      </div>

    );
  }
}

export default Dropdown;
