import React from 'react'
import { useLocation } from 'react-router-dom';
import './header.css'

function Header() {
    const { pathname } = useLocation()
    return (
        <header class="header">
            <h1>{pathname === "/" ? "LORENA BUCIU" : pathname.slice(1).toUpperCase()}</h1>
        </header>
    );
}

export default Header;