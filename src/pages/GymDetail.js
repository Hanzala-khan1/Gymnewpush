import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

const GymDetail = () => {
    const [jimDetail, setJimDetail] = useState({});
    const [Preview, setPreview] = useState("");
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');

    useEffect(() => {
        getJimDetails();
    }, [id]);

    const getJimDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/v1/Jim/getOneLocation?id=${id}`);
            setJimDetail(response.data.data);
            setPreview(jimDetail?.images[0]);
        } catch (error) {
            console.error("Error fetching gym data:", error);
        }
    };

    return (
        <>
            <section className="classes-section spad">
                <div className="container">
                    <div className="row  h-100 mt-5">
                        <div className="col-lg-6 h-100">
                            {jimDetail.images && jimDetail.images.length > 0 && (
                                <Carousel
                                    interval={3000} 
                                    indicators 
                                    controls={false} 
                                    className="custom-carousel" 
                                >
                                    {jimDetail.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100 carousel-image"
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            )}
                        </div>
                        <div className="col-lg-6 titleheading mt-4">
                            <div className="centered-text">
                                {jimDetail && (
                                    <>
                                        <h2>{jimDetail.name}</h2>
                                        <p>{jimDetail.description}</p>
                                        <Link to={`/RegisterIntoJim?id=${jimDetail._id?.toString()}&image=${Preview}`} >Register Now</Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GymDetail;
