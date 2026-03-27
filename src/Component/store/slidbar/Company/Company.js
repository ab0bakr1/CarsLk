import React from 'react'
import "./Company.css"
// استيراد الصور (ابقِ عليها كما هي)
import BMW from "../../../../IMG/BMW.png";
import Tesla from "../../../../IMG/Tesla.png";
import Chevrolet from "../../../../IMG/Chevrolet.png";
import Mercedes from "../../../../IMG/Mercedes.png";
import Toyota from "../../../../IMG/Toyota.png";
import Hyundai from "../../../../IMG/Hyundai.png";
import Audi from "../../../../IMG/Audi.png";
import JEEP from "../../../../IMG/JEEP.png";
import Lexus from "../../../../IMG/Lexus.png";
import Honda from "../../../../IMG/Honda.png";
import Cadillac from "../../../../IMG/Cadillac.png";
import Ford from "../../../../IMG/Ford.png";
import RollsRoyce from "../../../../IMG/Rolls-Royce.png"

const Company = ({ handleFiltersChange }) => {
  const companies = [
    { name: 'JEEP', img: JEEP },
    { name: 'Audi', img: Audi },
    { name: 'Hyundai', img: Hyundai },
    { name: 'Toyota', img: Toyota },
    { name: 'Mercedes', img: Mercedes },
    { name: 'Chevrolet', img: Chevrolet },
    { name: 'Tesla', img: Tesla },
    { name: 'BMW', img: BMW },
    { name: 'Lexus', img: Lexus },
    { name: 'Honda', img: Honda },
    { name: 'Ford', img: Ford },
    { name: 'Cadillac', img: Cadillac },
    { name: 'Rolls-Royce', img: RollsRoyce },
  ];

  return (
    <div className="company-filter-section">
      <div className="company-list">
        {/* زر All للعودة لكل الشركات */}
        <button 
          onClick={handleFiltersChange} 
          name="make" 
          value="all" 
          className='company-item all-btn'
        >
          All Brands
        </button>

        {companies.map((brand) => (
          <button 
            key={brand.name}
            onClick={handleFiltersChange} 
            name='make' 
            value={brand.name} 
            className='company-item'
          >
            <img src={brand.img} alt={brand.name} className='brand-logo' />
            <span className="brand-name">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Company