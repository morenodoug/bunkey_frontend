import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authSlice from '../features/auth/authSlice';

export default configureStore({
  reducer: {
    auth: authSlice,
  },
});
