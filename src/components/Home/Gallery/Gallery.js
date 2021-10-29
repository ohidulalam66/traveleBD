import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
            <div id="gallery">
                <div className="text-center py-4">
                    <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> POPULAR DESTINATION</i> </p>
                    <h1 className="services-header">TOP NOTCH DESTINATION</h1>
                </div>
            </div>
            <Container className="pb-5">
                <Row>
                    <img src="https://i.ibb.co/88zRbpk/sajek.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/PcmVG4K/sylhet.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/WPf4f6m/kaptai.jpg" className="w-25" alt="" />
                    <img src="https://i.ibb.co/PM1QdCL/cox-s-bazer.jpg" className="w-25" alt="" />
                </Row>
            </Container>
        </>
    )
};

export default Gallery;
/*



*/
