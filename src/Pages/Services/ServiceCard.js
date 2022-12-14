import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ServiceCard = ({service }) => {
    const { _id, img, title, price } = service;
   
        
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-8">
                <img src={img} alt="" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="card-actions font-semibold text-xl text-orange-600 flex items-center space-between">
                    <p>Price : {price}</p>
                    
                    <Link to={`/checkout/${_id}`}><FaArrowRight/></Link>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;