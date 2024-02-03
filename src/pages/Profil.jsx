import React, { useState } from 'react';
import '../assets/css/Profil.css';
import '../assets/css/bootstrap-profiles.min.css';
import MaVoiture from '../components/MaVoiture';

function Profil() {
  const voitures = [
    { titre: "Mercedes-Benz C63 2017", marque: "Mercedes", model: "C63", kilometrage: "20 000km" },
    { titre: "Porsche 911 Turbo 2020", marque: "Porsche", model: "911 Turbo", kilometrage: "15 000km" },
    { titre: "Maserati GranTurismo 2019", marque: "Maserati", model: "GranTurismo", kilometrage: "25 000km" }
  ];

  const [searchMarque, setSearchMarque] = useState('');
  const [searchTitre, setSearchTitre] = useState('');

  const filteredVoitures = voitures.filter(voiture =>
    voiture.marque.toLowerCase().includes(searchMarque.toLowerCase()) &&
    voiture.titre.toLowerCase().includes(searchTitre.toLowerCase())
  );

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
            <div className="card mb-4" id='annonces'>
              <div className="titre-liste">
                <span>
                  <input type="text" placeholder="Rechercher par titre" onChange={(e) => setSearchTitre(e.target.value)} />
                </span>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="titre-liste">
                    <span>Mes annonces</span>
                  </div>
                  {filteredVoitures.map((details, index) => (
                    <MaVoiture key={index} details={details} />
                  ))}
                </div>
              </div>
            </div>

            <div className="card mb-4" id='favoris'>
              <div className="card-body">
                <div className="row">
                  <div className="titre-liste">
                    <span>Mes favoris</span>
                  </div>
                  {filteredVoitures.map((details, index) => (
                    <MaVoiture key={index} details={details} />
                  ))}
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
