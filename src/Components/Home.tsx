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
      <img className='photo' src={myPhoto} alt='Profile' />
      <p className='name'>Thiago Vaz</p>
      <p className='frontend'>&#60;Frontend_Dev /&#62;</p>
      <div className="logos-div">
          <img className='js-logo logo' src={JsLogo} alt='javascript' />
          <img className='ts-logo logo' src={TsLogo} alt='typescript' />
          <img className='react-logo logo' src={ReactLogo} alt='React.js' />
          <img className='sass-logo logo' src={Sass} alt='Sass' />
      </div>
    </div>
  )
}

export default Home