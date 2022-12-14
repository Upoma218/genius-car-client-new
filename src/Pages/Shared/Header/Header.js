import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
        .then(() => {
            alert ('If you want to order anything, please login !')
        })
        .catch(error => console.log(error))
    }

    const menuItems = <>
        <Link className='font-semibold mr-10' to='/'>Home</Link>
        <Link className='font-semibold mr-10' to='/about'>About</Link>
        <Link className='font-semibold mr-10' to='/services'>Services</Link>
        <Link className='font-semibold mr-10' to='/blog'>Blog</Link>
        <Link className='font-semibold mr-10' to='/contact'>Contact</Link>
        {
            user?.email?
            <>
            <Link className='font-semibold mr-10' to='/orders'>Orders</Link>
            <Link  onClick={handleLogout} className='font-semibold mr-10' to='/'>Sign Out</Link>
            </>
            :
            <Link className='font-semibold mr-10' to='/login'>Sign In</Link>
        }
      
    </>

    return (
        <div className="navbar bg-base-100 h-36 max-w-screen-xl	mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link><img className='h-fit' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-accent">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;