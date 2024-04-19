import React from "react";
import "./Home.css"

export default function Home() {

    let greeting;
    const date = new Date();
    const timeNow = date.getHours();

    if (timeNow > 16) {
        greeting = "evening"
    } else if (timeNow > 12) {
        greeting = "afternoon"
    } else {
        greeting = 'morning'
    }

    return (
        <>
        <div className="flex-container">
            <img className="portrait" src="sample-portrait.jpg" alt="sample portrait" />
            <h1 className="intro-greeting">Good<br/>{greeting}!<br/>I'm <span style={{fontWeight: 700}} >Julian</span>.</h1>
            <hr/>
            <p style={{marginTop: 0, textAlign: "start", width: "100%"}} >A Content Developer & Experienced Leader</p>
            <p className="intro-description">I'm thrilled to have you here. I'm Julian, a passionate adult educator and motivator dedicated to helping companies and their workers succeed. With a background in education, I bring the right tools.</p>
        </div>
        </>
    )
}