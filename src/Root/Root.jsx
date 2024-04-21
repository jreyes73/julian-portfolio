import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Root() {

    const time = new Date().toLocaleTimeString();
    const[timeNow, setTimeNow] = useState(time);

    
    function updateTime() {
        setTimeNow(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);


    return (
        <>
            <Header/>
            <main style={{margin: "1rem"}} >
                <Outlet/>
            </main>
            <Footer clock={timeNow} />
        </>
    )
}