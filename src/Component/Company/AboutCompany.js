import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBurst, faCarSide, faHeadset, faUserTie } from '@fortawesome/free-solid-svg-icons';
import "./AboutCompany.css"; // قمت بتغيير الاسم لعدم الخلط مع مكون الشركات

const AboutCompany = () => {
    const features = [
        {
            icon: faCarSide,
            title: "Free Delivery & Pickup",
            desc: "We provide car delivery and pickup service anywhere within the city limits at no extra cost."
        },
        {
            icon: faHeadset,
            title: "24/7 Emergency Service",
            desc: "Our support team is available around the clock to assist you with any car malfunctions or issues."
        },
        {
            icon: faCarBurst,
            title: "Comprehensive Insurance",
            desc: "Full coverage insurance for the vehicle, passengers, and third parties for your peace of mind."
        },
        {
            icon: faUserTie,
            title: "Professional Guides",
            desc: "Need a driver? We provide expert drivers and tour guides to show you the best city landmarks."
        }
    ];

    return (
        <section className='about-company-section py-5'>
            <Container>
                <div className='section-title text-center mb-5'>
                    <h1 className='display-4 fw-bold main-blue-color'>CARSLK</h1>
                    <div className="title-divider mx-auto"></div>
                    <p className='lead mt-3 text-secondary'>
                        Car rental has never been easier. Book online, via phone, or through our app.
                    </p>
                </div>

                <Row className="g-4">
                    {features.map((item, index) => (
                        <Col key={index} lg={3} md={6}>
                            <div className="feature-card shadow-sm h-100 p-4 text-center">
                                <div className="icon-wrapper mb-4">
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                                <h5 className='fw-bold mb-3'>{item.title}</h5>
                                <p className='text-muted small mb-0'>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default AboutCompany;