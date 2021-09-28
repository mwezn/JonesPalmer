//This is my customised version of the React-responsive-carousel
import React from 'react'
import img1 from '../assets/beach.jpg'
import img2 from '../assets/beach2.jpg'
import img3 from '../assets/seasky.jpg'
import arrow from '../assets/rightarrow.svg'
//import "react-responsive-carousel/lib/styles/custom.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Slide4,Slide5} from './Section2.js'
import "./carousel.css"

class MyApp2 extends React.Component {
    constructor(props) {
      super(props)
      this.state= {autoplay :false, buttonVal:"play"}
    }
    
    pausePlay(){
        this.state.autoplay?this.setState({autoplay:false,buttonVal:"play"}):this.setState({autoplay:true,buttonVal:"X"})
        
    }
    
    render() {
     

      let slides = [
        <Slide4></Slide4>,
        <Slide5></Slide5>,
        <img src={img1} alt="5" />,
        <img src={img2} alt="5" />,
        <img src={img3} alt="5" />,
      ];

      let btnStyle={
        position:"absolute",
        bottom:0,
        right:110,
        zIndex:200
      }
      let cssWidth=window.innerWidth;
      console.log(window.innerWidth)
      return (
        <div>
        
        <div>
        <Carousel renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button style={btnStyle} onClick={clickHandler}>
                  <img className="l" alt="larrow"
                          src={arrow} />
                  </button>
                    
                    )
            } renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <button style={{position:"absolute", bottom:0,right:0}} onClick={clickHandler}>
                <img className="r" alt="rarrow"
                    src={arrow} />
            </button>
                  
              )
          }
            
          showIndicators={true} width={cssWidth<=600?"300px":"600px"} showStatus={false} showThumbs={false} infiniteLoop={true} interval={2000} autoPlay={this.state.autoplay}>
        {slides}
        </Carousel>
        </div>
        </div>
      );
    }
  }

  export default MyApp2

