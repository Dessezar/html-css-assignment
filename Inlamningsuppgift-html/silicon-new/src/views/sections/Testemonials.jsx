import React from 'react'
import review1 from "../../images/review1.svg"
import review2 from "../../images/review2.svg"
const Testemonials = () => {
  return (
    <main>
        <section id="testemonials">
            <div className="container">
                <div className="test-content">
                    <div className="title-buttons">
                        <div className="test-title">
                            <h1>Clients are Loving Our App</h1>
                        </div>
                        <div className="test-buttons">
                        <button id='left-test-button' className='fa-regular fa-chevron-left'></button>
                        <button id='right-test-button' className='fa-regular fa-chevron-right'></button>
                        </div>
                    </div>
                    <div className="test-cards">
                        <div className="review1">
                            <img src={review1} alt="" />
                        </div>
                        <div className="review2">
                            <img src={review2} alt="" />
                        </div>









                    </div>

                </div>
            </div>
        </section>
    </main>
  )
}

export default Testemonials