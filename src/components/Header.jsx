import '../assets/css/header.css';
import '../assets/js/header.js';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav className="navbar">
        <div className="cont">
            <div className="navbar-header">
                <a href="#">
                <img src={logo} style={{width:"120px"}} alt="Logo"/>
                </a>
            </div>

            <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
                <li><Link to={'/Profil'}>Profil</Link></li>
                <li><Link to={'/Message'}>Message</Link></li>
                <li><Link to={'/'}>Annonces</Link></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
