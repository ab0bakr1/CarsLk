import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Clients.css";

// استيراد الصور (تأكد من صحة المسارات)
import client1 from "../../IMG/client.png";
import client2 from "../../IMG/client2.png";
import client3 from "../../IMG/client3.png";
import client4 from "../../IMG/cliemt4.png";
import client5 from "../../IMG/client5.png";
import client6 from "../../IMG/logo-removebg-preview.png";
import client7 from "../../IMG/مخلخ.png";

const Clients = () => {
    const clientLogos = [client1, client2, client3, client4, client5, client6, client7];

    return (
        <section className='clients-section py-5'>
            <Container>
                <div className="section-header text-center mb-5">
                    <h2 className="fw-bold text-uppercase letter-spacing-2">Our Trusted Clients</h2>
                    <div className="title-line mx-auto"></div>
                </div>

                <Row className='justify-content-center align-items-center g-4'>
                    {clientLogos.map((logo, index) => (
                        <Col key={index} xs={7} sm={4} md={3} lg={2} className="text-center" data-aos="zoom-in">
                            <div className="client-logo-wrapper">
                                <img src={logo} alt={`Client ${index + 1}`} className="img-fluid client-img" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Clients;