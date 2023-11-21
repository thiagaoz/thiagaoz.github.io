import React from 'react';
import '../Styles/Portfolio.css';
import Github from '../Assets/github.png';
import DownloadImg from '../Assets/download.png'

function Portfolio() {
  return (
    <div className='page-container'>
        <h1 className='portfolio-title'> Porfolio </h1>
        <div className='portfolio-div'>
          <img className='github logo' src={Github} alt='Github logo' 
              onClick={()=> window.open('https://github.com/thiagaoz', "_blank")}></img>
          <p className='image-label'>github.com/thiagaoz</p>
        </div>
        <div className='portfolio-div'>
          <a href='https://drive.google.com/uc?export=download&id=1HM-uDfb0KgmqP912wCZ1kNp8pxMPcuk4' 
            download='ThiagoVaz_CV.pdf' target="_blank" rel="noreferrer" >
            <img className='download logo'  src={DownloadImg} alt='Download PDF' />
          </a>
          <p className='image-label'>Sheipe (app)</p>
        </div>
        <p className='text'>Meu app para gerenciar seus treinos na academia</p>
    </div>
  )
}

export default Portfolio   