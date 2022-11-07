import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceCard = ({service }) => {
    const { _id, img, title, price } = service;
    const {user} = useContext(AuthContext)
        
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-8 pt-8">
                <img src={img} alt="" className="rounded-xl h-52" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="card-actions font-semibold text-xl text-orange-600 flex items-center space-between">
                    <p>Price : {price}</p>
                    {user?.email?
                    <Link to={`/checkout/${_id}`}><FaArrowRight/></Link>
                    :
                    <Link to='/login'><FaArrowRight/></Link>

                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;