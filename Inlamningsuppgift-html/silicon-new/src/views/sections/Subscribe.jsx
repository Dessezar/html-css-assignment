import React, { useState } from 'react'
import Notification from "../../images/icons/notification.svg"

const Subscribe = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        // const inputEmail = e.target[0].value;
        // validateEmail(inputEmail);

        const apiURL = `https://kyhnet23-assignment.azurewebsites.net/api/subscribe?email=${e.target[0].value}`
        const res = await fetch(`${apiURL}`,{
            method: "post"
        
        })

        console.log(res)

        if(res.status === 200)
            console.log("allt gick bra")
        if(res.status === 400)
            console.log("något gick fel")

        // function validateEmail(email) {
        //     if (email.length === 0)
        //         console.log('du måste ange en e-postadress')
        //     else if ()
        //         console.log('du måste ange en giltigt e-postadress')
        // }
        // const emailValidator = (e) => {
        //     let sibling = document.getElementById(e.target.id).nextElementSibling
        //     const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        //     if (regEx.test(e.target.value)) {
        //         sibling.innerHTML = ""
        //         return true
        //     }
        
        //     sibling.innerHTML = e.target.dataset.valRequired
        //     return false
        // }
        
    }
    

    // fetch("https://kyhnet23-assignment.azurewebsites.net/api/subscribe",{
    //     method: "post",
    //     headers: {
    //         "content-type" : "apploication/json"
    //     },
    //     body: json
    // })
    // .then(res => {
    //     if (res.status === 200)
    //         console.log("you are subscribed")
    //     if (res.status === 400)
    //         console.log("something went wrong")
    // })

  return (
    <main>
        <div className="container">
            <div className="subscribe-container">
                <div className="content">
                    <div><img src={Notification} alt="notification bell" /></div>
                    <form onSubmit={handleSubmit} noValidate>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                        <div className="subscribe-button"><button type='submit'>Subscribe</button></div>
                        <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    </main>  
    )
}

export default Subscribe