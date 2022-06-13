import React from 'react'
import './Header.css'

function Header() {




    return (
        <div className="header">
            <h3 className="logoo">S.</h3>
            <div className="menu__cont">
            <div className="menu__nav">
                <img src="/images/menu.svg" />
                <a href="">
                    About
                </a>
                <a href="">
                    Contact
                </a>
            </div>

            <div className="iconsheader">
                <a href="https://www.behance.net/">
                <img src="/images/behance.svg" />
                </a>
                <a href="https://dribbble.com/">
                <img src="/images/dribble.svg" />
                </a>
                <a href="https://www.instagram.com/">
                <img src="/images/instagram.svg" />
                </a>
                
            </div>
            </div>
        
        </div>
    )
}

export default Header
