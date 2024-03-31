import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllCars from "../../Data/AllCars.json"
import CarsItem from './CarsItem'
import Categroy from './slidbar/Categroy'
import "./Store.css"
import { useState } from 'react'

const Store =() => {
  const [category, setCategory] = useState("all");
  const [filters, setFilters] = useState({
    color: "all",
    make: "all",
    year: "all",
  });
  const handleFiltersChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const filterCars = () => {
    return AllCars.filter((car) => {
      const matchColors = filters.color === "all" || filters.color === car.color;
      const matchMake = filters.make === "all" || filters.make.toLowerCase() === car.make.toLowerCase();
      const matchYear = filters.year === "all" || filters.year === car.year;
      return  matchColors && matchMake && matchYear ;
    });
  };

  return (
      <section className="my-5">
        <Container>
          <div className="d-md-flex gap-2">
            <div className="col-md-3">
              <div className="Categroy">
                <Categroy handleFiltersChange={handleFiltersChange}/>
              </div>
            </div>
            <div className="col-md-9 col-12 filter-container">
              <Row md={2} sm={1} lg={4} className="g-2">
                {filterCars().map((item) => (
                  <Col key={item.id} className="filter-car" data-aos="flip-left">
                    <CarsItem {...item} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Container>
      </section>
    );
}

export default Store
