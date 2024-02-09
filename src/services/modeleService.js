import { BACKEND_URL } from "../others/URL";

const BASE = BACKEND_URL + "/api/v1/modeles";
const BY_MARQUES = BASE + "/marques";

const ModeleService = {
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
  marques: async (marques) => {
    try {
      const response = await fetch(BY_MARQUES, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        },
        method: 'POST',
        body: JSON.stringify(marques)
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
};
export default ModeleService;
  