import React from 'react'
import '../Styles/Home.css';
import myPhoto from '../Assets/profile-front.png';
import JsLogo from '../Assets/javascript.png';
import TsLogo from '../Assets/typescript.png';
import ReactLogo from '../Assets/react.png';
import Sass from '../Assets/sass-logo.png'

function Home() {
  return (
    <div className='home'>
      <p className='name'>Thiago Vaz</p>
      <img className='photo' src={myPhoto} alt='Profile' />
      <p className='frontend'>&#60;Mobile_Dev /&#62;</p>
      <div className="logos-div">
          <img className='ts-logo logo' src={TsLogo} alt='typescript' />
          <img className='react-logo logo' src={ReactLogo} alt='React.js' />
          
      </div>
    </div>
  )
}

export default Home