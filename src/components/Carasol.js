import React from 'react'
import img1 from '../assets/beach.jpg'
import img2 from '../assets/beach2.jpg'
import img3 from '../assets/seasky.jpg'
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Slide1, Slide2,Slide3} from './Section2.js'




class MyApp extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false}
    }

    pausePlay(){
        this.state.autoplay?this.setState({autoplay:false}):this.setState({autoplay:true})
        
    }
    
    render() {
      let slides = [
      <img  src="https://picsum.photos/800/300/?random" alt="1" />,
      <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
      <img  src="https://picsum.photos/800/302/?random" alt="3" />  , 
      <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
      <img src="https://picsum.photos/800/304/?random" alt="5" />];
      let btnStyle={width:"75px",height:"75px", position:"relative", top:"0px",backgroundColor:"rgb(1,1,1,0.7)",color:"white"}
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      let slides2=[<Slide1></Slide1>, <Slide2></Slide2>,<Slide3></Slide3>]
      return (
        <div>
        
        <div id="section2">
        <button style={btnStyle} onClick={(e)=>this.pausePlay()}>X</button>
        <Carousel statusFormatter={(current, total) => `${current} / ${total}`} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={this.state.autoplay}>
        {slides2}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  export default MyApp
