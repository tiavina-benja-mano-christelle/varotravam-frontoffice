import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Voiture.css';
import v1 from '../assets/v1.jpeg'
import StarBorderIcon from '@mui/icons-material/Star';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Camera from '@mui/icons-material/CameraAlt';

const Voiture = ({ details }) => {
  const {
    marque,
    modele,
    kilometrage,
    puissance,
    place,
    porte,
    consommation,
    etat_vehicule,
    transmission,
    energie,
    categorie,
    freinage,
    couleur,
    equipements,
    images,
    annonce_id,
    prix_initial,
    date_publication,
    date_fermeture,
    etat_annonce,
    description,
    utilisateur_id
  } = details;
  const [isStarActive, setStarActive] = useState(false);

  const handleStarClick = () => {
    setStarActive(!isStarActive);
  };
  return (
    <div className="car">
      <div className="voiture">
    <div className="voiture-image">
      <StarBorderIcon
        className={`star-icon ${isStarActive ? 'active' : ''}`}
        onClick={handleStarClick}
      />
      
       <p className="camera">
       <Camera/>
       <span>5</span>
       </p>
      
      <img
        src={images}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px', zIndex: 1 }}
      />
    </div>

        <div className="voiture-description">
          <div className="voiture-titre">{marque} {modele}</div>

          <div className="table-description">
            <table border={1}>
              <tbody>
                <tr>
                  <td>Kilometrage</td>
                  <td>Puissance</td>
                  <td>Place</td>
                </tr>
                <tr className='table-header'>
                  <td>{kilometrage}</td>
                  <td>{puissance}</td>
                  <td>{place}</td>
                </tr>
                <tr>
                  <td>Porte</td>
                  <td>Consommation</td>
                  <td>État du véhicule</td>
                </tr>
                <tr className='table-header'>
                  <td>{porte}</td>
                  <td>{consommation}</td>
                  <td>{etat_vehicule}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="voiture-prix">
          	 20.000.000 MGA  <LocalOffer style={{fontSize:'18px',marginTop:'-4px'}}/>
          </div>
        </div>

        <div className="voiture-voir">
          <Link className="btn1 btn btn-primary" to={{ pathname: `/DetailsAnnonces`, state: { details } }}>Voir les details</Link>
          <Link className="btn2 btn btn-primary" to={`/Message/${utilisateur_id}`}>Contacter</Link>
        </div>
      </div>
    </div>
  );
}

export default Voiture;

