import React from 'react'
import './styles/UpcomingTour.css'
import upcomingimg1 from '../../../assets/grid-1.jpg'
import upcomingimg2 from '../../../assets/grid-2.jpg'
import upcomingimg3 from '../../../assets/grid-3.jpg'
import upcomingimg4 from '../../../assets/grid-4.jpg'

function UpcomingTour() {
  return (
    <section className="last-section">
        <div className="last-section-div">
            <div>
                <h3>Upcoming Tours & Destination</h3>
                <div style={{margin: "20px 0"}} className="color-line"></div>
            </div>
            <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut
                nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque
                cepit sublime flexi nullus.</p>
            <button className="main-btn">LEARN MORE</button>
        </div>

        <div className="last-section-div1">
            <div className="last-section-img">
                <img src={upcomingimg1} alt="grid" width="350" />
                <img src= {upcomingimg3} alt="grid" width="350" />

            </div>
            <div className="last-section-img">
                <img src={upcomingimg2} alt="grid" width="350" />
                <img src={upcomingimg4} alt="grid" width="350" />
            </div>
        </div>
    </section>
  )
}

export default UpcomingTour