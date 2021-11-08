import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className="heading">
                <h1>about us</h1>
                <p><Link to="/">home >> </Link> contact</p>
            </div>
            <div className="contact">
                <div className="container">
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fa fa-phone"></i>
                            <h3>our number</h3>
                            <p>+123-456-789</p>
                            <p>+123-456-789</p>
                        </div>
                        <div className="icons">
                            <i className="fa fa-envelope"></i>
                            <h3>our email</h3>
                            <p>cuongc6302@gmail.com</p>
                            <p>cuongphanpqcp@gmail.com</p>
                        </div>
                        <div className="icons">
                            <i class="fa fa-map-marker"></i>
                            <h3>our address</h3>
                            <p>mumbai, india - 400104</p>                          
                        </div>
                    </div>

                    <div className="row">
                        <form action="">
                            <h3>get in touch</h3>
                            <div className="inputBox">
                                <input type="text" placeholder="enter your name" className="box" />
                                <input type="email" placeholder="enter your email" className="box" />
                            </div>
                            <div className="inputBox">
                                <input type="number" placeholder="enter your number" className="box" />
                                <input type="text" placeholder="enter your subject" className="box" />
                            </div>
                            <textarea placeholder="your message" cols="30" rows="10"></textarea>
                            <input type="submit" value="send message" className="btn"/>
                        </form>

                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31367.36295453734!2d106.64221028829962!3d10.66328893811626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317531a7212174ef%3A0x81a55c05d508b46e!2zxJBhIFBoxrDhu5tjLCBCw6xuaCBDaMOhbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1636364336367!5m2!1svi!2s" style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
