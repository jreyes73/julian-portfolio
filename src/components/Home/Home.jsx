import React from "react";
import "./Home.css"

export default function Home() {
    return (
        <>
        {/* <h1 className="title" >this is the home tab.</h1> */}
        <div className="flex-container">
            <img className="portrait" src="sample-portrait.jpg" alt="logo" />
            <p className="intro-description">"Welcome to my portfolio! I'm thrilled to have you here. I'm Julian, a passionate adult educator and motivator dedicated to helping companies and their workers succeed. With a background in education, I bring the right tools. Whether it's crafting compelling narratives, designing innovative solutions, or leveraging technology to make an impact, I'm driven by the desire to providing only the highest quality results. Explore my portfolio to discover how I turn ideas into reality and let's connect to collaborate on exciting projects!"</p>
        </div>
        </>
    )
}