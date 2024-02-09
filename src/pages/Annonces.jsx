import { React, useState } from 'react';
import '../assets/css/Annonces.css';
import '../assets/css/bootstrap-profiles.min.css';
import ComboBox from '../components/ComboBox';
import RangeSlider from '../components/RangeSlider';
import Footer from '../components/Footer';
import Voiture from "../components/Voiture"
import v1 from '../assets/v5.jpg'
import v2 from '../assets/v2.jpg'
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel , Checkbox , Typography , Accordion , AccordionSummary , AccordionDetails} from '@mui/material';
import { ViewModule, ViewList , RestartAlt , Square, Search , ExpandMore } from '@mui/icons-material';
import { useEffect } from 'react';
import CategorieService from '../services/categorieService';
import CouleurService from '../services/couleurService';
import MarqueService from '../services/marqueService';
import TransmissionService from '../services/transmissionService';
import AnnonceService from '../services/annonceService';
import { Button } from 'bootstrap';
import { Form } from 'react-router-dom';
import ModeleService from '../services/modeleService';


function Annonces() {
  const [annonces, setAnnonces] = useState([])
  const [categories, setCategories] = useState([]);
  const [transmissions, setTransmissions] = useState([]);
  const [marques, setMarques] = useState([]);
  const [modeles, setModeles] = useState([]);
  const [couleurs, setCouleurs] = useState([]);
  const [prix, setPrix] = useState([1000000, 10000000]);
  const [postData, setPostData] = useState({
    categories: [],
    transmissions: [],
    couleurs: [],
    marques: [],
    modeles: [],
    prixMin: prix[0],
    prixMax: prix[1]
  })
  

  const handleFilter=()=>{
    let result = {
        categories: [],
        transmissions: [],
        marques: [],
        couleurs: [],
        energie: [],
        prixMin: postData.prixMin,
        prixMax: postData.prixMax
    };
    postData.categories.forEach(element => result.categories.push(element.id));
    postData.transmissions.forEach(element => result.transmissions.push(element.id));
    postData.couleurs.forEach(element => result.couleurs.push(element.id));
    postData.marques.forEach(element => result.marques.push(element.id));
    postData.modeles.forEach(element => result.modeles.push(element.id));


    AnnonceService.filter(result)
    .then(result => {
      if(result.success) {
        setAnnonces(result.data);
      }
    })
    .catch(error => console.log(error));
  }


  const checkIn=(cat)=>{
    postData.categories.forEach(categorie => {
      if (categorie.id === cat.id) {
        return true;
      }
    })
    return false;
  }

  const testPostData=()=>{
    console.log(postData);
  }

  const fetchData=()=>{

    AnnonceService.all() 
    .then(result => {
      if (result.success) {
        setAnnonces(result.data);
      }
    })
    .catch(error => alert(error.error));

    CategorieService.all()
    .then(result => {
      if (result.success) {
        setCategories(result.data);
      }
    })
    .catch(error => alert(error.error));

    CouleurService.all()
    .then(result => {
      if (result.success) {
        setCouleurs(result.data);
      }
    })
    .catch(error => alert(error.error));
    
    MarqueService.all()
    .then(result => {
      if (result.success) {
        let tempData = result.data;
        tempData.forEach(data => {
          data.value = data
          data.title = data.nom;
        });
        setMarques(tempData);
      }
    })
    .catch(error => alert(error.error));
    
    TransmissionService.all()
    .then(result => {
      if (result.success) {
        setTransmissions(result.data);
      }
    })
    .catch(error => alert(error.error));
  }

  useEffect(() => {
    fetchData();
  }, [])

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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


  const ChangePrix = (event, value) => {
    setPrix(value);
    let tempData = {...postData};
    tempData.prixMin = prix[0];
    tempData.prixMax = prix[1];
    setPostData(tempData);
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

  const handleChangeCategories = (categorie) => {
    const index = postData.categories.indexOf(categorie);
    if (index !== -1) {
      postData.categories.splice(index, 1);
    } else {
      postData.categories.push(categorie);
    }
  };

  const handleChangeCouleurs = (couleur) => {
    const index = postData.couleurs.indexOf(couleur);
    if (index !== -1) {
      postData.couleurs.splice(index, 1);
    } else {
      postData.couleurs.push(couleur);
    }
  };

  const handleChangeTransmissions = (transmission) => {
    const index = postData.transmissions.indexOf(transmission);
    if (index !== -1) {
      postData.transmissions.splice(index, 1);
    } else {
      postData.transmissions.push(transmission);
    }
  };

  const handleChangeMarque=(value)=>{
    let tempData = {...postData};
    tempData.marques = value;
    setPostData(tempData);

    const idMarques = [];
    value.forEach(element => idMarques.push(element.id));

    ModeleService.marques(idMarques)
    .then(result => {
      if (result.success) {
        let tempData = result.data;
        tempData.forEach(data => {
          data.value = data
          data.title = data.marque + " " + data.nom ;
        });
        setModeles(tempData);
      }
    })
    .catch(error => alert(error));
  }

  const handleChangeModele=(value)=>{
    let tempData = {...postData};
    tempData.modeles = value;
    setPostData(tempData);
  }

  return (
    <>
      <div className='Annonces' style={{ backgroundColor: '#f4f4f4' }}>
        <div className="fond">
          <div className="search-voiture row">
            <input className='col-lg-11' type="text" placeholder='   mot clé ...' />
            <span className="icon-search col-lg-1"><center><Search className='icon' /></center></span>
          </div>
        </div>
        <div className="page-annonce">
          <div className="row">
            <div className="filtre col-lg-3 col-md-6">
              <div className="filtre-titre">
                Filtre avancée
                <button style={{ float: 'right' , border:'none' , backgroundColor:'black',marginBottom:'3px'}} className='text-end' onClick={()=>handleFilter()}>
                  <RestartAlt sx={{color:'white'}}/>
                </button>
              </div>
              <Accordion >
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Categorie</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {categories.map((categorie, index) => 
                    <FormControlLabel name='categories' key={index} control={<Checkbox name='categories' value={categorie} onChange={()=>handleChangeCategories(categorie)}/>} label={categorie.nom} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Transmission</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <FormGroup>
                    {transmissions.map((transmission, index) => 
                    <FormControlLabel key={index} control={<Checkbox name='transmissions' onChange={()=>handleChangeTransmissions(transmission)}/>} label={transmission.nom} />
                    )}
                  </FormGroup>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Couleur extérieur</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <center>
                    <div className="all-colors">
                      {couleurs.map((couleur, index) => 
                      <Checkbox onChange={()=>handleChangeCouleurs(couleur)} key={index} {...label} sx={{ color: couleur.valeur, '&.Mui-checked': { color: couleur.valeur } }} icon={<Square />} />
                      )}
                    </div>
                  </center>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Marque</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-marque">
                    
                    <ComboBox inputValue={postData.marques} options={marques} label="marque" handleChange={handleChangeMarque}/>
                  </div>
                  <br />
                </AccordionDetails>
              </Accordion>

              <Accordion disabled={modeles.length === 0 && true}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Model</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-marque">
                    <ComboBox options={modeles} label="model" inputValue={postData.modeles} handleChange={handleChangeModele}/>
                  </div>
                  <br />
                </AccordionDetails>
              </Accordion>

              <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1-content" id="panel1-header">
                  <Typography className='filtre-name'>Prix</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="filtre-prix">
                    <center>
                      <input type="text" key={0} value={prix[0]} onChange={handleInput1Change} />
                      <input type="text" key={1} value={prix[1]} onChange={handleInput2Change} />
                    </center>
                    <RangeSlider value={[prix[0], prix[1]]} onChange={ChangePrix} max={1000000000} />
                    <br />
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="col-lg-9 col-md-6">
              <div className="row mt-2 mb-2">
                <div>
                  recent<ExpandMore  sx={{ fontSize:'20px',color:'grey'}}/>
                  <span style={{float:'right', color:'grey'}}><ViewModule sx={{fontSize : '25px', marginRight:'10px'}} onClick={block} /> <ViewList sx={{fontSize : '25px'}} onClick={large}/></span>
                </div>
              </div>
              <div className="annonce row">
                <div className="annonces row">
                  {annonces.map((details, index) => (
                    <>
                    <Voiture key={index} details={details} wd={width} />
                    <Voiture key={index} details={details} wd={width} />
                    <Voiture key={index} details={details} wd={width} />
                    <Voiture key={index} details={details} wd={width} />
                    <Voiture key={index} details={details} wd={width} />
                    </>
                  ))}
                </div>
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

