import React, { useState, useEffect } from 'react';
import NavBar from './navbar/NavBar';
import Logo from './logo/Logo';
import Favorite from './favorite/Favorite';
import User from './user/User';
import { Container } from 'react-bootstrap';
import "./Header.css";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // نغير الحالة إذا تجاوز التمرير 50 بكسل فقط ليكون التفاعل أسرع
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        // تنظيف الحدث عند خروج المكون من الشاشة
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`main-header ${scrolled ? "header-scrolled" : ""}`}>
            <Container fluid="xl">
                <div className='header-content d-flex align-items-center justify-content-between'>
                    <div className='header-left'>
                        <Logo />
                    </div>

                    <div className='header-center d-none d-lg-block'>
                        <NavBar />
                    </div>

                    <div className='header-right d-flex gap-4 align-items-center'>
                        <Favorite />
                        <User />
                        {/* هنا يمكن إضافة زر القائمة للموبايل إذا كان منفصلاً */}
                    </div>    
                </div>
            </Container>
        </header>
    );
}

export default Header;