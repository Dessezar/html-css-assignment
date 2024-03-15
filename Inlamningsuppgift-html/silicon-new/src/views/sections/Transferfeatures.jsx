import React from 'react'
import PurpleCheck from "../../images/icons/bx-check-circle.svg"
import TransferPhone from "../../images/manage-payments.svg"
import PhoneContacts from "../../images/phone-with-contacts.svg"
import feature_1 from "../../images/icons/feature_1.svg"
import feature_5 from "../../images/icons/feature_5.svg"

const Transferfeatures = () => {
  return (
    <section id="transferfeatures">

      <div className="container">

        <div className="grid">

          <div className="text-and-button">

            <h1> Make your money transfer simple and clear</h1>

            <div className="check-img-and-text">
              <img src={PurpleCheck} alt="check mark" />
              <p>Banking transactions are free for you</p>

              <img src={PurpleCheck} alt="check mark" />
              <p>No monthly cash commission</p>

              <img src={PurpleCheck} alt="check mark" />
              <p>Manage payments and transactions online</p>
            </div>

            <a id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Learn more</a>
          </div>
          <div className="transferphone"><img src={TransferPhone} alt="phone" /></div>  

          <div className="phone-contacts"><img src={PhoneContacts} alt="phone with contacts" /></div>
          <div className="text-and-button">
            <h1>Receive payment from international bank details</h1>
            <div className="text-and-icons-transfers">
              <img src={feature_1} alt="card icon" />
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              <img src={feature_5} alt="wallet icon" />
              <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              <a id="btn-account" className="btn btn-theme" href="signin.html"><i className="fa-regular"></i>Learn more</a>

            </div>




          </div>

        </div>

      </div>

    </section>
  )
}

export default Transferfeatures