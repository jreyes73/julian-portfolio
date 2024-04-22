import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <>
        <Navbar data-bs-theme="dark" className="navbar navbar-expand navbar-light bg-dark">
            <Container>
                <Link to="/" className="navbar-brand">Portfolio</Link>
                <Nav className="me-auto navbar-nav">
                    <NavLink to="/" data-rr-ui-event-key="/" className="nav-link active">Home</NavLink>
                    <NavLink to="projects" data-rr-ui-event-key="projects" className="nav-link">Projects</NavLink>
                    <NavLink to="skills" data-rr-ui-event-key="skills" className="nav-link">Skills</NavLink>
                    <NavLink to="contact" data-rr-ui-event-key="contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>

            {/* <div className="navBar">
                <NavLink className={({isActive}) => isActive ? "navLinkActive" : "navLink"} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navLinkActive' : 'navLink'} to="projects">Projects</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navLinkActive' : 'navLink'} to="skills">Skills</NavLink>
                <NavLink className={({isActive}) => isActive ? 'navLinkActive' : 'navLink'} to='contact'>Contact</NavLink>
            </div>
            <div className="headerBlank"></div>          */}
        </>

    )
}