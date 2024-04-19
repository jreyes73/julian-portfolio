import React from "react";
import './Contact.css'

export default function Contact() {
    return (
        <>
        <h1 className="contact-greeting" ><span style={{fontWeight: 100}} >Let's</span> Connect!</h1>
        <div className="contact-container">
            <p>Number: 010-3308-1505</p>
            <p>Email: julianreyes4@gmail.com</p>
            <p>Location: Seoul, South Korea</p>
            <div className="sns-container">
                <img src="LinkedIn.png" alt="sns1" ></img>
                <div className="instagram-logo" ></div>
            </div>
        </div>
        </>
    )
}