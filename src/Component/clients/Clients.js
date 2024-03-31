import React from 'react'
import { Container, Row } from 'react-bootstrap'
import client from "../../IMG/client.png"
import client2 from "../../IMG/client2.png"
import client3 from "../../IMG/client3.png"
import client4 from "../../IMG/cliemt4.png"
import client5 from "../../IMG/client5.png"
import client6 from "../../IMG/logo-removebg-preview.png"
import client7 from "../../IMG/مخلخ.png"
import "./Clients.css"

const Clients = () => {
  return (
    <>
        <section className='py-5' style={{backgroundColor: '#797979'}}>
            <Container >
                <div class="container-fluid pb-5 m-auto">
                    <h1 id="clientes" align="center"><strong><font color="#483D8B">CLIENTES</font></strong></h1>
                </div>
                <Row data-aos="fade-up" className='clients d-flex' sm={2} md={3} lg={7}>
                    <img src={client}></img>
                    <img src={client2}></img>
                    <img src={client3}></img>
                    <img src={client4}></img>
                    <img src={client5}></img>
                    <img src={client6}></img>
                    <img src={client7}></img>
                </Row>
            </Container>    
        </section>
    </>
  )
}

export default Clients