import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import map from "../../images/mapimg.svg"
import pin from "../../images/mapicons/pin.svg"
import phone from "../../images/mapicons/bx-phone-call.svg"
import clock from "../../images/mapicons/bx-time-five.svg"
import facebook from "../../images/socials/facebook.svg"
import twitter from "../../images/socials/twitter.svg"
import instagram from "../../images/socials/instagram.svg"
import youtube from "../../images/socials/youtube.svg"


const MedicalCenter = () => {
  return (
    <main>
        <section id="medicalCenter">
            <div className="container">
                <div className="content">
                    <div className="map">
                        <img src={map} alt="map" />
                    </div>
                    <div className="adresses">
                        <h4>Medical Center 1</h4>
                        <div className="info">
                            <div className="adress">
                                <img src={pin} alt="pin" />
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>
                            <div className="phone-number">
                                <img src={phone} alt="phonecall" />
                                <p>(406) 555-0120</p>
                            </div>
                            <div className="open">
                                <img src={clock} alt="clock" />
                                <p><strong>Mon – Fri:</strong> 9:00 am – 22:00 am<br/><strong>Sat – Sun:</strong> 9:00 am – 22:00 am</p>
                            </div>
                        </div>
                        <h4>Medical Center 2</h4>
                        <div className="info">
                            <div className="adress">
                                <img src={pin} alt="pin" />
                                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                            </div>
                            <div className="phone-number">
                                <img src={phone} alt="phonecall" />
                                <p>(406) 544-0123</p>
                            </div>
                            <div className="open">
                                <img src={clock} alt="clock" />
                                <p><strong>Mon – Fri:</strong> 9:00 am – 22:00 am<br/><strong>Sat – Sun:</strong> 9:00 am – 22:00 am</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <Link className="facebook"><img src={facebook} alt="facebook" /></Link>
                            <Link className="twitter"><img src={twitter} alt="facebook" /></Link>
                            <Link className="instagram"><img src={instagram} alt="facebook" /></Link>
                            <Link className="youtube"><img src={youtube} alt="facebook" /></Link>
                        </div>


                    </div>



                </div>
            </div>
        </section>
    </main>
  )
}

export default MedicalCenter