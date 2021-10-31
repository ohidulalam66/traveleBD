import React from 'react';
import { Link } from 'react-router-dom';
import './BookingDefault.css';

const BookingDefault = () => {
    return (
        <>
            <div className="BookingDefault-bg">
                <h1 className="text-center book-massage">Thanks for logging in. <br /> Please, <span className="book fw-bold">book</span> the service now</h1>
                <Link to="/home">
                    <button className="btn-service btn-booking">Back</button>
                </Link>
            </div>
        </>
    );
};

export default BookingDefault;