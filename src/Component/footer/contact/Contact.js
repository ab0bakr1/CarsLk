import { faAt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Form } from 'react-bootstrap'
import "./Contact.css"

const Contact = () => {
  return (
    <div style={{backgroundColor:"#080808"}}>
        <Container>
            <div className='contact'>
                <Col data-aos="fade-right" data-aos-duration="8000" className='contact-item'>
                    <h2><FontAwesomeIcon icon={faAt} style={{color: "#0074D9",}} /><span>Email:</span> info@carslk.com</h2>
                    <h2><FontAwesomeIcon icon={faPhone} style={{color: "#0074D9",}} /><span>Phone:</span> +96666666666</h2>
                    <h2><FontAwesomeIcon icon={faLocationDot} style={{color: "#0074D9",}} /><span>Address:</span> 1234 Woo, Lodo, United States</h2>
                </Col>
                <Col>
                    <Form data-aos="fade-left" data-aos-duration="8000" className='m-auto py-5'>
                        <input type='name' placeholder='NAME' name='user-name' required/>
                        <input type='email' placeholder='EMAIL' name='user-email' required/>
                        <input type='text' placeholder='Subject' name='subject' required/>
                        <textarea name='message' cols={10} rows={5}></textarea>
                        <button type="submit">Send message</button>
                    </Form>
                </Col>
            </div>
        </Container>
    </div>
  )
}

export default Contact