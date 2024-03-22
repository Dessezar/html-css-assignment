import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import darkemail from "../../images/icons/bx-envelope.svg"

import Logo from '../../images/solid.svg'

const FooterContact = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()


        const apiURL = `https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${e.target[0].value}`
        const res = await fetch(`${apiURL}`,{
            method: "post"
        
        })

        console.log(res)

        if(res.status === 200)
            console.log("allt gick bra")
        if(res.status === 400)
            console.log("något gick fel")
        
    }
  return (
    <main>
        <section id="footerContact">
            <div className="container">
                <div className="info">
                    <img src={Logo} alt="logo" />
                    <p>Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. </p>
                    <div className="subscribe">
                        <p>Subscribe to our newsletter</p>
                        <div className="input">
                            <form onSubmit={handleSubmit} noValidate>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                                <i><img src={darkemail} alt="" /></i>
                                <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Subscribe</button>
                            </form>
                        </div>
                        <div className="reserve">
                            <p>2024. All rights reserved. Silicon Template</p>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/">Services</NavLink>
                    <NavLink className="nav-link" to="/">Case Studies</NavLink>
                    <NavLink className="nav-link" to="/">About Us</NavLink>
                    <NavLink className="nav-link" to="/">News & Insights</NavLink>
                    <div className="terms">

                        <NavLink className="nav-link" to="/">Private Policy</NavLink>
                        <NavLink className="nav-link" to="/">Terms & Conditions</NavLink>
                    </div>
                </div>
                <div className="socials">
                    <NavLink className="nav-link" to="/">Facebook</NavLink>
                    <NavLink className="nav-link" to="/">Linkedin</NavLink>
                    <NavLink className="nav-link" to="/">Twitter</NavLink>
                    <NavLink className="nav-link" to="/">Instagram</NavLink>
                </div>
                <div className="contact">
                <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>

                  <NavLink className="email" to="/">example@gmail.com</NavLink>
                </div>

            </div>
        </section>
    </main>
  )
}

export default FooterContact