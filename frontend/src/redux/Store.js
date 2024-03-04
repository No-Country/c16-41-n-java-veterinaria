import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './slices/AuthReducer';

export const VetStore = configureStore({
    reducer: {
        auth: AuthReducer
    }
})