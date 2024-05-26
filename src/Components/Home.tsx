import '../Styles/Home.css';
import myPhoto from '../Assets/profile-front.png';
import TsLogo from '../Assets/typescript.png';
import JsLogo from '../Assets/javascript.png';
import ReactLogo from '../Assets/react.png';
import Sass from '../Assets/sass-logo.png';

function Home() {
  return (
    <div className='home'>
      <p className='name'>Thiago Vaz</p>
      <img className='photo' src={myPhoto} alt='Profile' />
      <p className='my-title'>&#60;Desenvolvedor Front-end/&#62;</p>
      <div className="logos-div">
          <img className='ts-logo logo' src={JsLogo} alt='typescript' />
          <img className='ts-logo logo' src={TsLogo} alt='typescript' />
          <img className='react-logo logo' src={ReactLogo} alt='React.js' />
          <img className='sass-logo logo' src={Sass} alt='Sass' />
          
      </div>
    </div>
  )
}

export default Home