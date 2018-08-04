import React, { Component } from 'react';



class Weather extends React.Component {

  render() {
    return (
        <div>
            <p className="cityName">  {this.props.inputvalue} </p>
            <div className="weatherDataWrap">
              <p>  {this.props.date}  {this.props.day} </p>
              <p>  {this.props.high} </p>
              <p>  {this.props.low} </p>
              <p>  {this.props.text} </p>
            </div>
     </div>
    )
 }
}

export default Weather;

