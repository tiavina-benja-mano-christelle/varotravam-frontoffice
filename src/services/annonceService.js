import { BACKEND_URL } from "../others/URL"
import AuthService from "./authService";

const BASE = BACKEND_URL + "/api/v1/annonces";
const FILTER = BASE + "/filtrer";


const AnnonceService = {
    filter: async (filter) => {
        try {
            const response = await fetch(FILTER, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
                method: 'POST',
                body: JSON.stringify(filter)
            });
            if (response.ok) {
                const result = await response.json();
                return {success: true, data: result.data};
            } else if (response.status === 401){
                AuthService.deconnection();
                return {success: false, error: "Non autorisé"}
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.error}
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return {success: false, error: error};
        }
    },
    all: async () => {
        try {
            const response = await fetch(BASE, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
            });
            if (response.ok) {
                const result = await response.json();
                return {success: true, data: result.data};
            } else if (response.status === 401){
                AuthService.deconnection();
                return {success: false, error: "Non autorisé"}
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.error}
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return {success: false, error: error};
        }
    },
    detailAnnonce: async (annonceId) => {
        try {
            const response = await fetch(BASE + "/" + annonceId, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
            });
            if (response.ok) {
                const result = await response.json();
                return {success: true, data: result.data};
            } else if (response.status === 401){
                return {success: false, error: "Non autorisé"}
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.error}
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return {success: false, error: error};
        }
    },
    favoris: async () => {
        try {
            const response = await fetch(BASE + "/favorites", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
            });
            if (response.ok) {
                const result = await response.json();
                return {success: true, data: result.data};
            } else if (response.status === 401){
                return {success: false, error: "Non autorisé"}
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.error}
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return {success: false, error: error};
        }
    },
    mesAnnonces: async () => {
        try {
            const response = await fetch(BASE + "/moi", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                },
            });
            if (response.ok) {
                const result = await response.json();
                return {success: true, data: result.data};
            } else if (response.status === 401){
                return {success: false, error: "Non autorisé"}
            } else {
                const errorData = await response.json();
                return {success: false, error: errorData.error}
            }
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            return {success: false, error: error};
        }
    }
}
export default AnnonceService;