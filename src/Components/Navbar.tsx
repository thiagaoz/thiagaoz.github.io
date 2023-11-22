
import { Link } from "react-scroll";
import '../Styles/Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
        <span className='name'>Thiago Vaz</span>
        <div className='links-div'>
            <Link className='link' activeClass="active" to="home" spy={true} smooth={true}>Início</Link>
            <Link className='link' to="formation" spy={true} smooth={true} offset={-140}>Formação</Link> 
            <Link className='link' to="portfolio" spy={true} smooth={true} offset={-140}>Porfólio</Link> 
            <Link className='link' to="contact" spy={true} smooth={true}>Contato</Link>
        </div>
        {/*
        <div className="theme-div">
          <button>Dark</button>
          <button>Light</button>
        </div>
        */}
    </div>
  )
}

export default Navbar