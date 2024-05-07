import React from 'react'
import './styles/YourAdve.css'
import youradv1 from '../../../assets/services-1.jpg'
import youradv2 from '../../../assets/services-2.jpg'
import youradv3 from '../../../assets/services-3.jpg'
import youradv4 from '../../../assets/services-4.jpg'


function YourAdve() {
  return (
    <section className='youradve'>
      
      <div className='youradve-div'>
        <h2>It's Time to Start Your Adventures</h2>
        <span className='color-line'></span>
        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus ullamcorpe pulvinar.</p>

      </div>


      <div className="youradve-div1">

        <div className="youradve-divi">
          <img src={youradv1} alt="img" height="300" />
          <h5>Backpacking Trips</h5>
          <p>Fuerat aestu carentem habentia spectent tonitrua mutastis <br /> locavit liberioris inistra possedit.</p>
        </div>

        <div className="youradve-divi">
          <img src={youradv2} alt="img" height="300" />
          <h5>Water Sports</h5>
          <p>Fuerat aestu carentem habentia spectent tonitrua mutastis <br /> locavit liberioris inistra possedit.</p>
        </div>

      </div>

      <div className="youradve-div1">

        <div className="youradve-divi">
          <img src={youradv3} alt="img" height="300" />
          <h5>Family Hiking Trips</h5>
          <p>Fuerat aestu carentem habentia spectent tonitrua mutastis <br /> locavit liberioris inistra possedit.</p>
        </div>

        <div className="youradve-divi">
          <img src={youradv4} alt="img" height="300" />
          <h5>Winter Sports</h5>
          <p>Fuerat aestu carentem habentia spectent tonitrua mutastis <br /> locavit liberioris inistra possedit.</p>
        </div>
      </div>
    </section>
  )
}

export default YourAdve