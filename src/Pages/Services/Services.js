import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className='mb-36 max-w-screen-xl mx-auto'>
                <div>
                    <p className='font-bold text-xl text-center text-orange-600 mb-5 mt-24'>Services</p>
                    <h1 className="text-5xl font-bold text-center">Our Service Area</h1>
                    <p className="py-2 font-normal text-base text-zinc-600 text-center my-7">The majority have suffered alteration in some form, by injected humour, or random <br /> words which don't look even slightly believable. </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='lg:ml-96 '>
                    <button className="btn btn-outline btn-accent mt-12 lg:ml-48">More Services</button>
                </div>
            </div>
        </>
    );
};

export default Services;