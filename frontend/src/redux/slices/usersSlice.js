import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
};

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        resetUsers(state) {
            state.users = [];
        }
    }
});

export const { setUsers, resetUsers } = UsersSlice.actions;

export default UsersSlice.reducer;