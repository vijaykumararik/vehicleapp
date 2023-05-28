import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    let navigate=useNavigate();
  return (
    <div className='links'>
        <Link to="/details"><button className='btn'>Get Vehicle Details</button></Link>
        <Link to="/addvehicle"><button className='btn'>Add Vehicle Details</button></Link>
        <Link to="/details"><button className='btn'>Get Vehicle Details</button></Link>
        <Link to="/details"><button className='btn'>Get Vehicle Details</button></Link>
        <Link to="/details"><button className='btn'>Get Vehicle Details</button></Link>
        <Link to="/details"><button className='btn'>Get Vehicle Details</button></Link>
    </div>
  )
}

export default Home