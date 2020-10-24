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
        userId: "2",
        message:"Hola como estas",
        
      },
      {
        userId: "2",
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

  }
})

export default chatSlice.reducer

export const getUsersSelector = (state) => state.chat.users