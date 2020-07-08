import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/SignIn'>SignIn</Link>
            </li>
            <li>
                <Link to='/UrbanDictionary'>UrbanDictionary</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;