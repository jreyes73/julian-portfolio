import React from "react";
import './ReadMoreButton.css'

export default function ReadMoreButton({buttonText="Read More"}) {
    return (
        <button className="read-more-button">{buttonText}</button>
    )
} 