import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <div className="navBar">
            <NavLink className="navLink" to="/">Home</NavLink>
            <NavLink className="navLink" to="about">About</NavLink>
            <NavLink className="navLink" to="projects">Projects</NavLink>
            <NavLink className="navLink" to='contact'>Contact</NavLink>
        </div>
    )
}