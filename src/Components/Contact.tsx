import React from 'react';
import '../Styles/Contact.css';

import Linkedin from '../Assets/linkedin.png';

function Contact() {
  const contactRef = React.createRef<HTMLDivElement>();
  return (
    <div className='page-container' ref={contactRef}>
        <h1 className='contact-title'>Contato</h1>
        <div className='contact-content'>
          <p>thiagaoz@proton.me</p>
          <p>linkedin.com/in/thiagaovaz</p>
          <div className='contact-logos'>
            <img className='linkedin logo' src={Linkedin} alt='Linkedin logo'
              onClick={()=> window.open('https://www.linkedin.com/in/thiagaovaz/', '_blank')}></img>
          </div>
        </div>
    </div>
  )
}

export default Contact