import React from 'react';
import '../Styles/Portfolio.css';
import Github from '../Assets/github.png';
import DownloadImg from '../Assets/download.png'
import Android from '../Assets/android.png'

function Portfolio() {
  return (
    <div className='page-container'>
        <h1 className='portfolio-title'> Porfólio </h1>
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
          <h5 className='image-label'>Baixar Sheipe  </h5>
          <img className='android'  src={Android} alt='Android logo' />
        </div>
        <p className='text'>Gerencie seus treinos na academia</p>
    </div>
  )
}

export default Portfolio   