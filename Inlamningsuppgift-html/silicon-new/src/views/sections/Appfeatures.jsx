import React from 'react'
import mobileappfeatures from '../../images/mobile-appfeatures.svg'
import feature_1 from "../../images/icons/feature_1.svg"
import feature_2 from "../../images/icons/feature_2.svg"
import feature_3 from "../../images/icons/feature_3.svg"
import feature_4 from "../../images/icons/feature_4.svg"
import feature_5 from "../../images/icons/feature_5.svg"
import feature_6 from "../../images/icons/feature_6.svg"

const Appfeatures = () => {
  return (
    <section id="app-features">
      <div className="container">
        <div className="mobile-appfeatures"><img src={mobileappfeatures} alt="iphone 12 pro" /></div>

        <div className="text-and-icons">

          <div className="title">
            <h1>App Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>

          <div className="features">

            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="feature">
              <img src={feature_1} alt="card icon" />
              <div className="feature-content">
                <h5>Easy Payment</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Appfeatures