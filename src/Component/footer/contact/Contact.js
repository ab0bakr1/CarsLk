import { faAt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import "./Contact.css"

const Contact = () => {
    return (
        <section className='contact-section py-5'>
            <Container>
                <div className='text-center mb-5' data-aos="fade-down">
                    <h2 className='display-5 fw-bold text-white'>Get In Touch</h2>
                    <p className='text-muted'>Have questions? We're here to help you 24/7.</p>
                </div>

                <Row className='align-items-center g-5'>
                    {/* معلومات التواصل */}
                    <Col lg={5} data-aos="fade-right">
                        <div className='contact-info-wrapper'>
                            <div className='contact-card'>
                                <div className='icon-box'><FontAwesomeIcon icon={faAt} /></div>
                                <div>
                                    <h5>Email Us</h5>
                                    <p>info@carslk.com</p>
                                </div>
                            </div>

                            <div className='contact-card'>
                                <div className='icon-box'><FontAwesomeIcon icon={faPhone} /></div>
                                <div>
                                    <h5>Call Us</h5>
                                    <p>+966 555 555 555</p>
                                </div>
                            </div>

                            <div className='contact-card'>
                                <div className='icon-box'><FontAwesomeIcon icon={faLocationDot} /></div>
                                <div>
                                    <h5>Visit Us</h5>
                                    <p>1234 Luxury St, Jeddah, Saudi Arabia</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* نموذج المراسلة */}
                    <Col lg={7} data-aos="fade-left">
                        <div className='form-glass-container p-4 p-md-5'>
                            <Form className='contact-form'>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Control type='text' placeholder='Your Name' className='custom-input' required/>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-4">
                                            <Form.Control type='email' placeholder='Your Email' className='custom-input' required/>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    <Form.Control type='text' placeholder='Subject' className='custom-input' required/>
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Control as='textarea' rows={4} placeholder='Your Message' className='custom-input' required/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 py-3 fw-bold send-btn">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact