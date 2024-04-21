import React from "react";
import { Link } from "react-router-dom";


export default function Footer(props) {

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/' className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to="projects" className="nav-link px-2 text-body-secondary">Projects</Link></li>
                    <li className="nav-item"><Link to="skills" className="nav-link px-2 text-body-secondary">Skills</Link></li>
                    <li className="nav-item"><Link to="contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
                </ul>
                <p className="text-center text-body-secondary">{props.clock}</p>
            </footer>
        </div>
    )
}