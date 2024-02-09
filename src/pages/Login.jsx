import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService";
import "../assets/css/Login.css"; 

const Login = () => {
    const navigate = useNavigate();
    const [nom, setNom] = useState('john.doe@email.com');
    const [motDePasse, setMotDePasse] = useState('motdepasse1');
    const [logging, setLogging] = useState(false);

    const log = async () => {
        setLogging(true);
        const response = await AuthService.connection(nom, motDePasse);
        if (response.success) {
            navigate('/');
        } else {
            alert(response.error);
        }
        setLogging(false);
    }

    return (
        <div className="login-container">
            <h1>se connecter</h1>
            <input
                type="text"
                className="login-input" 
                onChange={(event) => setNom(event.target.value)}
                value={nom}
                placeholder="Email" 
            />
            <input
                type="password"
                className="login-input" 
                onChange={(event) => setMotDePasse(event.target.value)}
                value={motDePasse}
                placeholder="Mot de passe" 
            />
            <button className="login-button" onClick={log} disabled={logging}> {logging ? "connection..." : "se connecter"}</button> 
        </div>
    )
}
export default Login;
