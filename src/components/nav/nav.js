import React from 'react'
import logo from '../../assets/logo.svg'
import './nav.css';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
      <nav className='container'>
        <img src={logo} alt='logo'/>
        <ul>
            <li><Link to='/littlelemonrestaurant'>Home</Link></li>
            <li><Link to='/littlelemonrestaurant/about'>About</Link></li>
            <li><Link to='/littlelemonrestaurant/menu'>Menu</Link></li>
            <li><Link to='/littlelemonrestaurant/booking'>Reservations</Link></li>
            <li><Link to='/littlelemonrestaurant/order-online'>Order Online</Link></li>
            <li><Link to='/littlelemonrestaurant/login'>Login</Link></li>
        </ul>
      </nav>
  )
}

export default nav