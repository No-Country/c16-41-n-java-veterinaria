import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appointments: []
};

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        setAppointments(state, action) {
            state.appointments = action.payload;
        },
        resetAppointments(state) {
            state.appointments = [];
        }
    }
});

export const { setAppointments, resetAppointments } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;