import React from 'react'
import "./Year.css"

const Year = ({ handleFiltersChange }) => {
  return (
    <>
        <h4 className='my-3 text-uppercase'>Year</h4>
        <div className="Years">
            <button onClick={handleFiltersChange} name='year' value="2023" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2023</button>
            <button onClick={handleFiltersChange} name='year' value="2022" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2022</button>
            <button onClick={handleFiltersChange} name='year' value="2020" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2020</button>
            <button onClick={handleFiltersChange} name='year' value="2019" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2019</button>
            <button onClick={handleFiltersChange} name='year' value="2018" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2018</button>
            <button onClick={handleFiltersChange} name='year' value="2017" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2017</button>
            <button onClick={handleFiltersChange} name='year' value="2016" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2016</button>
            <button onClick={handleFiltersChange} name='year' value="2015" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2015</button>
            <button onClick={handleFiltersChange} name='year' value="2014" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2014</button>
            <button onClick={handleFiltersChange} name='year' value="2012" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2012</button>
            <button onClick={handleFiltersChange} name='year' value="2010" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2010</button>
            <button onClick={handleFiltersChange} name='year' value="2009" className='d-flex align-items-center gap-1 border-0 bg-transparent fs-5'>2009</button>
        </div>
    </>
  )
}

export default Year