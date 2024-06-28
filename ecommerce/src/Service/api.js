import axios from 'axios' ;

const URL = 'http://localhost:8000';

export const auhtenticteSignUp = async(data) =>{
    try {
       return await axios.post(`${URL}/signup` , data); 
    } catch (error) {
        console.log("Error while calling the signup api (api.js)"   , error)
    }
}