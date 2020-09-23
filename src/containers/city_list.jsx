import React, { Component } from "react";

import City from "./city.jsx";
import setCities from "../actions"

class CityList extends Component {

  // componentWillMount() {
  //   this.props.setCities();
  // } 
  
  render () {
    return(
      <div className="cities">
      {this.props.cities.map((city, index) => {
        return <City
                  city={city}
                  index={index}
                  key={city.name}
               />
      })}
    </div>
    );
  } 
};

export default CityList;