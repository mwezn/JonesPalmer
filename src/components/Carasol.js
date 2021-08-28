import React from 'react'
import img1 from '../assets/beach.jpg'
import img2 from '../assets/beach2.jpg'
import img3 from '../assets/seasky.jpg'
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Slide1, Slide2,Slide3,Slide4} from './Section2.js'




class MyApp extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false, buttonVal:"play"}
    }
    
    pausePlay(){
        this.state.autoplay?this.setState({autoplay:false,buttonVal:"play"}):this.setState({autoplay:true,buttonVal:"X"})
        
    }
    
    render() {
     
      const btnStyle={width:"75px",height:"75px", position:"relative", top:"0px",backgroundColor:"rgb(1,1,1,0.7)",color:"white"}
      
      let slides2=[<Slide1></Slide1>, <Slide2></Slide2>,<Slide3></Slide3>]
      return (
        <div>
        
        <div id="section2">
        <button style={btnStyle} onClick={(e)=>this.pausePlay()}>{this.state.buttonVal}</button>
        <Carousel statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={this.state.autoplay}>
        {slides2}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  class MyApp2 extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false, buttonVal:"play"}
    }
    
    pausePlay(){
        this.state.autoplay?this.setState({autoplay:false,buttonVal:"play"}):this.setState({autoplay:true,buttonVal:"X"})
        
    }
    
    render() {
     
      const btnStyle={width:"75px",height:"75px", position:"relative", top:"0px",backgroundColor:"rgb(1,1,1,0.7)",color:"white"}
      let slides = [
        <Slide4></Slide4>,
        <img  src="https://picsum.photos/800/300/?random" alt="1" />,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img src="https://picsum.photos/800/304/?random" alt="5" />];
      
      
      return (
        <div>
        
        <div id="section3">
        <Carousel width="40%" statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={this.state.autoplay}>
        {slides}
        </Carousel>
        </div>
        </div>
      );
    }
  }



  export {MyApp, MyApp2}
