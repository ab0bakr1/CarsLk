import React from 'react'
import "./Colors.css"

const Colors = ({ handleFiltersChange }) => {
  const colorOptions = [
    { name: 'black', hex: '#111111' },
    { name: 'blue', hex: '#0056b3' },
    { name: 'red', hex: '#d90429' },
    { name: 'white', hex: '#ffffff' },
    { name: 'yellow', hex: '#ffc300' },
    { name: 'silver', hex: '#c0c0c0' },
  ];

  return (
    <div className="colors-filter-wrapper">
      <div className="color-swatches">
        {/* زر All لإلغاء فلتر الألوان */}
        <button 
          onClick={handleFiltersChange} 
          name='color' 
          value="all" 
          className='color-btn all-colors'
          title="All Colors"
        >
          All
        </button>

        {colorOptions.map((color) => (
          <button 
            key={color.name}
            onClick={handleFiltersChange} 
            name='color' 
            value={color.name} 
            className='color-btn'
            title={color.name} // يظهر اسم اللون عند تقريب الماوس
          >
            <span 
              className='swatch-circle shadow-sm' 
              style={{ backgroundColor: color.hex }}
            ></span>
            <span className='color-name-text text-capitalize'>{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Colors;