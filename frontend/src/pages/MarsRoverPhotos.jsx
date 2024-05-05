import React, { useEffect, useState } from "react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import NavBar from "../components/NavBar";
import MarsPhotos from "../components/marsPhotos";

export default function MarsRoverPhotos() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1s&api_key=EA6e24X5aQgJnj1PbnvZcASQJwpH5sQP01YA5ipT");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        <NavBar />
        <div style={{marginTop:"100px"}}>
            <MarsPhotos/>
        </div>
        </>
    );
}