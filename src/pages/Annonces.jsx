import { React, useState } from 'react';
import '../assets/css/Annonces.css';
import '../assets/css/bootstrap-profiles.min.css';
import ComboBox from '../components/ComboBox';
import RangeSlider from '../components/RangeSlider';
import Footer from '../components/Footer';
import Voiture from "../components/Voiture"
import Chip from '@mui/material/Chip'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack'
import v1 from '../assets/v5.jpg'
import v2 from '../assets/v2.jpg'
import v3 from '../assets/v2.jpeg'
import v4 from '../assets/v4.jpeg'
import fond from '../assets/fond.jpg'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Search from '@mui/icons-material/Search';

function Annonces() {
  const [prix, setPrix] = useState([1000000,10000000]);

  const ChangePrix = (event, value) => {
    setPrix(value);
  };

  const handleInput1Change = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setPrix([newValue, prix[1]]);
  };

  const handleInput2Change = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setPrix([prix[0], newValue]);
  };


  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const marque = [
    { title: 'Mercedes', id: 1 },
    { title: 'Porsche', id: 2 },
    { title: 'Maserati', id: 3 },
    { title: 'Mazda', id: 4 }
  ];

  const model = [
    { title: 'C63', id: 1 },
    { title: 'RS3', id: 2 },
    { title: 'AMG', id: 3 },
    { title: 'Class G', id: 4 }
  ];

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
    {
      marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
      porte: 4, consommation: "8 L/100km", etat_vehicule: "Occasion", transmission: "Automatique",
      energie: "Essence", categorie: "Sedan", freinage: "ABS", couleur: "Noir",
      equipements: "Climatisation, GPS, Caméra de recul", images: v3,
      annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
      etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
      utilisateur_id: 1
    },
  ];

  return (
    <>
      <div className='Annonces' style={{ backgroundColor: '#f4f4f4' }}>
        <div className="fond" style={{ width: "100%", objectFit: "cover", height: "200px" }}>
          <div className="search-voiture">
            <center>
              <input type="text" placeholder='   search ...' />
              <span className="icon-search"><Search /></span>
            </center>
          </div>
        </div>

        <div className="page-annonce" style={{ marginTop: '60px' }}>
          <div className="annonce-filtre">
            <div class="filtre">

              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Categorie</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="limousine" />
                    <FormControlLabel control={<Checkbox />} label="pick-up" />
                    <FormControlLabel control={<Checkbox />} label="camion" />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Transmission</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="manuel" />
                    <FormControlLabel control={<Checkbox />} label="pick-up" />
                    <FormControlLabel control={<Checkbox />} label="camion" />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Couleur</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="blanc" />
                    <FormControlLabel control={<Checkbox />} label="rouge" />
                    <FormControlLabel control={<Checkbox />} label="vert" />
                  </FormGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Marque</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-marque">
                    <ComboBox options={marque} label="marque" />
                  </div>
                  <br/>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Model</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-marque">
                    <ComboBox options={model} label="model" />
                  </div>
                  <br/>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Prix</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-prix">
                    <center>
                      <input type="text" value={prix[0]} onChange={handleInput1Change} />
                      <input type="text" value={prix[1]} onChange={handleInput2Change} />
                    </center>
                    <RangeSlider value={prix} onChange={ChangePrix} max={1000000000} />
                    <br/>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="annonce">
              <div className="annonces">
                {voitures.map((details, index) => (
                  <Voiture key={index} details={details} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Annonces;

