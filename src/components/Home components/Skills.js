import React from 'react'
import './skills.css'
import html from '../../img/html.png'
import css from '../../img/css.svg.png'
import js from '../../img/js.png'
import reactimg from '../../img/react.png'
import wp from '../../img/wp.png'
import Python from '../../img/python.png'

const Skills = () => {
    return (
        <div className='skills_main_div'>
            {/* <div className='skills_div'> */}
            <div className="center">
                <div className='skill'>70%
                </div>
                <p style={{color:"white",}}>html</p>
            </div>
            <div className="center">
                <div className='skill'>60%
                </div>
                <p style={{color:"white",}}>Css</p>
            </div>
            <div className="center">
                <div className='skill'>40%
                </div>
                <p style={{color:"white",}}>JavaScript</p>
            </div>
            <div className="center">
                <div className='skill'>60%
                </div>
                <p style={{color:"white",}}>React JS</p>
            </div>
            <div className="center">
                <div className='skill'>40%
                </div>
                <p style={{color:"white",}}>WordPress</p>
            </div>
            

            {/* <div className='skills_img'>
                    <img src={html} className='skills_img' /></div>
                <p>HTML</p>

            </div>
            <div className='skills_div'>
                <div className='skills_img'>
                    <img src={css} className='skills_img' /></div>
                <p>css</p>
            </div>
            <div className='skills_div'>
                <img src={js} className='skills_img' />
                <p>java script</p>
            </div>
            <div className='skills_div'>
                <img src={reactimg} className='skills_img' />
                <p>React js</p>
            </div>
            <div className='skills_div'>
                <img src={wp} className='skills_img' />
                <p>wordpress</p>
            </div>
            <div className='skills_div'>
                <img src={Python} className='skills_img' />
                <p>Python</p> */}
            {/* </div> */}
        </div>
    )
}

export default Skills