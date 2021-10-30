import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <>
            <div className="text-white footer-bg">
                <Container className="py-5">
                    <Row xs={1} md={4}>
                        <Col>
                            <div>
                                <p className="fw-bold"><i className="fas fa-grip-lines"> ABOUT TRAVEL</i> </p>
                                <p className="footer-about">Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                                <i className="fab fa-google-pay about-icon"></i>
                                <i className="fab fa-cc-visa about-icon"></i>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <p className="fw-bold"><i className="fas fa-grip-lines"> CONTACT INFORMATION</i> </p>
                                <div className="footer-info">
                                    <p><i className="fas fa-phone-alt info-icon me-2"></i> <span>+01(977)529912</span></p>
                                    <p><i className="fas fa-envelope info-icon me-2"></i> <span>travelctg@gmail.com</span></p>
                                    <p><i className="fas fa-map-marker-alt info-icon me-2"></i> <span>Bahhaderhat, Chittagong</span></p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <p className="fw-bold"><i className="fas fa-grip-lines"> LATEST POST</i> </p>
                                <p>Life is a beautiful journey not a destination</p>
                                <p className="footer-about ">August 17, 2021 | No Comments</p>
                                <hr />
                                <p>Take only memories, leave only footprints</p>
                                <p className="footer-about">August 17, 2021 | No Comments</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="footer-subscribe">
                                <p className="fw-bold"><i className="fas fa-grip-lines"> SUBSCRIBE US</i></p>
                                <p>Please Subscribe our website!</p>
                                <input type="email" name="email" id="" />
                                <button className="footer-btn">SUBSCRIBE NOW</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-down">
                <Container>
                    <div className="d-flex justify-content-around align-items-center">
                        <p>Privacy Policy | Term & Condition | FAQ</p>
                        <div>
                            <Navbar.Brand className="fw-bold fs-3 text-secondary" href="/home"><img src="https://i.im.ge/2021/10/30/omK4hC.png" className="menu-icon" alt="" /> Travele BD</Navbar.Brand>
                        </div>
                        <p>Copyright © 2021 Travele BD. All rights reserveds</p>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;

/*
>
*/