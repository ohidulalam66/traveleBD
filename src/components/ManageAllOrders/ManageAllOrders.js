import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, you want to your client order Delete?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Canceled SuccessFully")
                        const remainingOrder = orders.filter(user => user._id !== id);
                        setOrders(remainingOrder);
                    };
                });
        };
    };
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> ADMIN DASHBOARD</i> </p>
                <h1 className="services-header">Manage All Orders</h1>
            </div>
            <Container className="mb-5">
                <Row>
                    <Col>
                        {
                            orders.map(order =>
                                <div className="d-flex justify-content-around align-items-center manage-order" key={order._id}>
                                    <h5>{order.name}</h5>
                                    <p><span className="fw-bold">From:</span> {order.locationName}</p>
                                    <p><span className="fw-bold">To:</span> {order.serviceName}</p>
                                    <p><span className="fw-bold">Date:</span> {order.date}</p>
                                    <p><span className="fw-bold">Phone No:</span> {order.number}</p>
                                    <button className="btn-service">Approve</button>
                                    <button onClick={() => handleDeleteOrder(order._id)} className="btn-service">Cancel</button>
                                </div>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ManageAllOrders;