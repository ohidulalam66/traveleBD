/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Booking.css';

const Booking = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { name, image, price, offering, fullDescription } = service;

    const { register, handleSubmit } = useForm();
    const { user } = useAuth();


    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = data => {
        // const savedCart = getStoredCart();
        // data.order = savedCart;

        // const url = `http://localhost:5000/services`;

        // fetch((url), {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         if (result.insertedId) {
        //             alert('Order processed Successfully');
        //             reset();
        //         }
        //     })
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
                        <form className="booking-form py-3" onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user.displayName} {...register("name")} />
                            <input defaultValue={user.email} {...register("email", { required: true })} />
                            <input defaultValue={name}{...register("address")} />
                            <input defaultValue={price}{...register("number")} />
                            <input type="date" {...register("date")} />
                            <input placeholder="Phone No."  {...register("phone")} />
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