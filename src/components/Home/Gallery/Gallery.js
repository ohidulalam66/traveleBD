import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> POPULAR DESTINATION</i> </p>
                <h1 className="services-header">TOP NOTCH DESTINATION</h1>
            </div>
            <Container className="pb-5">
                <Row>
                    <img src="https://i.im.ge/2021/10/30/omKxzJ.jpg" className="w-25" alt="" />
                    <img src="https://i.im.ge/2021/10/30/omKYOy.jpg" className="w-25" alt="" />
                    <img src="https://i.im.ge/2021/10/30/omKEya.jpg" className="w-25" alt="" />
                    <img src="https://i.im.ge/2021/10/30/omKbmS.jpg" className="w-25" alt="" />
                </Row>
            </Container>
        </>
    )
};

export default Gallery;
/*





*/
