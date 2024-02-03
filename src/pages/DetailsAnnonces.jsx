import React from 'react';
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

function DetailsAnnonces() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const carDetails = {
    marque: "Mercedes", modele: "C63", kilometrage: "20 000km", puissance: "300 CV", place: 5,
    porte: 4, consommation: "8 L/100km", etat_vehicule: "9", transmission: "9",
    energie: "Essence", categorie: "Sedan", freinage: "7", couleur: "Noir",
    equipements: "Climatisation, GPS, Caméra de recul", images: '',
    annonce_id: 1, prix_initial: 25000, date_publication: "2024-01-12", date_fermeture: "2024-02-12",
    etat_annonce: "Disponible", description: "Une superbe voiture Mercedes-Benz C63 de l'année 2017 en excellent état.",
    utilisateur_id: 1
  };

  return (
  <>
    <div className="container">
      <div className="details-annonces-container py-4">
        <div className="images">
          <div className="image">
          </div>
          <div className="autreImage">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="img">
              </div>
            ))}
          </div>
          <br />
          <div className="voiture-etat">
              <div className="details-etat">
                <div>Etat du vehicule</div>
                <progress max="10" value={carDetails.etat_vehicule}></progress>
              </div>
              <div className="details-etat">
                <div>Etat du frein</div>
                <progress max="10" value={carDetails.freinage}></progress>
              </div>
              <div className="details-etat">
                <div>Etat du transmission</div>
                <progress max="10" value={carDetails.transmission}></progress>
              </div>
          </div>
        </div>

        <div className="descriptions">
          <div className="description">
            <p className="titre">{carDetails.marque} {carDetails.modele}</p>
            <span className="vendeur"> {carDetails.date_publication}</span>
          </div>

          <div className="model">
            <div className="details-model">
              <p className="head-model">Puissance</p>
              <p className="type-model">{carDetails.puissance}</p>
            </div>
            <div className="details-model">
              <p className="head-model">Consommation</p>
              <p className="type-model">{carDetails.consommation}</p>
            </div>
          </div>

        <div className="table-description">
          <div className="ligne">
            <DriveEta className="icon" />
            <span className="col1">Transmission</span>
            <span className="col2">{carDetails.transmission}</span>
          </div>
          <div className="ligne">
            <EvStation className="icon" />
            <span className="col1">Énergie</span>
            <span className="col2">{carDetails.energie}</span>
          </div>
          <div className="ligne">
            <Category className="icon" />
            <span className="col1">Categorie</span>
            <span className="col2">{carDetails.categorie}</span>
          </div>
          <div className="ligne">
            <EvStation className="icon" />
            <span className="col1">Freinage</span>
            <span className="col2">{carDetails.freinage}</span>
          </div>
          <div className="ligne">
            <ColorLens className="icon" />
            <span className="col1">Couleur</span>
            <span className="col2">{carDetails.couleur}</span>
          </div>
          <div className="ligne">
            <PeopleAlt className="icon" />
            <span className="col1">Nombre de Places</span>
            <span className="col2">{carDetails.place}</span>
          </div>
          <div className="ligne">
            <MeetingRoom className="icon" />
            <span className="col1">Nombre de Portes</span>
            <span className="col2">{carDetails.porte}</span>
          </div>
        </div>

          <div className="contact">
            <span className="prix">{carDetails.prix_initial} Ariary</span>
            <a href="#" className="contacter">Contacter le vendeur</a>
          </div>

          <div className="proposition">
            <input type="submit" value={'Proposer un prix'}  onClick={handleClickOpen}/>
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
    <Footer/>
    </>
  );
}

export default DetailsAnnonces;

