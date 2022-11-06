import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img className='rounded w-5/6 h-full' src={person} alt='' />
                    <img className='absolute rounded w-3/5 h-5/6 border-8 border-white right-5 top-1/2' src={parts} alt='' />
                </div>
                <div className='w-1/2 ml-14'>
                    <p className='font-bold text-xl text-orange-600 mb-5 mt-24'>About Us</p>
                    <h1 className="text-5xl font-bold">We are qualified <br/> & of     experience <br/> in this field</h1>
                    <p className="py-2 font-normal text-base text-zinc-600 my-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random words which don't look even slightly believable.
                    <br /><br />the majority have suffered alteration in some form, by injected humour, or random words which don't look even slightly believable.  </p>
                    <button className="btn btn-accent">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;