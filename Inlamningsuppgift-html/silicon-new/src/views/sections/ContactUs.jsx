import React, { useState, useEffect } from 'react'
import emailIcon from "../../images/icons/email.svg"
import careers from "../../images/icons/careers.svg"
import leavemsg from "../../images/leaveMsg.svg"
import sendAppl from "../../images/sendAppl.svg"

const ContactUs = () => {
    const [fullName, setfullName] = useState("")
    const [email, setEmail] = useState("")
    const [specialistArray, setSpecialistArray] = useState([])
    const [specialist, setSpecialist] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault()

    const form = {
        fullName,
        email,
        specialist,
        date,
        time
    }

    const apiURL = `https://kyhnet23-assignment.azurewebsites.net/api/book-appointment`
    const res = await fetch(`${apiURL}`,{
        method: "post",
        headers: {"content-type" : "application/json"},
        body:JSON.stringify(form)
    
    })
    

    console.log(res)

    if(res.status === 200)
        console.log("allt gick bra")
    if(res.status === 400)
        console.log("något gick fel")
}

const getData = async () => {
    const apiSpec = `https://kyhnet23-assignment.azurewebsites.net/api/specialists`
    const resSpec = await fetch(`${apiSpec}`)

    const data = await resSpec.json()
    const specData = data;

    setSpecialistArray(specData)
    
    return specData;


}
useEffect(() => {
    getData();
}, []);

  return (
<main>
    <section id="contact-us">
        <div className="container">
            <div className="contact-content">
                <div className="text-content">

                    <h1>Contact Us</h1>

                    <div className="icon-and-text">
                        <div className="icon"><img src={emailIcon} alt="" /></div>
                        <div className="text">
                            <h4>Email us</h4>
                            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                            <img src={leavemsg} alt="" />
                        </div>
                    </div>

                    <div className="icon-and-text">
                        <div className="icon"><img src={careers} alt="" /></div>
                        <div className="text">
                            <h4>Careers</h4>
                            <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                            <img src={sendAppl} alt="" />
                        </div>
                    </div>

                </div>

                <div className="contact-form">
                    <h2>Get Online Consultation</h2>


                    <form onSubmit={handleSubmit} noValidate>
                        <label htmlFor="name">Full name</label>
                        <input id='name' value={fullName} onChange={(e) => setfullName(e.target.value)} type="text" />

                        <label htmlFor="email">Email address</label>
                        <input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type="email" />

                        <label htmlFor="specialist">Specialist</label>
                        <select name="" id="specialist" onChange={(e) => setSpecialist(e.target.value)}>
                        {specialistArray.map((specialist) => (
                            <option value="specialist" key={specialist.id}>{specialist.firstName}</option>
                            ))}
                        </select>
                        <div className="date-time">

                            <label htmlFor="date">Date</label>
                            <label id='time' htmlFor="time">Time</label>
                            <input id='date' value={date} onChange={(e) => setDate(e.target.value)} type="date" />

                            <input id='time' value={time} onChange={(e) => setTime(e.target.value)} type="time" />
                        </div>


                        <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Make an appointment</button>
                    </form>
                </div>



            </div>
        </div>
    </section>
</main> 
)
}

export default ContactUs