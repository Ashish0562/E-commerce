import React, { useState } from 'react'
import Api from './Api'

const Header = () => {

    const[value,setvalue]=useState('')

  return (
    <div className='header'>
        <h1>Available Products</h1>
        <select onChange={(e)=>setvalue(e.target.value)}>
            <option>select Category</option>
            <option>smartphones</option>
            <option>laptops</option>
            <option>fragrances</option>
            <option>skincare</option> 
            <option>groceries</option> 
            <option>home-decoration</option> 
        </select>
    </div>
  )
}

export default Header