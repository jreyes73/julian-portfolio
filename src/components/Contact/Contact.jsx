import React from "react";
import './Contact.css'
import { NavLink } from "react-router-dom";

export default function Contact() {
    return (
        <>
        <h1 className="contact-greeting" ><span style={{fontWeight: 100}} >Let's</span> Connect!</h1>
        <div className="contact-container">
            <p>010-3308-1505</p>
            <p>julianreyes4@gmail.com</p>
            <p>Location: Seoul, South Korea</p>
            <div className="sns-container">
                <NavLink to="https://www.linkedin.com/" target="_blank" ><img src="LinkedIn.png" alt="sns1" ></img></NavLink>
                <NavLink to="https://www.instagram.com/" target="_blank" ><img src="Instagram.webp" alt="sns2" ></img></NavLink>
            </div>
        </div>
        </>
    )
}