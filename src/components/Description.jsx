import React from 'react'
import './description.css'
import { FaArrowDown } from 'react-icons/fa';

const Description = () => {

  return (
    <div className='section section_description'>
        <div className='card'>
            <div className='icon1'>
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>32 ℃</h2>
        </div>
        <div className='card'>
            <div className='icon1'>
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>32 ℃</h2>
        </div>
        <div className='card'>
            <div className='icon1'>
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>32 ℃</h2>
        </div>
        <div className='card'>
            <div className='icon1'>
                <FaArrowDown />
                <small>min</small>
            </div>
            <h2>32 ℃</h2>
        </div>
      
    </div>
  )
}

export default Description
