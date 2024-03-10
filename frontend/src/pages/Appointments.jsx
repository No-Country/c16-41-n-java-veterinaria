import { useEffect } from "react";
import MainContainer from "../components/common/MainContainer";
import OwnerAppointments from "../components/Appointments/OwnerAppointments";
import { getAllUsers } from "../services/UserService";
import { getAllPets, getOwnerPetsById } from "../services/PetService";
import { getAllAppointments, getAppointmentsByUserId } from "../services/AppointmentService";
import AdminAppointments from "../components/Appointments/AdminAppointments";
import { useDispatch, useSelector } from "react-redux";
import { setPets } from "../redux/slices/petsSlice";
import { setAppointments } from "../redux/slices/appointmentsSlice";
import { setUsers } from "../redux/slices/usersSlice";

export default function Appointments() {

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const getData = async () => {
            try {
                //if user is admin it fetches all users, pets and appointments
                //if user is a pet owner it fetches their pets and appointments
                if (user.role == 'Admin') {
                    const users = user.role == 'Admin' && await getAllUsers();
                    dispatch(setUsers(users));
                }
                const pets = user.role == 'Admin' ? await getAllPets() : await getOwnerPetsById(user.id);
                const appointments = user.role == 'Admin' ? await getAllAppointments() : await getAppointmentsByUserId(user.id);
                dispatch(setPets(pets));
                dispatch(setAppointments(appointments));
            } catch (error) {
                console.error('Error al iniciar sesión:', error.message);
            }
        };
        getData();
    }, [dispatch, user]);

    return (
        <MainContainer>
            {/*if user is a pet owner it can manage appointments*/}
            {user.role == 'Owner' &&
                <OwnerAppointments />
            }
            {/*if user is admin it can manage users, pets, and appointments*/}
            {user.role == 'Admin' &&
                <AdminAppointments />
            }
        </MainContainer>
    )
}