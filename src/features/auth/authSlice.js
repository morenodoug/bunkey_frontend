import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IDLE_STATUS, PENDING_STATUS, FULFILLED_STATUS,REJECTED_STATUS } from "../../app/utils/ApistatusConstants";
import {signInService, signUpService} from "../../app/utils/api"

const initialState ={
  status: IDLE_STATUS,
  authenticated:false,
  jsonwebtoken: null,
  error: null

}


export const  signIn = createAsyncThunk("signIn",
 async  (signInData, thunkAPI) =>{
  
    const {email ,  password} = signInData


    try {
        const response = await signInService(email, password)
        return response.data
      } catch (error) {
        if(error.response){
          return thunkAPI.rejectWithValue (error.response)
        }
        return error

      }    

}) 

export const  signUp = createAsyncThunk("signUp",
 async  (signUpData, thunkAPI) =>{
  
    const {name,email ,  password} = signUpData
    try {
        const response = await signUpService(name,email, password)
        return response.data
      } catch (error) {
        if(error.response){
          return thunkAPI.rejectWithValue (error.response)
        }
        return error

      }    

}) 
export const signInSlice = createSlice({
    name:"auth",
    initialState: initialState,
    reducers:{

      resetJsonWt: (currentState,action) =>{

        currentState.status = IDLE_STATUS
        currentState.jsonwebtoken = null
        currentState.error = null       
      }
    },
    extraReducers:{
      [signIn.pending] : (state, action) =>{
        state.status = PENDING_STATUS
      },
      [signIn.fulfilled] : (state, action) =>{
        state.status =FULFILLED_STATUS
        state.jsonwebtoken = action.payload.token
        state.authenticated = true
        state.error=null
      },
      [signIn.rejected] : (state, action) =>{

        state.status =REJECTED_STATUS
        state.error = action.error
        state.jsonwebtoken =  null
        state.authenticated = false
      },


      [signUp.pending] : (state, action) =>{
        state.status = PENDING_STATUS
      },
      [signUp.fulfilled] : (state, action) =>{
        state.status =FULFILLED_STATUS
        state.jsonwebtoken = action.payload.token
        state.authenticated = true
        state.error=null
      },
      [signUp.rejected] : (state, action) =>{

        state.status =REJECTED_STATUS
        state.error = action.error
        state.jsonwebtoken =  null
        state.authenticated = false
      }      

    }
})

export default signInSlice.reducer 
export const { resetJsonWt}  = signInSlice.actions

export  const isAuthenticatedSelector = state => state.auth.authenticated
export const isSignInRequestPendingSelector = state => state.auth.status === PENDING_STATUS