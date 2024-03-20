import React, { useState } from 'react';
import purplePhone from "../../images/icons/purple-phone.svg"
import greenChat from "../../images/icons/green-chat-bubble.svg"
import purpleArrow from "../../images/icons/purple-arrow.svg"
import greenArrow from "../../images/icons/green-arrow.svg"
const FAQ = () => {
    const [isCardBodyVisible, setIsCardBodyVisible] = useState(Array(2).fill(false)); // Change the array length to match the number of cards

    const toggleCardBody = (index) => {
        const newState = Array(2).fill(false); // Change the array length to match the number of cards
        newState[index] = !isCardBodyVisible[index];
        setIsCardBodyVisible(newState);
    };

    return (
        <main>
            <div className="container">
                <div className="FAQ-section">
                    <div className="content-and-cards">
                        <div>
                            <h2>Any questions?Check out the FAQs</h2>
                        </div>
                        <div>
                            <p>Still have unanswered questions and need to get in touch?</p>
                        </div>
                        <div className="phone-card">
                            <img src={purplePhone} alt="" />
                            <p>Still have  questions?</p>
                            <div className="contact-purple">
                                <p>Contact us</p>
                                <img src={purpleArrow} alt="" />
                            </div>

                        </div>
                        <div className="chat-card">
                            <img src={greenChat} alt="" />
                            <p>Don't like phone calls?</p>
                            <div className="contact-green">
                                <p>Contact us</p>
                                <img src={greenArrow} alt="" />

                            </div>
                        </div>

                    </div>



                    <div className="accordion">
                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(0)}>Is any of my personal information stored in the App?</h6>
                                <button onClick={() => toggleCardBody(0)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[0] && (
                                <div className="card-body">
                                    Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(1)}>What formats can I download my transaction history in?</h6>
                                <button onClick={() => toggleCardBody(1)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[1] && (
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, nisl vel convallis blandit, erat felis eleifend odio, ac feugiat mauris arcu a nulla. Duis sit amet urna et odio volutpat viverra.
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(2)}>Can I schedule future transfers?</h6>
                                <button onClick={() => toggleCardBody(2)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[2] && (
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, nisl vel convallis blandit, erat felis eleifend odio, ac feugiat mauris arcu a nulla. Duis sit amet urna et odio volutpat viverra.
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(3)}>When can I use Banking App services?</h6>
                                <button onClick={() => toggleCardBody(3)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[3] && (
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, nisl vel convallis blandit, erat felis eleifend odio, ac feugiat mauris arcu a nulla. Duis sit amet urna et odio volutpat viverra.
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(4)}>Can I create my own password that is easy for me to remember?</h6>
                                <button onClick={() => toggleCardBody(4)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[4] && (
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, nisl vel convallis blandit, erat felis eleifend odio, ac feugiat mauris arcu a nulla. Duis sit amet urna et odio volutpat viverra.
                                </div>
                            )}
                        </div>

                        <div className="card">
                            <div className="card-title">
                                <h6 onClick={() => toggleCardBody(5)}>What happens if I forget or lose my password?</h6>
                                <button onClick={() => toggleCardBody(5)} id='accordion-button' className='fa-regular fa-chevron-down'></button>
                            </div>
                            {isCardBodyVisible[5] && (
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla, nisl vel convallis blandit, erat felis eleifend odio, ac feugiat mauris arcu a nulla. Duis sit amet urna et odio volutpat viverra.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FAQ;
