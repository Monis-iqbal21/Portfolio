import React from 'react'
import "./navbar.css"
import {Link} from 'react-router-dom'
import navMyLogo from '../../img/navMyLogo.png'


const Navbar = () => {
    return (
        <div className='nav_main'>
            <div className='img_div'>
                <img src={navMyLogo} className='nav_img'/>
            </div>


            <div className='nav_link_div'>
                <Link to='/'  className='links_nav'>Home</Link>
                <Link to="MyWork" className='links_nav'>My Work</Link>
                <Link to="contact" className='links_nav'>Contact Me </Link>
            </div>
        </div>
    )
}

export default Navbar