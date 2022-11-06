import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-8">
                <img src={img} alt="" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="card-actions font-semibold text-xl text-orange-600 flex items-center space-between">
                    <p>Price : {price}</p>
                    <FaArrowRight/>
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;