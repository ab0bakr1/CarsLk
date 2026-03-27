import React from 'react';
import "./Year.css";

const Year = ({ handleFiltersChange }) => {
  // مصفوفة السنوات لتسهيل الإدارة
  const years = ["2023", "2022", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2012", "2010", "2009"];

  return (
    <div className="year-filter-container">
      <div className="years-grid">
        {/* زر الكل - خيار مهم لتجربة المستخدم */}
        <button 
          onClick={handleFiltersChange} 
          name='year' 
          value="all" 
          className='year-chip all-btn'
        >
          All
        </button>

        {years.map((y) => (
          <button 
            key={y}
            onClick={handleFiltersChange} 
            name='year' 
            value={y} 
            className='year-chip'
          >
            {y}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Year;