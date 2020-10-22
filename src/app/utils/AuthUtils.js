export const  setAuth =(token) =>{

    localStorage.setItem('jwt', token);
}


export const getJWT = () => localStorage.getItem('jwt')