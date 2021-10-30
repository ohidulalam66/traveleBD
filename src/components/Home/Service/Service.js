import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, name, image, price, reviews, shortDescription } = service;
    return (
        <>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title className="text-secondary fw-bold">{name}</Card.Title>
                        <Card.Text>
                            <h5>Price: ${price}</h5>
                            <p>{reviews}</p>
                            <p>{shortDescription}</p>
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn-service">Book Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;