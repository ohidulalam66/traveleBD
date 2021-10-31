import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MyOrders.css';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, []);
    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are you sure, you want your order Deleted?");
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Canceled SuccessFully")
                        const remainingOrder = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrder);
                    };
                });
        };
    };
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> USER DASHBOARD</i> </p>
                <h1 className="services-header">My Orders</h1>
            </div>
            <Container className="mb-5">
                <Row>
                    <Col>
                        {
                            myOrders.map(myOrder =>
                                <div className="d-flex justify-content-around align-items-center manage-order" key={myOrder._id}>
                                    <h5>{myOrder.name}</h5>
                                    <p><span className="fw-bold">From:</span> {myOrder.locationName}</p>
                                    <p><span className="fw-bold">To:</span> {myOrder.serviceName}</p>
                                    <p><span className="fw-bold">Date:</span> {myOrder.date}</p>
                                    <p><span className="fw-bold">Phone No:</span> {myOrder.number}</p>
                                    <button className="btn-service">Approve</button>
                                    <button onClick={() => handleDeleteOrder(myOrder._id)} className="btn-service">Cancel</button>
                                </div>)
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default MyOrders;