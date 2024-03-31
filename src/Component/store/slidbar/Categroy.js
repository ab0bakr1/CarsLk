import React from 'react'
import { Row } from 'react-bootstrap'
import Colors from './Colors/Colors'
import Company from './Company/Company'
import Year from './year/Year'
const Categroy = ({handleFiltersChange}) => {
  return (
    <>
        <h4 className='categroy text-center fs-2 text-uppercase' style={{color:"#0074D9"}}>Categroy</h4>
        <Row className='d-flex'>
            <Colors handleFiltersChange={handleFiltersChange} />
            <Company handleFiltersChange={handleFiltersChange} />
            <Year handleFiltersChange={handleFiltersChange} />
        </Row>
    </>
  )
}

export default Categroy