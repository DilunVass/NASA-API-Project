import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import headerImg from "../assets/img/banner-bg2.png";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
import { Card, Row } from "antd";


export default function Asteroids() {
    const [startDate, setStartDate] = useState("2024-05-01");
    const [endDate, setEndDate] = useState("2024-05-02");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, [startDate, endDate]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=EA6e24X5aQgJnj1PbnvZcASQJwpH5sQP01YA5ipT`);
            setData(response.data);
            setError("");
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Error fetching data. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const diffInDays = Math.abs(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
        if (diffInDays <= 7) {
            fetchData();
        } else {
            setError("Date gap must be less than or equal to 7 days.");
        }
    };

    return (
        <>
            <div>
                <h1 className="my-3 text-center">Asteroids</h1>
                <form onSubmit={handleSubmit} className="my-3" style={{marginLeft : "500px", alignItems:"center"}}>
                    <div className="form-group row">
                        <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date:</label>
                        <div className="col-sm-4">
                            <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                    </div>
                    <br/>
                    <div className="form-group row">
                        <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date:</label>
                        <div className="col-sm-4">
                            <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary" style={{marginLeft:"230px"}}>Submit</button>
                    {error && <p className="text-danger mt-2">{error}</p>}
                </form>
                {data ? (
                    <>

                        <p style={{textAlign: "center", fontSize: "1.5rem", marginTop: "20px"}}>Near Earth Objects</p>
                        <p style={{textAlign: "center", fontSize: "1.5rem", marginTop: "20px"}}>{data.element_count}</p>
                      
                        {/* <Swiper
                            breakpoints={{
                            340: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            }}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="max-w-[90%] lg:max-w-[80%]"
                        >

                            {Object.entries(data.near_earth_objects).map(([date, asteroids]) => (
                                asteroids.map(asteroid => (
                                    <SwiperSlide key={asteroid.id} style={{marginLeft:"30px"}}>
                                        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                                    <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${headerImg})` }}
                                    />
                                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                                    <div className="relative flex flex-col gap-3">
                                    <RxCrop className="text-blue-600 group-hover:text-blue-400 w-[35px] h-[32px]"/>
                                    <h1 className="text-xl lg:text-2xl">{asteroid.name}</h1>
                                    <p className="lg:text-[18px]">Date: {date}</p>
                                    <p className="lg:text-[18px]">Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/hr</p>
                                    <p className="lg:text-[18px]">Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} km</p>
                                    </div>
                                    <RxArrowTopRight
                                    className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100"
                                    />
                                </div>
                                    </SwiperSlide>
                                ))
                            ))}
                           
                        </Swiper> */}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <Row justify="center" gutter={[0, 16]}>
                {data ? (
                    Object.entries(data.near_earth_objects).map(([date, asteroids]) => (
                    asteroids.map(asteroid => (
                        <Col key={asteroid.id} xs={24} sm={12} md={6} lg={10} xl={7}>
                        <Card
                            style={{
                            backgroundColor: "rgba(255, 255, 255, 0.56)",
                            borderColor: "rgba(255, 255, 255, 0.56)",
                            padding: 5,
                            margin: 20,
                            borderRadius: 10,
                            boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
                            }}
                        >
                            <p style={{ textAlign: "center", fontSize: "16px", marginBottom: 0 }}>
                            Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} km
                            </p>
                            <p style={{ textAlign: "center", fontSize: "14px", marginTop: 5 }}>
                            Velocity: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} km/hr
                            </p>
                        </Card>
                        </Col>
                    ))
                    ))
                ) : (
                    <p>Loading...</p>
                )}
                </Row>
                
            </div>
        </>
    );
}
