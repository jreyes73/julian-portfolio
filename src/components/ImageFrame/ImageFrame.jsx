import React from "react";
import './ImageFrame.css';
import './LinkedIn.png';


export default function ImageFrame({skill, skillName}) {
    return (
        <>
        <div className="image-box">
            <img className="icon-style" src={skill} alt="test" />
            <p>{skillName}</p>
        </div>
        </>
    )
}