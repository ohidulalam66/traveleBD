import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const handleServiceAdd = data => {
        fetch('http://localhost:5000/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("service Added");
                    reset();
                }
            })
    };
    return (
        <>
            <div className="text-center py-4">
                <p className="text-danger fw-bold"><i className="fas fa-grip-lines"> ADMIN DASHBOARD</i> </p>
                <h1 className="services-header">Add Service</h1>
            </div>
            <Container>
                <form onSubmit={handleSubmit(handleServiceAdd)} className="addService-form mx-auto w-50 py-3 mb-4">
                    <input {...register("name")} placeholder="Tourist place*" />
                    <input {...register("image")} placeholder="Image URL*" />
                    <input {...register("time")} placeholder="Time*" />
                    <input {...register("price")} placeholder="Price*" />
                    <input {...register("offering")} placeholder="Offering*" />
                    <input {...register("reviews")} placeholder="Reviews*" />
                    <textarea {...register("shortDescription")} placeholder="Short Description*" />
                    <textarea {...register("fullDescription")} placeholder="Full Description*" />
                    <input type="submit" value="Add Service" className="btn-service fw-bold" />
                </form>
            </Container>
        </>
    );
};

export default AddService;