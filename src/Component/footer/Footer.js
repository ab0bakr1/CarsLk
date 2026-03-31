import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from "../../IMG/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="main-footer">
            <Container>
                <Row className="gy-5 pb-5 border-bottom border-secondary border-opacity-25">
                    {/* عمود الشركة */}
                    <Col lg={4} md={12} className="footer-about">
                        <div className="footer-logo d-flex align-items-center gap-3 mb-4">
                            <img src={logo} alt="Carslk Logo" className="footer-img" />
                            <h2 className="m-0 fw-bold text-white">Carslk</h2>
                        </div>
                        <p className="footer-text">
                            Car rental has never been easier. With our company, you can book your car online, via phone, or through our dedicated app with just a few clicks.
                        </p>
                        <div className="social-icons d-flex gap-3 mt-4">
                            <a href="/"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="/"><FontAwesomeIcon icon={faXTwitter} /></a>
                        </div>
                    </Col>

                    {/* روابط سريعة */}
                    <Col lg={2} md={4} sm={6}>
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links list-unstyled">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Our Fleet</a></li>
                            <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </Col>

                    {/* معلومات التواصل */}
                    <Col lg={3} md={4} sm={6}>
                        <h5 className="footer-title">Contact Info</h5>
                        <ul className="contact-details list-unstyled">
                            <li className="d-flex gap-2 mb-3">
                                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                                <span>info@carslk.com</span>
                            </li>
                            <li className="d-flex gap-2 mb-3">
                                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                                <span>+966 555 555 555</span>
                            </li>
                            <li className="d-flex gap-2 mb-3">
                                <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
                                <span>1234 Woo, Lodo, USA</span>
                            </li>
                        </ul>
                    </Col>

                    {/* النشرة البريدية */}
                    <Col lg={3} md={4}>
                        <h5 className="footer-title">Newsletter</h5>
                        <p className="small text-muted mb-4">Stay updated with our latest offers and luxury car releases.</p>
                        <Form className="newsletter-form d-flex gap-2">
                            <Form.Control 
                                type="email" 
                                placeholder="Email" 
                                className="bg-dark border-secondary text-white"
                            />
                            <Button variant="primary">Join</Button>
                        </Form>
                    </Col>
                </Row>

                {/* حقوق النشر */}
                <Row className="pt-4 pb-4">
                    <Col md={6} className="text-center text-md-start">
                        <p className="copyright mb-0 text-muted">
                            &copy; 2026 <strong>Carslk</strong>. All Rights Reserved.
                        </p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <div className="developer-info">
                            Designed with ❤️ by <a href="https://github.com/ab0bakr1" className="text-primary text-decoration-none fw-bold">Abobakr Almashhor</a>
                            <div className="dev-socials d-inline-flex gap-3 ms-3">
                                <a href="https://github.com/ab0bakr1" className="text-white-50"><FontAwesomeIcon icon={faGithub} /></a>
                                <a href="https://www.linkedin.com/in/abobakr-almashhor/" className="text-white-50"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
