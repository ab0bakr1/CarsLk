import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Colors from './Colors/Colors';
import Company from './Company/Company';
import Year from './year/Year';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Categroy = ({ handleFiltersChange }) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-header d-flex align-items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faFilter} className="text-primary" />
        <h4 className='m-0 fw-bold text-uppercase' style={{color:"#333", fontSize: '1.2rem', letterSpacing: '1px'}}>
          Filter by
        </h4>
      </div>
      
      <Row className='g-4 flex-column'>
        <Col>
          <div className="filter-group">
            <h6 className="filter-label">Brand / Company</h6>
            <Company handleFiltersChange={handleFiltersChange} />
          </div>
        </Col>
        
        <Col>
          <div className="filter-group">
            <h6 className="filter-label">Body Color</h6>
            <Colors handleFiltersChange={handleFiltersChange} />
          </div>
        </Col>
        
        <Col>
          <div className="filter-group">
            <h6 className="filter-label">Manufacturing Year</h6>
            <Year handleFiltersChange={handleFiltersChange} />
          </div>
        </Col>
      </Row>

      <button 
        className="btn btn-outline-danger btn-sm mt-4 w-100 border-0 text-decoration-underline"
        onClick={() => window.location.reload()} // طريقة سريعة لإعادة ضبط الفلاتر
      >
        Reset All Filters
      </button>
    </div>
  );
}

export default Categroy;