import React from 'react'
import './styles/UpcomingEvents.css'
import  EventImg from '../../../assets/quote-1.png'
import  EventImg1 from '../../../assets/event-1.jpg'
import  EventImg2 from '../../../assets/event-2.jpg'
function UpcomingEvent() {
    return (
        <section className="event-section">

            <div className="event-section-div">
                <img src={EventImg} alt="quote" height="60" />
                
                <div className="event-section-div-1">
                    <p>"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</p>
                    <p>- Adam Sendler</p>
                </div>
            </div>

            <div className="event-section-div-2">
                <h2>Upcoming Events</h2>
                <span className="color-line"></span>
            </div>

            <div className="event-section-div-3">
                
                <div className="event-section-div-4">
                    <img src={EventImg1}  alt="event-1" height="300" />
                    <h5>Everest Camp Trek</h5>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    <button className="main-btn">LEARN MORE</button>
                </div>

                <div className="event-section-div-4">
                    <img src={EventImg2} alt="event-2" height="300" />
                    <h5>Walking Holidays</h5>
                    <p>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</p>
                    <button className="main-btn">LEARN MORE</button>
                </div>


            </div>
        </section>
    )
}

export default UpcomingEvent