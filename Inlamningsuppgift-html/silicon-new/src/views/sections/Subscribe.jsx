import React, { useState } from 'react'
import Notification from "../../images/icons/notification.svg"

const Subscribe = () => {
    const [email, setEmail] = useState("")


    fetch("",{
        method: "post"

    })



  return (
<main>
    <div className="container">
        <div className="subscribe-container">
            <div className="content">
                <div><img src={Notification} alt="notification bell" /></div>
                <form>
                    <label htmlFor=""></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                    <div className="subscribe-button"><button type='submit'>Subscribe</button></div>
                    <a type id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Subscribe</a>
                </form>
            </div>
        </div>
    </div>
</main>  
)
}

export default Subscribe