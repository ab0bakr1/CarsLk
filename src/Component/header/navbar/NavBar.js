import React, { useState } from "react";
import './NavBar.css'
import { Nav, Overlay } from "react-bootstrap";
import {NavLink} from "react-router-dom"

function NavBar() {
    const [NavMenu , setNavMenu] = useState("nav-menu");
    const [navBtnToggle, setNavBtnToggle] = useState("nav-btn");
    const [Overlay, setOverlay] = useState("overlay");
    const navBtn  =()=>{
        NavMenu === "nav-menu" ? setNavMenu("nav-menu active") : setNavMenu("nav-menu");
        navBtnToggle === "nav-btn" ? setNavBtnToggle ("nav-btn active") : setNavBtnToggle("nav-btn");
        Overlay === "overlay" ? setOverlay ("overlay active") : setOverlay("overlay");
    }
    return(
        <div className="nav align-items-center position-relative">
            <button onClick={navBtn} className={navBtnToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={NavMenu}>
                <Nav.Link as={NavLink} to="/">home</Nav.Link>
                <Nav.Link as={NavLink} to="/Cars">Cars</Nav.Link>
                <Nav.Link as={NavLink} to="/Company">Company</Nav.Link>
                <Nav.Link as={NavLink} to="/Contact">contact</Nav.Link>
            </ul>
            <div className={Overlay} onClick={navBtn}></div>
        </div>
    )
}
export default NavBar;