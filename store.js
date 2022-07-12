import { configureStore } from '@reduxjs/toolkit';
import userNameReducer from './userSlice';
export const store = configureStore({
    reducer: {
        //setUserName: userNameReducer,
    }
})