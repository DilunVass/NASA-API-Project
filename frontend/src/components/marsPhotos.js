import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Pagination, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function MarsPhotos() {
    const [page, setPage] = useState(1);
    const [marsRovers, setMarsRovers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fdNSKBqbucYi4XGdZy0f0ZBNDITXO91dpMdlj36x")
            .then((response) => {
                setMarsRovers(response.data.photos);
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        document.body.style.backgroundImage = `url('https://c4.wallpaperflare.com/wallpaper/201/912/973/mars-space-universe-artwork-wallpaper-preview.jpg')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }, []);

    const handlePaginationChange = (value) => {
        setPage(value);
    };

    return (
        <>
            
            <div style={{ textAlign: "center", color: "rgba(255, 255, 255, 0.8)", fontFamily: "serif", fontWeight: "bold", margin: "20px" }}>
                <h1>Mars Rover Photos</h1>
            </div>
            <div style={{ marginBottom: "20px", width: "100%", textAlign: "center" }}>
    <Input
        placeholder="Search by Camera Name"
        prefix={<SearchOutlined />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "300px" }}
    />
</div>
            <Row justify="center" gutter={[0, 16]}>
                {marsRovers
                    .filter((marsRover) =>
                        marsRover.camera.full_name.toString().toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .slice((page - 1) * 6, page * 6)
                    .map((marsRover) => (
                        <Col key={marsRover.id} xs={24} sm={12} md={6} lg={10} xl={7}>
                            <Card
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.56)",
                                    borderColor: "rgba(255, 255, 255, 0.56)",
                                    padding: 5,
                                    margin:20,
                                    borderRadius: 10,
                                    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
                                }}
                                cover={
                                    <img
                                        alt={marsRover.id}
                                        src={marsRover.img_src}
                                        style={{
                                            objectFit: "cover",
                                            height: "300px",
                                            width: "100%",
                                            borderRadius: 10
                                        }}
                                    />
                                }
                            >
                                <p style={{ textAlign: "center", fontSize: "16px", marginBottom: 0 }}>
                                    Taken by: {marsRover.camera.full_name}
                                </p>
                                <p style={{ textAlign: "center", fontSize: "14px", marginTop: 5 }}>
                                    Date: {marsRover.earth_date}
                                </p>
                            </Card>
                        </Col>
                    ))}
            </Row>
            <Pagination
                style={{
                    marginTop: "50px",
                    textAlign: "center",
                    marginBottom: "50px",
                }}
                defaultCurrent={1}
                total={marsRovers.length}
                defaultPageSize={6}
                onChange={handlePaginationChange}
            />
           
        </>
    );
}
