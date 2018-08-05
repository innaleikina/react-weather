import React, { Component } from 'react';
import weather from 'yahoo-weather';
import Weather from './weatherApi.js';
import titleCase from 'title-case';
import unsplash from 'unsplash-api';
import './input.css';
//require('dotenv').config()

var API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;




//var clientId = api_key; //this is required to verify your application's requests
unsplash.init(API_KEY);


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          image: 'https://images.unsplash.com/photo-1481007553706-bde1ba8e91fd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=caec8d3a7e2fbd72ff14891daf9df3d1&auto=format&fit=crop&w=1500&q=80',
          date: ' ',
          day: ' ',
          high: ' ',
          low: ' ',
          text: ' ',
        };
        
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
       event.preventDefault();
       let currentComponent = this;

    //    console.log(this.state.value)
       weather(this.state.value, 'f').then(info => { 
           console.log(info);
           currentComponent.setState({
           date:info.item.forecast[0].date,
           day:info.item.forecast[0].day,
           high:"High temp is : " + info.item.forecast[0].high + " F",
           low:"Low temp is : " + info.item.forecast[0].low + " F",
           text:"Conditions : " + info.item.forecast[0].text,
         });
     }).catch(err => {
           console.log("there was an error");
     });
     
        
       unsplash.searchPhotos(this.state.value, null, 2, 20, function(error, photos, link) {
         let randNum =  Math.floor(Math.random() * Math.floor(20));
         currentComponent.setState({
            image:photos[randNum].urls.small,
         });
      
    });
    
    }
  
    render() {
      return (
       
           <form className="form" onSubmit={this.handleSubmit}>
             <label>
             City:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
             </label>
             <input id="submitBtn" type="submit" value="Submit" />
             <div className="resultWrap">
                <img id="image" src={this.state.image}/>
                 <Weather inputvalue={titleCase(this.state.value)}
                     date={this.state.date}
                     day={this.state.day}
                     high={this.state.high}
                     low={this.state.low}
                     text={this.state.text}/>
              </div>
        </form>

      );
    }
  }
  

  export default Input;
