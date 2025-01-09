import React from 'react'
import './services-data'
import './Services.css'
import services_data from './services-data'
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="main">
        <h1>My Services</h1>
      </div>
      <div className="container">
        {services_data.map((services, index) => {
          return <div key={index} className="format">

            <h3>{services.s_no}</h3>
            <h2>{services.s_name}</h2>
            <p>{services.s_desc}</p>

            <div className='readmore'>
              <p>Read More</p>
            </div>
          </div>
        })}

      </div>

    </div>
  )
}

export default Services
