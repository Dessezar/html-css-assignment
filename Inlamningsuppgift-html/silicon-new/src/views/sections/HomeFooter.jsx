import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import AppstoreImage from '../../images/appstore.svg'
import GooglePlayImage from '../../images/googleplay.svg'
import Logo from '../../images/silicon-logo-light_theme.svg'
import facebook from "../../images/socials/facebook.svg"
import twitter from "../../images/socials/twitter.svg"
import instagram from "../../images/socials/instagram.svg"
import youtube from "../../images/socials/youtube.svg"


const Footer = () => {
  return (
    <main>
      <section id="home-footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
            <img src={Logo} alt="silicon logotype" />
            </div>
            <div className="links">
              <NavLink className="nav-link" to="/#overview">Overview</NavLink>
              <NavLink className="nav-link" to="/#features">Features</NavLink>
              <NavLink className="nav-link" to="/news">News</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </div>
            <div className="store-links">
              <Link className="appstore" to="/downloads/appstore"><img src={AppstoreImage} alt="Download on Appstore" /></Link>
              <Link className="googleplay" to="/downloads/googleplay"><img src={GooglePlayImage} alt="Download on Google Play" /></Link>    
            </div>
            <div className="social-links">
            <Link className="facebook"><img src={facebook} alt="facebook" /></Link>
            <Link className="twitter"><img src={twitter} alt="facebook" /></Link>
            <Link className="instagram"><img src={instagram} alt="facebook" /></Link>
            <Link className="youtube"><img src={youtube} alt="facebook" /></Link>


            </div>
            <div className="reserve-text">
              <p>2024. All rights reserved. Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Footer