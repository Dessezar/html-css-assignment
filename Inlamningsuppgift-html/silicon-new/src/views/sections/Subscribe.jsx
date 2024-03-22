import React, { useState } from 'react'
import Notification from "../../images/icons/notification.svg"

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
        <div className="container">
            <div className="subscribe-container">
                <div className="content">
                    <div><img src={Notification} alt="notification bell" /></div>
                    <form onSubmit={handleSubmit} noValidate>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                        <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </main>  
    )
}

export default Subscribe