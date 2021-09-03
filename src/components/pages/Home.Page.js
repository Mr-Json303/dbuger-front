import React from 'react';
import { Link } from "react-router-dom";

function HomePage() {
    return (<>
        <h1>This is HOME</h1>
        <br />
        <ul>
            <li>
                <Link to='/Features'>Features</Link>
            </li>
            <li>
                <Link to='/solutions'>Solutions</Link>
            </li>
            <li>
                <Link to='/prices'>Prices</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to="/app">App homepage</Link>
            </li>
        </ul>
    </>)
}

export default HomePage;