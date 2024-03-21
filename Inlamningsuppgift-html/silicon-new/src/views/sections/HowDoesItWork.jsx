import React from 'react'
import howphoneleft from "../../images/how-phone-left.svg"
import howphonemiddle from "../../images/how-phone-mid.svg"
import howphoneright from "../../images/how-phone-right.svg"



const HowDoesItWork = () => {
  return (
   <main>
    <section id="HowDoesItWork">

        <div className="container">
            <div className="how-content">
                <div className="how-title">
                    <h1>How Does It Work?</h1>
                </div>
                <div className="img-buttons">
                <button id='left-slide-button' className='fa-regular fa-chevron-left'></button>
                <img src={howphoneleft} alt="" />
                <img src={howphonemiddle} alt="" />
                <img src={howphoneright} alt="" />
                <button id='right-slide-button' className='fa-regular fa-chevron-right'></button>
                </div>
                <div className="how-bottom-text">
                    <h2>Step 2. Latest transaction history</h2>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique</p>
                    <p>quisque hac in consectetur condimentum. </p>
                </div>
        



            </div>
        </div>
    </section>
   </main>
  )
}

export default HowDoesItWork