// Store.jsx
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllCars from "../../Data/AllCars.json"
import CarsItem from './CarsItem'
import Categroy from './slidbar/Categroy'
import "./Store.css"

const Store = () => {
  const [filters, setFilters] = useState({ color: "all", make: "all", year: "all" });

  const handleFiltersChange = (event) => {
    const { name, value } = event.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredCars = AllCars.filter((car) => {
    return (filters.color === "all" || filters.color === car.color) &&
           (filters.make === "all" || filters.make.toLowerCase() === car.make.toLowerCase()) &&
           (filters.year === "all" || filters.year === car.year);
  });

  return (
    <section className="store-section py-5">
      <Container>
        <div className="section-title mb-5">
          <h2 className="fw-bold">Explore Our Fleet</h2>
          <p className="text-muted small">{filteredCars.length} Cars available for you</p>
        </div>
        
        <Row>
          <Col md={3} className="mb-4">
            <div className="filter-sidebar p-4 shadow-sm rounded-4 bg-white">
              <h5 className="mb-4 fw-bold">Filters</h5>
              <Categroy handleFiltersChange={handleFiltersChange}/>
            </div>
          </Col>
          
          <Col md={9}>
            <Row xs={1} sm={2} lg={3} className="g-4">
              {filteredCars.map((item) => (
                <Col key={item.id}>
                  <CarsItem {...item} />
                </Col>
              ))}
            </Row>
            {filteredCars.length === 0 && (
              <div className="text-center py-5">
                <h4>No cars match your filters.</h4>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Store;