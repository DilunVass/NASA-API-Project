import React from "react";
import NavBar from "../components/NavBar";
import ProductCategories from "../components/ProductCategories";

export default function Discover() {
    return (
        <>
            <NavBar/>
            <div style={{marginTop:"100px", backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/135/692/935/astronaut-space-black-background-artwork-hd-wallpaper-preview.jpg')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "100vh" }}>
            
            <ProductCategories/>
        </div>
        </>
    );
}