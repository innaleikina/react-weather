import React, { Component } from 'react';
import weather from 'yahoo-weather';
import Weather from './weatherApi.js';
import titleCase from 'title-case';
import unsplash from 'unsplash-api';
import './input.css';

var clientId = '5f7824d340097ca7286f70ec303af16a56bc8f2d6326807bb0e7551b3d07f7b0'; //this is required to verify your application's requests
unsplash.init(clientId);


class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          image: '',
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
             <div class="resultWrap">
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