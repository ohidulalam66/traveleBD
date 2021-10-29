import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {
    const { name, image, price, shortDescription } = service;
    return (
        <>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="text-secondary fw-bold">{name}</Card.Title>
                        <Card.Text>
                            <h5>Price: ${price}</h5>
                            <p>{shortDescription}</p>
                        </Card.Text>
                        <button className="btn-service">Book Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;