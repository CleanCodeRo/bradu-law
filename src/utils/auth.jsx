import {jwtDecode} from "jwt-decode";


export function isTokenValid(){
    const token = localStorage.getItem("lawToken");
    if(!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.exp * 1000 > Date.now();
    }catch (e){
        return false;
    }
}

