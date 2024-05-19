import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Topic() {
    const [data, setData] = useState(null);
    const [showFullExplanation, setShowFullExplanation] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=EA6e24X5aQgJnj1PbnvZcASQJwpH5sQP01YA5ipT");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleReadMoreClick = () => {
        setShowFullExplanation(!showFullExplanation);
    };

    return (
        <div style={{ backgroundColor: "" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        {data ? (
                            <>
                                <h1 className="my-3 text-center">Astronomy Picture of the Day</h1>
                                <div className="card my-2">
                                    {data.media_type === "image" ? (
                                        <img src={data.url} className="card-img-top" alt="Astronomy" style={{ maxWidth: "100%", height: "auto" }} />
                                    ) : (
                                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%", background: "#000" }}>
                                            <iframe
                                                title="space-video"
                                                src={data.url}
                                                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        {showFullExplanation ? (
                                            <p className="card-text">{data.explanation}</p>
                                        ) : (
                                            <p className="card-text">{data.explanation.slice(0, 100)}...</p>
                                        )}
                                        <button onClick={handleReadMoreClick} className="btn btn-primary">
                                            {showFullExplanation ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
