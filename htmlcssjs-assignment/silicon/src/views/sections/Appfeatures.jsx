import React from 'react'
import mobileappfeatures from '../../images/mobile-appfeatures.svg'
import feature_1 from "../../images/icons/feature_1"

const Appfeatures = () => {
  return (
    <section id="app-features">
        <div className="container">
            <div className="mobile-appfeatures"><img src="{mobileappfeatures}" alt="iphone 12 pro" /></div>
            <div className="features"><img src="{feature_1}" alt="" />easy payment</div>

        </div>
    </section>
  )
}

export default Appfeatures