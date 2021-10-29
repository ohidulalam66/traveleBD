import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = "/items.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div id="services">
                <div className="text-center py-4">
                    <p className="text-danger fw-bold"><i className="fas fa-grip-lines"></i> EXPLORE GREAT PLACES</p>
                    <h1 className="services-header">POPULAR PACKAGES</h1>
                </div>
                <Container>
                    <Row xs={1} md={4} className="g-4 pb-4">
                        {
                            services.map(service =>
                                <Service
                                    key={service.name}
                                    service={service}
                                ></Service>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Services;