import React from 'react'
import DownloadImg from '../Assets/download.png'
import '../Styles/Formation.css'

function Formation() {
  return (
    <div className='page-container formation'>
        <h1 className='formation-title'>Formação</h1>
        <div className='formation-content'>
          <p>Engenheiro Elétricista com ênfase em Computação</p>
          <p>Cursando Sistemas de Informação</p>
          <div className='curriculum-div'>
            <a href='../Assets/ThiagoVaz_CV.pdf' download='ThiagoVaz_CV.pdf'>
              <img className='download logo'  src={DownloadImg} alt='Download PDF' />
            </a>
            <p className='label'>Baixar currículo completo</p>
          </div>
        </div>
    </div>
  )
}

export default Formation