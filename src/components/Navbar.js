import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return ( 
        <nav>
            <h1 className='logo'>
                <Link to='/'>strength</Link>
            </h1>
        </nav>
     );

}
 
export default Navbar;