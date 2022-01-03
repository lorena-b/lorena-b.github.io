import React from 'react'
import { useLocation } from 'react-router-dom';
import '../assets/css/header.css'

function Header() {
    const { pathname } = useLocation()

    return (
        <div>
            <header class="header">
                <h1>{pathname === "/" ? "LORENA BUCIU" : pathname.slice(1).toUpperCase()}</h1>
            </header>
        </div>
    );
}

export default Header;