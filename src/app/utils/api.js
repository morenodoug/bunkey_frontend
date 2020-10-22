import axios from "axios"
const host ="localhost"
const port =3000
const signinPath ="auth/signin"
const signUpPath ="auth/signup"


const sigInUrl =`http://${host}:${port}/${signinPath}`
const sigUpUrl =`http://${host}:${port}/${signUpPath}`


export const signInService = (  email, password)=>{
    return axios.post(sigInUrl, { email, password })
}
