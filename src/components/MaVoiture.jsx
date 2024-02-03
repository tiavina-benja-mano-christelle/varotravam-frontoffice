import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Voiture.css';


const MaVoiture = ({ details }) => {
  const { titre, marque, model, kilometrage } = details;

  return (
    <div className="car">
    <div className="voiture">
      <div className="voiture-image">
        
      </div>
      <div className="voiture-description">
        <div className="voiture-titre">
          {titre}
        </div>
        <div className="model-marque">
          <span>{marque}</span>
          <span>{model}</span>
        </div>

        <div className="table-description">
          <table border={1}>
            <tbody>
              <tr>
                <td>Kilometrage</td>
                <td>Model</td>
                <td>Marque</td>
              </tr>
              <tr className='table-header'>
                <td>{kilometrage}</td>
                <td>{model}</td>
                <td>{marque}</td>
              </tr>
              <tr>
                <td>Kilometrage</td>
                <td>Model</td>
                <td>Marque</td>
              </tr>
              <tr className='table-header'>
                <td>{kilometrage}</td>
                <td>{model}</td>
                <td>{marque}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="voiture-voir">
        <Link className="btn1 btn btn-primary" to="/DetailsAnnonces">Voir</Link>
        <Link className="supprimer" to="/Message">Supprimer</Link>
      </div>
    </div>
    </div>
  );
}

export default MaVoiture;
