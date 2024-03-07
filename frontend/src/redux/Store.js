import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './slices/usersSlice';
import UserReducer from './slices/userSlice';
import PetsReducer from './slices/petsSlice';
import ServicesReducer from './slices/servicesSlice';
import AppointmentsReducer from './slices/appointmentsSlice';

const VetStore = configureStore({
    reducer: {
        user: UserReducer,
        users: UsersReducer,
        services: ServicesReducer,
        pets: PetsReducer,
        appointments: AppointmentsReducer,
    }
});

export default VetStore;
