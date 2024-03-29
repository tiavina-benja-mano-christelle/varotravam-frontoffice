import '../assets/css/header.css';
import '../assets/js/header.js';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {
  return (
    <nav class="navbar">
        <div class="cont">
            <div class="navbar-header">
                <a href="#">
                <img src={logo} style={{width:"120px"}}/>
                </a>
            </div>

            <div class="navbar-menu" id="open-navbar1">
            <ul class="navbar-nav">
                <li><Link to={'/Profil'}>Profil</Link></li>
                <li><Link to={'/Message'}>Message</Link></li>
                <li><Link to={'/'}>Annonces</Link></li>
                <li><Link to={'/Login'}>Login</Link></li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header
