import { faCarBurst, faCarSide, faHeadset, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Company = () => {
  return (
    <section className='my-5'>
        <Container>
            <div className='my-5'>
                <h1 className='py-4' align="center"><strong><font color="#483D8B">CARSLK</font></strong></h1>
                <h5 className='fs-3 text-center text-capitalize pb-5'>Car rental has never been easier. With our company, you can book your car online, phone or app</h5>
            </div>
            <Row sm={1} md={2} lg={4}>
                <div className='text-center px-5 d-flex flex-column gap-3'>
                    <FontAwesomeIcon icon={faCarSide} className='fs-1' style={{color: "#483D8B",}} />
                    <h6 className='fw-bold fs-5 text-capitalize'>Free delivery and pickup service</h6>
                    <p>We provide you with a car delivery and pickup service anywhere you want within the city.</p>
                </div>
                <div className='text-center px-5 d-flex flex-column gap-3'>
                    <FontAwesomeIcon icon={faHeadset} className='fs-1' style={{color: "#483D8B",}} />
                    <h6 className='fw-bold fs-5 text-capitalize'>Emergency service</h6>
                    <p>We provide you with emergency service around the clock in the event of any problem or malfunction in the car.</p>
                </div>
                <div className='text-center px-5 d-flex flex-column gap-3'>
                    <FontAwesomeIcon icon={faCarBurst} className='fs-1' style={{color: "#483D8B",}} />
                    <h6 className='fw-bold fs-5 text-capitalize'>Comprehensive insurance service</h6>
                    <p>We provide you with a comprehensive insurance service that covers all risks and damages that may occur to the car, to you, or to others.</p>
                </div>
                <div className='text-center px-5 d-flex flex-column gap-3'>
                    <FontAwesomeIcon icon={faUserTie} className='fs-1' style={{color: "#483D8B",}} />
                    <h6 className='fw-bold fs-5 text-capitalize'>Driver and tour guide service</h6>
                    <p>We provide you with a driver and tour guide service if you want to visit the landmarks and tourist places in the city.</p>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Company