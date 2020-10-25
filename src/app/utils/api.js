import axios from "axios"
const host ="localhost"
const port =3000
const socketPort = 5000
const signinPath ="auth/signin"
const signUpPath ="auth/signup"
const getProfilePath="user/profile"
const getUsersChatLisPath="user/chatlist"

const signInUrl =`http://${host}:${port}/${signinPath}`
const signUpUrl =`http://${host}:${port}/${signUpPath}`
const getProfileUrl = `http://${host}:${port}/${getProfilePath}`

const getUsersChatListUrl = `http://${host}:${port}/${getUsersChatLisPath}`

export const socketUrl = `http://${host}:${socketPort}`

export const signInService = (  email, password)=>{
    return axios.post(signInUrl, { email, password })
}

export const signUpService =(name, email ,password) =>{
    return axios.post(signUpUrl,{name,email,password})
}

export const getProfileService = (jsonwebtoken) =>{
    const config = {
        headers:{'x-access-token': jsonwebtoken},
    }
    return axios.get(getProfileUrl,config)
}

export const getUsersChatList = (jsonwebtoken) =>{
    const config = {
        headers:{'x-access-token': jsonwebtoken}
    }
    return axios.get(getUsersChatListUrl,config)
}

