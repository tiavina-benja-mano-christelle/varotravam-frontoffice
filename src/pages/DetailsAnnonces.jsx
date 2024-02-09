import React, { useState } from 'react';
import '../assets/css/DetailsAnnonces.css';
import { DriveEta, EvStation, Category, ColorLens, PeopleAlt, MeetingRoom } from '@mui/icons-material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from '../components/Footer';
import v1 from '../assets/v5.jpg'
import v2 from '../assets/v2.jpg'
import { useParams } from 'react-router-dom';
import AnnonceService from '../services/annonceService';
import { useEffect } from 'react';

function DetailsAnnonces() {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [annonce, setAnnonce] = useState({
    vehicule: {
      marque: '',
      modele: '',
      transmission: '',
      couleur: '',
      etat: 0,
      energie: '',
      puissance: '',
      consommation: '',
      place: '',
      porte: '',
      equipements: []
    }
  });

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData=()=>{
    AnnonceService.detailAnnonce(id)
    .then(result => {
      if (result.success) {
        setAnnonce(result.data);
      }
    })
    .catch(error => alert(error))
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const annonce = {
  //   marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
  //   porte: 4, consommation: "8 L/100km", etat_vehicule: "9", transmission: "9",
  //   energie: "Essence", categorie: "Sedan", freinage: "7", couleur: "Noir",
  //   equipements: "Climatisation, GPS, Caméra de recul", images: '',
  //   annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
  //   etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
  //   utilisateur_id: 1
  // };

  return (
    <>
      <div className="container">
        <div className="details-annonces-container py-4">
          <div className="images">
            <div className="image">
              <img
                src={v2}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px', zIndex: 1 }}
              />
            </div>
            <div className="autreImage">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="img">
                  <img
                    src={v1}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px', zIndex: 1 }}
                  />
                </div>
              ))}
            </div>
            <br />
            <div className="voiture-etat">
              <div className="details-etat">
                <div>Etat du vehicule</div>
                <progress max="10" value={annonce.vehicule.etat}></progress>
              </div>
              {/* <div className="details-etat">
                <div>Etat du frein</div>
                <progress max="10" value={annonce.vehicule.freinage}></progress>
              </div>
              <div className="details-etat">
                <div>Etat du transmission</div>
                <progress max="10" value={annonce.vehicule.transmission}></progress>
              </div> */}
            </div>
          </div>

          <div className="descriptions">
            <div className="description">
              <p className="titre">{annonce.vehicule.marque} {annonce.vehicule.modele} {annonce.vehicule.annee}</p>
              <span className="vendeur"> {annonce.datePublication}</span>
            </div>

            <div className="model" style={{height: 'max-content'}}>
              <div className="details-model">
                <p className="head-model">Puissance</p>
                <p className="type-model">{annonce.vehicule.puissance}</p>
              </div>
              <div className="details-model">
                <p className="head-model">Consommation</p>
                <p className="type-model">{annonce.vehicule.consommation}</p>
              </div>
              
            </div>

            <div className="table-description">
              <div className="ligne">
                
                <span className="col1"><DriveEta className="icon" /><span> Transmission</span></span>
                <span className="col2">{annonce.vehicule.transmission}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><EvStation className="icon" /><span> Énergie</span></span>
                <span className="col2">{annonce.vehicule.energie}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><Category className="icon" /><span> Categorie</span></span>
                <span className="col2">{annonce.vehicule.categorie}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><EvStation className="icon" /><span> Freinage</span></span>
                <span className="col2">{annonce.vehicule.freinage}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><ColorLens className="icon" /><span> Couleur</span></span>
                <span className="col2">{annonce.vehicule.couleur}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><PeopleAlt className="icon" /><span> Nombre de Place</span>s</span>
                <span className="col2">{annonce.vehicule.place}</span>
              </div>
              <div className="ligne">
                
                <span className="col1"><MeetingRoom className="icon" /><span> Nombre de Portes</span></span>
                <span className="col2">{annonce.vehicule.porte}</span>
              </div>
            </div>
            {annonce.vehicule.equipements.map((element, index) => 
              <div className="details-model">
                <p className="head-model">{element}</p>
              </div>
              )}
            <div className="contact">
              <span className="prix">{annonce.prixInitial} Ariary</span>
              <a href="#" className="contacter">Contacter le vendeur</a>
            </div>

            <div className="proposition">
              <input type="submit" value={'Proposer un prix'} onClick={handleClickOpen} />
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const formJson = Object.fromEntries(Array.from(formData.entries()));
                  const email = formJson.email;
                  console.log(email);
                  handleClose();
                },
              }}
            >
              <DialogTitle>Propositon</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Proposer un prix raisonnable pour cette voiture
                </DialogContentText>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="email"
                  label="votre prix"
                  type="number"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>annuler</Button>
                <Button type="submit">envoyer</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DetailsAnnonces;

