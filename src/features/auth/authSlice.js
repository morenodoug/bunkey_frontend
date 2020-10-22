import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IDLE_STATUS, PENDING_STATUS, FULFILLED_STATUS,REJECTED_STATUS } from "../../app/utils/ApistatusConstants";
import {signInService} from "../../app/utils/api"

export const  signIn = createAsyncThunk("signIn",
 async  (signInData, thunkAPI) =>{
  
    const {email ,  password} = signInData


    try {
        const response = await signInService(email, password)
        return response.data
      } catch (err) {
        console.log(err.response)
        return thunkAPI.rejectWithValue (err.response)
      }    

}) 
const initialState ={
    status: IDLE_STATUS,
    authorized:false,
    jsonwebtoken: null,
    error: null

}

export const signInSlice = createSlice({
    name:"signIn",
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
        state.jsonwebtoken = action.jsonwebtoken
        state.error=null
      },
      [signIn.rejected] : (state, action) =>{

        state.status =REJECTED_STATUS
        state.error = action.error
        state.jsonwebtoken =  null
      }
    }
})

export default signInSlice.reducer 
export const { resetJsonWt}  = signInSlice.actions

export  const getAuthorizedSelector = state => state.authorized
