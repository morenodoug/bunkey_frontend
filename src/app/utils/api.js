import axios from "axios"
const host ="localhost"
const port =3000
const signinPath ="auth/signin"
const signUpPath ="auth/signup"


const signInUrl =`http://${host}:${port}/${signinPath}`
const signUpUrl =`http://${host}:${port}/${signUpPath}`


export const signInService = (  email, password)=>{
    return axios.post(signInUrl, { email, password })
}

export const signUpService =(name, email ,password) =>{
    return axios.post(signUpUrl,{name,email,password})
}
