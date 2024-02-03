import Header from './components/Header';
import DetailsAnnonces from './pages/DetailsAnnonces';
import Annonces from './pages/Annonces';
import Message from './pages/Message';
import Profil from './pages/Profil';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {  
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Annonces />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/DetailsAnnonces/:id" element={<DetailsAnnonces />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
