import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IDLE_STATUS, PENDING_STATUS, FULFILLED_STATUS,REJECTED_STATUS } from "../../app/utils/ApistatusConstants";
import {signInService, signUpService} from "../../app/utils/api"

const users =[
  {
    id:2,
    name: "douglas moreno",
    email: "morenodoug@gmail.com",
    messages:[
      {
        id:"1",
        userId: 55555,
        message:"Hola como estas",
        
      },
      { id:"2",
        userId: 2,
        message:"bien vale ",
        
      }      
    ]
    
  },

  {
    id:1,
    name: "que se vayan tdos",
    email: "qsvt@gmail.com",
    messages:[]
  },
  {
    id:3,
    name: "el mundo y el pais",
    email: "mundoypais@gmail.com"    ,
    messages:[]
  }  ,
  {
    id:4,
    name: "A",
    email: "D@gmail.com"    ,
    messages:[]
  },

  {
    id:5,
    name: "adad",
    email: "asdas@gmail.com"   ,
    messages:[] 
  }    ,

  {
    id:6,
    name: "humores",
    email: "humores@gmail.com",
    messages:[]
  }    ,

  {
    id:7,
    name: "bilis",
    email: "bilis@gmail.com",
    messages:[]
  }    
]
const initialState ={
  users: users,
  messageBox:{
    message:"",
    userId:"",
    status: IDLE_STATUS
  }

}

export  const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers:{
    
      setChatBoxUser: (currentState, action) =>{
        currentState.messageBox.userId = action.payload
        currentState.messageBox.message =""
        currentState.messageBox.status = IDLE_STATUS

      },
  }
})

export default chatSlice.reducer

export const {setChatBoxUser} = chatSlice.actions

export const getUsersSelector = (state) => state.chat.users
export const getChatUser = state => state.chat.messageBox.userId
export const getUserMessages = (state) =>{ 
  
  state.chat.users.forEach((user) =>{
    if(user.id == state.chat.messageBox.userId ){
      return user.messages
    }
  })
  return []
}

export const getMessagesByUserId = userId => state => {
  const userFound = state.chat.users.find( (user) => user.id == userId)
  if(userFound)
    return userFound.messages
  return []
}
