import React from 'react'
import Slider from '../../../components/Slider'
import './styles/SliderSection.css'
import SliderData1 from '../../../slider-data/SliderData1'
import SliderData2 from '../../../slider-data/SliderData2'
import SliderData3 from '../../../slider-data/SliderData3'

function SliderSection() {
    return (
        <section className='projsec'>
            <div className='projsec-div'>
                <h6>Adventure</h6>
                <h2>Water Sports</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                <Slider SlideData={SliderData1} />
            </div>

            <div className='projsec-div'>
                <h6>Snow Adventure</h6>
                <h2>Winter Sports</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                <Slider SlideData={SliderData2} />
            </div>

            <div className='projsec-div'>
                <h6>Forest Tours</h6>
                <h2>Camping</h2>
                <p>Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.</p>
                <Slider SlideData={SliderData3} />
            </div>
        </section>
    )
}

export default SliderSection








