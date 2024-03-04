import { createSlice } from '@reduxjs/toolkit';


const AuthEmptyState = {
    token: null,
    isAuthenticated: false,
    user: null,
};

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState: AuthEmptyState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            return action.payload;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
        },
        updateUser(state, action) {
            state.user = action.payload.user;
        },
    }
});

export const { login, logout, updateUser } = AuthSlice.actions;

export default AuthSlice.reducer;