import React, { useEffect, useState } from 'react';
import '../assets/css/Profil.css';
import '../assets/css/bootstrap-profiles.min.css';
import MaVoiture from '../components/MaVoiture';
import v1 from '../assets/v5.jpg'
import v2 from '../assets/v2.jpg'
import { ViewModule, ViewList , ExpandMore } from '@mui/icons-material';
import Voiture from "../components/Voiture"
import AnnonceService from '../services/annonceService';


function Profil() {
  const [favoris, setFavoris] = useState([]);
  const [annonces, setAnnonces] = useState([]);

  const wd = [
    { taille: '100%', one: 'col-lg-4', two: 'col-lg-5', three: 'col-lg-3' },
    { taille: '33.33%', one: 'col-lg-12', two: 'col-lg-12', three: 'col-lg-12' }
  ]

  const [width, setWidth] = useState(wd[0]);
  const large = () => {
    setWidth(wd[0]);
  }
  const block = () => {
    setWidth(wd[1]);
  }


  const [searchMarque, setSearchMarque] = useState('');
  const [searchTitre, setSearchTitre] = useState('');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData=()=>{
    AnnonceService.favoris()
    .then(result => {
      if (result.success) {
        setFavoris(result.data);
      }
    });
    AnnonceService.mesAnnonces()
    .then(result => {
      if (result.success) {
        setAnnonces(result.data);
      }
    })
  }

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
                  {favoris.map((details, index) => (
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
                  {annonces.map((details, index) => (
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
