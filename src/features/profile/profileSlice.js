import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getProfileService} from '../../app/utils/api'

export const  getProfile = createAsyncThunk( "getProfile" ,
    async (_, thunkAPI) =>{
        const jwt = thunkAPI.getState().auth.jsonwebtoken
        try{
            const response = await getProfileService(jwt)
            return response.data
        }catch(err){
            throw err
        }
        


})

const initialState ={ 
    id:"",
    email:"",
    name:""

}


const profileSlice = createSlice({
    name:"profile",
    initialState: initialState,
    reducers:{
        setProfile: (currentState, action) =>{
            currentState.id = action.payload._id
            currentState.email = action.payload.email
            currentState.name = action.payload.nombre
        }
    },
    extraReducers:{

          [getProfile.fulfilled] : (currentState, action) =>{
            currentState.id = action.payload._id
            currentState.email = action.payload.email
            currentState.name = action.payload.nombre
          },
          [getProfile.rejected] : (currentState, action) =>{
    
            currentState.id = null
            currentState.email = null
            currentState.name = null
          },        
    }
})

export default  profileSlice.reducer
export const {setProfile} = profileSlice.actions
export const getUserProfileSelector =  (state) => state.profile