import React from 'react'
import './Poster.css'
import posterimg from '../../img/posterimg.png'
const Poster = props => {
    return (
        <div className='poster_main_div'>
            <div>
                <img src={posterimg} className='posterImage'/>
            </div>
            <div className='poster_description_div'>
              <h1>I'm <span style={{color:"rgb(12, 75, 134)",fontSize:"larger", fontFamily:"'Brush Script MT', cursive",}}> MONIS IQBAL</span></h1>
              <h2>A Front End Developer</h2>
              
              <p>I specialize in bringing digital visions to life, ensuring seamless user interactions and
                 captivating designs. With a knack for front-end development, I strive to create web experiences
                  that leave a lasting impression.</p>
            </div>
        </div>
    )
}


export default Poster