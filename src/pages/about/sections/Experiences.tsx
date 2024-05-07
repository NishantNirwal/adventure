import React from 'react'
import './styles/Experiences.css'
function Experiences() {
    return (
        <section className='experiences'>
            <div className='experiences-div1'>
                <h4>Extraordinary Experiences</h4>
                <span className='color-line'></span>
                <p>Click edit button to change this text. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit.</p>
                <p>Click edit button to change this text. Lorem ipsum dolor sit<br /> amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='experiences-div2'>
                <h4>Our Core Values</h4>
                <span className='color-line'></span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br />tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <ul>
                     <li> Locavit liberioris possedit</li>
                    <li>Diremit mundi mare undae</li>
                    <li>Spectent tonitrua mutastis</li>
                </ul>
            </div>
        </section>
    )
}

export default Experiences