import React, { useState } from 'react'
import Notification from "../../images/icons/notification.svg"
import darkemail from "../../images/icons/light-envelope.svg"


const Subscribe = () => {
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
        <section id="subscribe">
            <div className="container">
                <div className="subscribe-container">
                    <div className="content">
                        <div><img src={Notification} alt="notification bell" /></div>
                        <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
                           <div className="input">

                                <form onSubmit={handleSubmit} noValidate>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                                    <i><img src={darkemail} alt="" /></i>

                                    <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Subscribe</button>
                                </form>
                           </div>
                    </div>
                </div>
            </div>
        </section>
    </main>  
    )
}

export default Subscribe