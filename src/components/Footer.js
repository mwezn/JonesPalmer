import React from 'react'
import img from '../assets/Lfooter.svg'
import img2 from '../assets/FooterLogo.svg'
import './Footer.css'

function Footer() {
    return (
        
  <footer>
  <div class="leftLogo">
  <img src={img} class="leftL"></img>
  <p>2019 Jones and Palmer </p>
  <h1>HELLO</h1>
  </div>
  <div class="rightFoot">
  <div class="rightFootNav">
  <a>Accessibility</a><a class="rightp">|</a><a>Privacy Policy</a><a class="rightp">|</a><a>Site Map</a>
  </div>
  <img src={img2} class="rightLogo"></img>
  </div>
  </footer>

    )
}

export default Footer
