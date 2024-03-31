import React, { useState } from 'react';
import NavBar from './navbar/NavBar';
import Logo from './logo/Logo';
import Favorite from './favorite/Favorite';
import User from './user/User';
import { Container } from 'react-bootstrap';
import "./Header.css"

function Header() {
    const [fix,setfix] = useState(false)
    function setfixed () {
        if (window.scrollY > 200){
            setfix(true)
        }else{
            setfix(false)
        }
    }
    window.addEventListener("scroll",setfixed)
    return(
        <div className={ fix ?'header color' :"header"}>
            <Container>
                <div className='d-flex align-items-center justify-content-between'>
                    <Logo />
                    <NavBar />
                    <div className='header-right d-flex gap-3 align-items-center h-20'>
                        <Favorite />
                        <User />
                    </div>    
                </div>
            </Container>
        </div>
    );
};
export default Header;