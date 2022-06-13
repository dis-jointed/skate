import React from 'react'
import Header from './Header'
import './Home.css'

function Home() {

    var name ="ssusg"

    return (
        <div className="home">
             <Header/>
            <img className="leftbt__image" src="/images/skateOne.jpg"/>
            <img className="left__arrow" src="/images/right-arrow.svg"/>
            <div className="right__sect">
            <div className="mid__section">
            <h1 className="sect__num">01</h1>
            <div className="hr__line"/>
            <h1 className="break__text">name</h1>
            <h1 className="one__step">ONE STEP AT A TIME</h1>
            <p>Fusce feugiat urna velit, eget luctus nisi varius a.
                 Sed felis sapien, euismod nec gravida mattis, porttitor in orci.</p>
                 <div className="watch__button">
                 <div className="video__line__one"/>
                 <h6 className="video__lbl">WATCH VIDEO</h6>
                 <div className="video__line"/>
                 </div>
                 
            </div>
            <img className="right_image" src="/images/sskateOne.jpg" />
          
            </div>

            <button className="btn" onClick={{

            }}></button>

        </div>
    )
}

export default Home
