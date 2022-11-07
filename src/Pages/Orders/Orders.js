import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import {  FaLongArrowAltLeft, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
        }, [user?.email])


        const handleDelete = id => {
            const proceed = window.confirm('Are you sure to order this order?');
            if(proceed) {
                fetch(`http://localhost:5000/orders/${id}`,{
                    method: 'DELETE',   
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        alert('Deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
            }
        }
        const handleStatusUpdate = id => {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({status:'Approved'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';
                    const newOrders = [approving,...remaining ];
                    setOrders(newOrders);
                }
            });
        }

    return (
        <div  className="mb-36 max-w-screen-xl mx-auto">
            <h2 className='text-5xl font-bold text-orange-600 text-center p-5 mb-3'>You have total {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                       <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product Details</th>
                            <th> Contact</th>
                            <th>Message</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrdersRow key={order._id} order ={order} handleDelete = {handleDelete} handleStatusUpdate = {handleStatusUpdate}></OrdersRow>)
                        }
                    </tbody>
                   
                    <tfoot>
                        <tr>
                            <th></th>
                            <th className='flex'><Link to='/services'><FaLongArrowAltLeft className='mr-3 text-orange-600 items-center'/></Link> Continue shopping</th>
                            <th></th>
                            <th></th>
                            <th className='flex'>Clear shopping cart <FaTrash className='ml-3 items-center text-red-600'/></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default Orders;