import React from 'react'
import img from '../assets/Lfooter.svg'
import img2 from '../assets/FooterLogo.svg'
import './Footer.css'

function Footer() {
    return (
        
  <footer id="contact">
  <div class="leftLogo">
  <img src={img} alt="lfooterlogo"></img>
  <p>2019 Jones and Palmer !</p>
  </div>
  <div class="rightFoot">
  <div class="rightFootNav">
  <a href="#access">Accessibility</a><a href="#none" class="rightp">|</a><a href="#privacy">Privacy Policy</a><a class="rightp" href="#none">|</a><a href="#sitemap">Site Map</a>
  </div>
  <img src={img2} class="rightLogo" alt="rfooterlogo"></img>
  </div>
  </footer>

    )
}

export default Footer
