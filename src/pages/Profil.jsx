import React, { useState } from 'react';
import '../assets/css/Profil.css';
import '../assets/css/bootstrap-profiles.min.css';
import MaVoiture from '../components/MaVoiture';
import v1 from '../assets/v5.jpg'
import v2 from '../assets/v2.jpg'
import { ViewModule, ViewList , ExpandMore } from '@mui/icons-material';
import Voiture from "../components/Voiture"


function Profil() {
  const wd = [
    { taille: '100%', one: 'col-lg-4', two: 'col-lg-5', three: 'col-lg-3' },
    { taille: '33.33%', one: 'col-lg-12', two: 'col-lg-12', three: 'col-lg-12' },
  ]

  const [width, setWidth] = useState(wd[0]);
  const large = () => {
    setWidth(wd[0]);
  }
  const block = () => {
    setWidth(wd[1]);
  }

  const voitures = [
    {
      marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
      porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
      energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
      equipements: "Climatisation, GPS, Caméra de recul", images: v1,
      annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
      etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
      utilisateur_id: 1
    },
    {
      marque: "Porsche", modele: "911 Turbo", kilometrage: "15 000km", puissance: "500 CV", place: 2,
      porte: 2, consommation: "10 L/100km", etat_vehicule: "Occasion", transmission: "Manuelle",
      energie: "Essence", categorie: "Sport", freinage: "Céramique", couleur: "Rouge",
      equipements: "Climatisation, Sièges chauffants, Toit ouvrant", images: v2,
      annonce_id: 2, prix_initial: 50000, date_publication: "2024-01-13", date_fermeture: "2024-02-13",
      etat_annonce: "Disponible", description: "Une magnifique Porsche 911 Turbo de l'année 2020 avec un faible kilométrage.",
      utilisateur_id: 2
    },
  ]

  const [searchMarque, setSearchMarque] = useState('');
  const [searchTitre, setSearchTitre] = useState('');


  return (
    <div className="Profil">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">Follow</button>
                  <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>

            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <a href='#favoris' className="mb-0 link">mes favoris</a>
                  </li>
                  <li className="list-group-item d-flex align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: '#333333' }}></i>
                    <a href='#annonces' className="mb-0 link">mes annonces</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="row">
            <div className="col-lg-12 col-md-6" id='annonces'>
            <div className="row">
              mes annonces
            </div>
              <div className="row mt-2 mb-2">
                <div>
                  recent<ExpandMore  sx={{ fontSize:'20px',color:'grey'}}/>
                  <span style={{float:'right', color:'grey'}}><ViewModule sx={{fontSize : '25px', marginRight:'10px'}} onClick={block} /> <ViewList sx={{fontSize : '25px'}} onClick={large}/></span>
                </div>
              </div>
              <div className="annonce row">
                <div className="annonces row">
                  {voitures.map((details, index) => (
                    <Voiture key={index} details={details} wd={width} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6" id='favoris'>
              <div className="row">
                mes favoris
              </div>
              <div className="row mt-2 mb-2">
                <div>
                  recent<ExpandMore  sx={{ fontSize:'20px',color:'grey'}}/>
                  <span style={{float:'right', color:'grey'}}><ViewModule sx={{fontSize : '25px', marginRight:'10px'}} onClick={block} /> <ViewList sx={{fontSize : '25px'}} onClick={large}/></span>
                </div>
              </div>
              <div className="annonce row">
                <div className="annonces row">
                  {voitures.map((details, index) => (
                    <Voiture key={index} details={details} wd={width} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
