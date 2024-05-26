import React from 'react';
import '../Styles/Portfolio.css';
import Github from '../Assets/github.png';
import Brasil from '../Assets/brasil.png';
import France from '../Assets/france.png';
import Usa from '../Assets/usa.png';
import Nihon from '../Assets/nihon.png';
import DownloadImg from '../Assets/download.png'
import Android from '../Assets/android.png'
//flags by <a href="https://www.freepik.com/icon/brazil_5372656#fromView=search&page=1&position=68&uuid=f80c1c3c-7538-481f-9ccf-c5d0b8a78b59">Icon by Icon.doit</a>
function Portfolio() {
  return (
    <div className='page-container'>
        <h1 className='portfolio-title'> Porfólio </h1>
          
          <div className='flags-div'>
            <div className='skill'>
              <img className='brasil flag' src={Brasil} alt='Bandeira do Brasil'></img>
              <pre className='gauge'>//////////   //////////   //////////   //////////</pre>
            </div>
            <div className='skill'>
              <img className='usa flag' src={Usa} alt='Bandeira dos Estados Unidos da América'></img>
              <pre className='gauge'>//////////   //////////   //////////</pre>  
            </div>
            
            <div className='skill'>
              <img className='france flag' src={France} alt='Bandeira da França'></img>
              <pre className='gauge'>//////////</pre>  
            </div>
            
            <div className='skill'>
              <img className='nihon flag' src={Nihon} alt='Bandeira do Japão'></img>
              <pre className='gauge'>//////////</pre>  
            </div>
            
    
          </div>
        
    </div>
  )
}

export default Portfolio    