import React, { useState, useEffect } from 'react'

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
    <div className="container">
        <div className="contakt-content">

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

                <label htmlFor="date">Date</label>
                <input id='date' value={date} onChange={(e) => setDate(e.target.value)} type="date" />

                <label htmlFor="time">Time</label>
                <input id='time' value={time} onChange={(e) => setTime(e.target.value)} type="time" />

     





                <div className="subscribe-button"><button type='submit'>Make an appointment</button></div>
                <button type="submit" id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Make an appointment</button>
            </form>

            <div className="text-content">

                <h1>Contact Us</h1>

                <div className="icon-and-text">
                    <h4>email us</h4>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                </div>

                <div className="icon-and-text">
                    <h4>email us</h4>
                    <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                </div>

            </div>
        </div>
    </div>
</main> 
)
}

export default ContactUs