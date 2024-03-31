import React from 'react'
import "./Colors.css"

const Colors = ({ handleFiltersChange }) => {
  return (
    <>
        <h4 className='my-3 text-uppercase'>Colors</h4>
        <div className="colors">
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="black"><span className='color-icon' style={{backgroundColor: '#000'}}></span>black</button>
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="blue"><span className='color-icon' style={{backgroundColor: '#0000fe'}}></span>blue</button>
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="red"><span className='color-icon' style={{backgroundColor: '#ff0000'}}></span>red</button>
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="white"><span className='color-icon' style={{backgroundColor: '#fff'}}></span>white</button>
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="yellow"><span className='color-icon' style={{backgroundColor: 'yellow'}}></span>yellow</button>
            <button onClick={handleFiltersChange} className='border-0 bg-transparent d-flex align-items-center gap-1 fs-5 text-capitalize' name='color' value="silver"><span className='color-icon' style={{backgroundColor: 'silver'}}></span>silver</button>
        </div>
    </>
  )
}

export default Colors