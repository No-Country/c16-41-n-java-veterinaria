import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            return action.payload;
        },
        logout(state) {
            state.user = null;
        }
    }
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;