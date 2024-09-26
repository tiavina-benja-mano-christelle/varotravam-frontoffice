import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Voiture.css';
import v1 from '../assets/v1.jpeg'
import StarBorderIcon from '@mui/icons-material/Star';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Camera from '@mui/icons-material/CameraAlt';
import img from '../assets/default.jpg';
import v1 from '../assets/v5.jpg'

const Voiture = ({ details , wd}) => {
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
    utilisateurId,
    vehicule,
    prixInitial
  } = details;
  const [isStarActive, setStarActive] = useState(false);

  const handleStarClick = () => {
    setStarActive(!isStarActive);
  };

  const style = {
    width : wd.taille
  }

  const one = "voiture-image " + wd.one;
  const two = "voiture-description " + wd.two;
  const three = "voiture-voir " + wd.three;

  return (
    <div className="car" style={style}>
      <div className="voiture row">
        <div className={one}>
          <StarBorderIcon
            className={`star-icon ${isStarActive ? 'active' : ''}`}
            onClick={handleStarClick}
          />

          <p className="camera">
            <Camera />
            <span>{ vehicule.images === null ? 0 : vehicule.images.length }</span>
          </p>

          <img
            src={(vehicule.images !== null && vehicule.images.length!==0) ? vehicule.images[0] : v1}
          />
        </div>

        <div className={two}>
          <div className="voiture-titre">{vehicule.marque} {vehicule.modele}</div>

          <div className="table-description">
            <table border={1}>
              <tbody>
                <tr>
                  <td>Kilometrage</td>
                  <td>Puissance</td>
                  <td>Place</td>
                </tr>
                <tr className='table-header'>
                  <td>{vehicule.kilometrage}</td>
                  <td>{vehicule.puissance}</td>
                  <td>{vehicule.place}</td>
                </tr>
                <tr>
                  <td>Porte</td>
                  <td>Consommation</td>
                  <td>État du véhicule</td>
                </tr>
                <tr className='table-header'>
                  <td>{vehicule.porte}</td>
                  <td>{vehicule.consommation}</td>
                  <td>{vehicule.etat} / 10</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="voiture-prix">
            {prixInitial.toLocaleString()} MGA  <LocalOffer style={{ fontSize: '18px', marginTop: '-4px' }} />
          </div>
        </div>

        <div className={three}>
          <Link className="btn1 btn btn-primary" to={{ pathname: `/DetailsAnnonces/${details.id}`, state: { details } }}>Voir les details</Link>
          <Link className="btn2 btn btn-primary" to={`/Message/${utilisateurId}`}>Contacter</Link>
        </div>
      </div>
    </div>
  );
}

export default Voiture;

