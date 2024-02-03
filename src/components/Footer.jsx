import React from 'react';
import '../assets/css/Footer.css';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Call from '@mui/icons-material/Call';
import User from '@mui/icons-material/Person';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h4>À propos de nous</h4>
                            <p>
                                Un groupe dynamique composé de trois passionnés de l'automobile et d'une enthousiaste adepte de la technologie s'est réuni pour créer un site web novateur dédié à la vente de voitures d'occasion. Unissant leurs compétences en développement web, design, et expertise automobile, cette équipe diversifiée combine la passion pour les véhicules avec la vision de simplifier l'expérience d'achat en ligne.
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h4 style={{marginLeft:'40px'}}>Contact</h4>
                            <ul className="address1">
                                <li><Instagram/>  Manoo.andriasat</li>
                                <li><Facebook/><a href="https://www.facebook.com/mano.andriasat">  Mano Andriasat</a></li>
                                <li><Call/><a href="tel:12 34 56 78 90">  0343373351</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h4 style={{marginLeft:'40px'}}>Matricule</h4>
                            <ul className="address1">
                                <li><User/>  <strong>ETU001946</strong></li>
                                <li><User/>  ETU002025</li>
                                <li><User/>  ETU002025</li>
                                <li><User/>  ETU002060</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <p className="copyright text-uppercase">Copyright © 2024</p>
                        </div>
                        <div className="col-sm-7">
                            <ul>
                                <li><a href="#">Accueil</a></li>
                                <li><a href="#">À propos de nous</a></li>
                                <li><a href="#">Nos services</a></li>
                                <li><a href="#">Contactez-nous</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

