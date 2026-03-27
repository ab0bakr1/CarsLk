// NavBar.jsx
import React, { useState } from "react";
import './NavBar.css'
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <nav className="main-nav d-flex align-items-center">
            {/* زر الهامبرغر المطور */}
            <button 
                onClick={toggleMenu} 
                className={`nav-btn-modern ${isActive ? "active" : ""}`}
                aria-label="Toggle navigation"
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>

            {/* الروابط */}
            <ul className={`nav-links-container ${isActive ? "active" : ""}`}>
                <li><Nav.Link as={NavLink} to="/" onClick={() => setIsActive(false)}>Home</Nav.Link></li>
                <li><Nav.Link as={NavLink} to="/Cars" onClick={() => setIsActive(false)}>Cars</Nav.Link></li>
                <li><Nav.Link as={NavLink} to="/Company" onClick={() => setIsActive(false)}>Brands</Nav.Link></li>
                <li><Nav.Link as={NavLink} to="/Contact" onClick={() => setIsActive(false)}>Contact</Nav.Link></li>
            </ul>

            {/* الغطاء الخلفي عند فتح القائمة في الموبايل */}
            {isActive && <div className="nav-overlay" onClick={toggleMenu}></div>}
        </nav>
    );
}

export default NavBar;