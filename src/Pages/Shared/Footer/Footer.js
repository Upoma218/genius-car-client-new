import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer p-48 bg-black text-white ">
            <div className='mr-40'>
                <img src={logo} alt="" />
                <p className='my-5'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br />trainer who is also a serial .</p>
                <div>
                    <a href='/' className="btn text-bold bg-slate-800 btn-circle mr-5"><FaGoogle /></a>
                    <a href='/' className="btn text-bold bg-slate-800 btn-circle mr-5"><FaTwitter/></a>
                    <a href='/' className="btn text-bold bg-slate-800 btn-circle mr-5"><FaInstagram/></a>
                    <a href='/' className="btn text-bold bg-slate-800 btn-circle mr-5"><FaLinkedin/></a>
                </div>
            </div>

            <div className='mr-40'>
                <span className="footer-title">About</span>
                <Link className="link link-hover">Home</Link>
                <Link className="link link-hover">Service</Link>
                <Link className="link link-hover">Contact</Link>
            </div>
            <div className='mr-40'>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">Why Car Doctor</Link>
                <Link className="link link-hover">About</Link>
            </div>
            <div>
                <span className="footer-title">Support Center</span>
                <Link className="link link-hover">Feedback</Link>
                <Link className="link link-hover">Accessability</Link>
            </div>
        </footer>
    );
};

export default Footer;