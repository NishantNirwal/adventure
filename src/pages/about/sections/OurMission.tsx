import React from 'react'
import './styles/OurMission.css'
import AboutImg from '../../../assets/about-mission.jpg'
function OurMission() {
    return (
        <section className='mission'>
            <div className='mission-div'>
                <h2>Our Mission</h2>
                <span className='color-line'></span>
                <p>Click edit button to change this text. Lorem ipsum dolor sit <br/> amet, adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit <br/> amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br/> ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div>
                <img src={AboutImg} alt='image' height={350} />
            </div>
        </section>
    )
}

export default OurMission