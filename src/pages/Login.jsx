import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService";

const Login=()=>{
    const navigate = useNavigate();
    const [nom, setNom] = useState('john.doe@email.com');
    const [motDePasse, setMotDePasse] = useState('motdepasse1');

    const log= async ()=>{
        const response = await AuthService.connection(nom, motDePasse);
        if (response.success) {
            navigate('/');
        } else {
            alert(response.error);
        }
    }

    return (
        <>
            <input type="text" onChange={(event)=>setNom(event.target.value)} value={nom} />
            <input type="password" onChange={(event) => setMotDePasse(event.target.value)} value={motDePasse} />
            <button onClick={log}>Log</button>
        </>
    )   
}
export default Login;