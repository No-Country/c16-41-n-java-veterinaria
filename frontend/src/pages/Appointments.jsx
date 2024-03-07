import { useEffect } from "react";
import MainContainer from "../components/common/MainContainer";
import OwnerAppointments from "../components/Appointments/OwnerAppointments";
import { getAllUsers, getUsersTest } from "../services/UserService";
import { getAllPets, getOwnerPetsById, getPetsTest } from "../services/PetService";
import { getAllAppointments, getAppointmentsByUserId, getAppointmentsTest } from "../services/AppointmentService";
import AdminAppointments from "../components/Appointments/AdminAppointments";
import { useDispatch, useSelector } from "react-redux";
import { setPets } from "../redux/slices/petsSlice";
import { setAppointments } from "../redux/slices/appointmentsSlice";
import { setUsers } from "../redux/slices/usersSlice";

export default function Appointments() {

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    //const testAllUsers = getUsersTest();
    //const testAllPets = getPetsTest();
    //const testAllAppointments = getAppointmentsTest();

    //test user owner
    //const testPet = testAllPets.filter((p) => p.ownerid == user.id);
    //const testAppointments = testAllAppointments.filter((a) => a.ownerId == user.id);

    useEffect(() => {
        const getData = async () => {
            try {
                const users = user.role == 'Admin' && await getAllUsers();
                const pets = user.role == 'Admin' ? await getAllPets() : await getOwnerPetsById(user.id);
                const appointments = user.role == 'Admin' ? await getAllAppointments() : await getAppointmentsByUserId(user.id);
                dispatch(setUsers(users));
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
                <OwnerAppointments appointments={listAppointments} pets={listPets} />
            }
            {/*if user is admin it can manage users, pets, and appointments*/}
            {user.role == 'Admin' &&
                <>
                    <AdminAppointments appointments={listAppointments} users={listUsers} pets={listPets} />
                </>
            }
        </MainContainer>
    )
}