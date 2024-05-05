import React from "react";
import NavBar from "../components/NavBar";
import Topic from "../components/Topic";


export default function PicOfDay() {
    return (
        <div>
            
            <NavBar/>
            <div style={{marginTop:"100px", marginBottom:"30px"}}>
                <Topic/>
            </div>
            
            
            
            
           
        </div>
    );
}