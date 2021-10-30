import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css';

const Login = () => {

    const { error, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/booking';
    // console.log('came form', location.state?.form);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <>
            <div className="from-filed">
                <div className="text-center py-4">
                    <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> EXPLORE GREAT PLACES</i> </p>
                    <h1 className="services-header">Please Login</h1>
                </div>
                <form className="login-from">
                    <div className="mb-3 mx-auto">
                        <input className="field" type="email" placeholder="Email*" required />
                    </div>
                    <div className="mb-3 mx-auto">
                        <input className="field" type="password" placeholder="Password*" required />
                    </div>
                    <input className="mx-auto mb-3 btn-service" type="Submit" />
                    <p className="py-2">{error}</p>
                    <button
                        className="mx-auto btn-service mb-3"
                        onClick={handleGoogleLogin}
                    >Google Sign in</button>
                </form>
            </div>
        </>
    );
};

export default Login;