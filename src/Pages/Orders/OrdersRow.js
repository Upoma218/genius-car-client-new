import React from 'react';

const OrdersRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const {_id, phone, customer, email, img, price, serviceName, message, status } = order;
    console.log(order);

    return (
        <tr>
            <th>
                <button onClick={() => {handleDelete(_id)}} className="btn btn-circle btn-xs">X
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-2xl text-orange-600">{serviceName}</div>
                        <div className="font-bold text-orange-600text-xl">{price}$</div>

                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{customer}</div>
                {phone}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{message}</td>
            <td><button onClick={() => handleStatusUpdate(_id)} className='btn btn-accent btn-xs'>{status ? status : 'Pending...'}</button></td>
            <th>

            </th>
        </tr>
    );
};

export default OrdersRow;