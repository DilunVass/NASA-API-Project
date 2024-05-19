import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Asteroids from "../components/Asteroids";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AstroidsPage() {
    useEffect(() => {
        document.body.style.backgroundImage = `url('https://c4.wallpaperflare.com/wallpaper/642/300/13/fire-planet-spaceships-sci-fi-wallpaper-preview.jpg')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, []);
    
    return (
        <div>
            <NavBar />
            <div className="container" style={{ marginTop: "100px" }}>
                <Asteroids />
            </div>
        </div>
    );
}
