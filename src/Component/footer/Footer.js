import React from 'react'
import { Container, Row } from 'react-bootstrap'
import logo from "../../IMG/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faSquareFacebook, faSquareGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import "./Footer.css"

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#080808", paddingTop:"40px"}}>
        <Container>
          <Row lg={3} md={1} sm={1} className='footer-1 pb-5'>
            <div className='footer-company d-flex flex-column gap-3 pe-lg-5'>
              <div className='d-flex align-items-center gap-3'>
                <img src={logo}></img>
                <h6>Carslk</h6>
              </div>
              <h5>Car rental has never been easier. With our company, you can book your car online, phone or app</h5>
              <div className='social d-flex fs-2 gap-4'>
                <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff",}} />
              </div>
            </div>
            <div className='footer-contact d-flex justify-content-center gap-lg-5 gap-2 pt-2'>
              <div className='col-3'>
                <h4 className='fs-3'>links</h4>
                <a href="#">About Us</a><br/>
                <a href="#">Contact us</a><br/>
                <a href="#">All Cars</a><br/>
              </div>
              <div className='col-9'>
                <h4 className='fs-3'>contact info</h4>
                <h6 className='fs-5'><span>Email:</span> info@carslk.com</h6>
                <h6 className='fs-5'><span>Phone:</span> +96666666666</h6>
                <h6 className='fs-5'><span>Address:</span> 1234 Woo, Lodo, United States</h6>
              </div>
            </div>
            <div className='NEWSLETTER pt-2 text-center'>
              <h4 className='fs-3'>SUBSCRIBE NEWSLETTER</h4>
              <p className='fs-5'>Get all the latest information on Events, Sales and Offers.</p>
              <div className='px-2 px-md-5'>
                <input className='w-75 p-1' placeholder='Email address' type="email"></input>
                <button style={{backgroundColor:"#0074D9", color:"#fff"}} className='w-25 p-1 fw-bold' >Subscribe</button>
              </div>
            </div>
          </Row>
          <Row>
            <div className='text-center py-3 d-flex flex-column'>
              <p style={{color:"#fff", margin:"0"}}>&copy; Copyrights Carslk - All Rights Reserved | Designed by <span style={{color:"#0074D9"}}>Abobakr Almashhor</span>.</p>
              <div className='d-flex gap-3 justify-content-center fs-2'>
                <a href='https://www.linkedin.com/in/abobakr-almashhor/' target='_blank'><FontAwesomeIcon icon={faLinkedin} style={{color: "#0074D9",}} /></a>
                <a href='https://www.facebook.com/profile.php?id=100068290724398' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} style={{color: "#0074D9",}} /></a>
                <a href='https://github.com/ab0bakr1' target='_blank'><FontAwesomeIcon icon={faSquareGithub} style={{color: "#0074D9",}} /></a>
              </div>
            </div>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer