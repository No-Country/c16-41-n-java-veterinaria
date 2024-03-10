import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pets: []
};

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        setPets(state, action) {
            state.pets = action.payload;
        },
        resetPets(state) {
            state.pets = [];
        }
    }
});

export const { setPets, resetPets } = petsSlice.actions;
export default petsSlice.reducer;