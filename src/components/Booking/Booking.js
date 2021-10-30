/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booking.css';

const Booking = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { name, image, price, offering, fullDescription } = service;
    const { user } = useAuth();

    const nameRef = useRef();
    const emailRef = useRef();
    const serviceNameRef = useRef();
    const locationRef = useRef();
    const priceRef = useRef();
    const dateRef = useRef();
    const numberRef = useRef();

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleSubmit = e => {

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const serviceName = serviceNameRef.current.value;
        const locationName = locationRef.current.value;
        const price = priceRef.current.value;
        const date = dateRef.current.value;
        const number = numberRef.current.value;
        const addNewBooking = { name, email, serviceName, locationName, price, date, number };

        fetch(("http://localhost:5000/orders"), {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewBooking)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    };
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> TRAVEL OFFER & DISCOUNT</i> </p>
                <h1 className="services-header">Booking & Detail</h1>
            </div>
            <Container>
                <Row xs={1} md={2}>
                    <Col>
                        <h3 className="fw-bold text-center">Booking Order</h3>
                        <hr />
                        <form className="booking-form py-3" onSubmit={handleSubmit}>
                            <input defaultValue={user.displayName} ref={nameRef} />
                            <input defaultValue={user.email} ref={emailRef} />
                            <input defaultValue={name} ref={serviceNameRef} />
                            <input type="text" ref={locationRef} placeholder="Location" />
                            <input defaultValue={price} ref={priceRef} />
                            <input type="date" ref={dateRef} />
                            <input ref={numberRef} placeholder="Phone No." />
                            <input className="btn-service fw-bold" type="submit" value="Place Order" />
                        </form>
                    </Col>
                    <Col>
                        <h3 className="fw-bold text-center">Detail Order</h3>
                        <hr />
                        <img src={image} className="img-fluid" alt="" />
                        <h1>{name}</h1>
                        <h5 className="text-danger">Offering: {offering}</h5>
                        <p><span className="fw-bold">Description: </span>{fullDescription}</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default Booking;