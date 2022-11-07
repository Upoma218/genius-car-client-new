import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const {_id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name= `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';    
        const phone = form.phone.value;    
        const message = form.message.value;    

        const order = {
            service: _id,
            serviceName: title,
            img: img,
            price,
            customer: name,
            email,
            phone,
            message
        }

      /*   if(phone.length > 11){
            alert('Please enter your 11 digit phone no!')
        }
        else {

        } */

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert('Order placed Successfully!');
                form.reset();
                navigate('/orders')
            }
        })
        .catch(error => console.log(error))
    } 
    return (
        <div  className='mb-36 max-w-screen-xl mx-auto bg-slate-200 p-24'>
            <h1 className='mb-3 text-center text-3xl font-bold text-zinc-700'>Your are about to order: {title}</h1>
            <h3 className='mb-7 text-center text-xl font-bold text-orange-600'>Price: {price}</h3>
            <form onSubmit={handlePlaceOrder}>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name = "firstName" type="text" placeholder="First Name" className="input w-full" required/>
                    <input name = "lastName" type="text" placeholder="Last Name" className="input w-full" required/>
                    <input name = "phone" type="text" placeholder="Your Phone" className="input w-full" required/>
                    <input name = "email" type="text" placeholder="Your Email" defaultValue={user?.email} readOnly className="input w-full" required/>
                </div>
                <textarea name='message' className="textarea w-full mt-4" placeholder="Your message" ></textarea>
                <input type="submit" className="btn btn-active btn-accent w-full mt-4" value="Order confirm" required/>
            </form>
        </div>
    );
};

export default Checkout;