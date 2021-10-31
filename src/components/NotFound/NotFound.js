import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div className="notFound-bg">
                <Link to="/home">
                    <button className="btn-service btn-notFound">Back</button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;