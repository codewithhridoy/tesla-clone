import React from 'react'
import './Header.css'
import TeslaLogo from '../assests/teslaLogoSmall.svg'


const Header = () => {
    return (
        <div className='header'>
            <div className="header_logo">
                <img src={TeslaLogo} alt="TeslaLogo"/>
            </div>
        </div>
    )
}

export default Header
