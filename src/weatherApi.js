import React, { Component } from 'react';



class Weather extends React.Component {

  render() {
    return (
        <div>
            <p> {this.props.inputvalue} </p>
            <p>  {this.props.date} </p>
            <p>  {this.props.day} </p>
            <p>  {this.props.high} </p>
            <p>  {this.props.low} </p>
            <p>  {this.props.text} </p>
     </div>
    )
 }
}

export default Weather;

