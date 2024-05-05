import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TestFetch() {
 
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nasa.gov/insight_weather/?api_key=EA6e24X5aQgJnj1PbnvZcASQJwpH5sQP01YA5ipT&feedtype=json&ver=1.0");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            <h1>Response from API:</h1>
            {data ? (
                <>
                <pre>{JSON.stringify(data, null, 2)}</pre>

                {/* <h1>Response from API:</h1>
                <p>Image URL: {data.url}</p>
                <img src={data.img_src} alt="NASA" /> */}
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
