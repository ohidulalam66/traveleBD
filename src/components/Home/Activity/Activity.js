import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Activity.css';

const Activity = () => {
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> TRAVEL BY ACTIVITY</i> </p>
                <h1 className="services-header">ADVENTURE & ACTIVITY</h1>
            </div>
            <Container className="py-4">
                <Row xs={2} md={3} className="g-4">
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKvZD.png" alt="" />
                        <h5>Adventure</h5>
                        <p>15 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKpmY.png" alt="" />
                        <h5>Trekking</h5>
                        <p>12 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKkHh.png" alt="" />
                        <h5>Camp Fire</h5>
                        <p>7 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKH1M.png" alt="" />
                        <h5>Off-Road</h5>
                        <p>15 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKno4.png" alt="" />
                        <h5>Camping</h5>
                        <p>13 Destination</p>
                    </div>
                    <div className="border border-1 text-center activities p-1">
                        <img src="https://i.im.ge/2021/10/30/omKfy8.png" alt="" />
                        <h5>Exploring</h5>
                        <p>25 Destination</p>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Activity;