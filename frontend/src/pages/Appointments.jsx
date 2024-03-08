import { useEffect, useState } from "react";
import MainContainer from "../components/common/MainContainer";
import OwnerAppointments from "../components/Appointments/OwnerAppointments";
import { getUsersTest } from "../services/UserService";
import { getPetsTest } from "../services/PetService";
import { getAppointmentsTest } from "../services/AppointmentService";
import AdminAppointments from "../components/Appointments/AdminAppointments";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../redux/slices/appointmentsSlice";

export default function Appointments() {

    const user = useSelector(store => store.user.user);
    const appointments = useSelector(store => store.appointments.appointments);
    const dispatch = useDispatch();
    console.log('aca llegue')

    const testAllUsers = getUsersTest();
    const testAllPets = getPetsTest();
    const testAllAppointments = getAppointmentsTest();

    //test user owner
    const testAppointments = appointments;
    const testPet = testAllPets.filter((p) => p.ownerid == user.id);


    useEffect(() => {

    }, [dispatch])

    return (
        <MainContainer>
            {/*if user is a pet owner it can manage appointments*/}
            {user.role == 'Owner' &&
                <OwnerAppointments appointments={testAppointments} pets={testPet} />
            }
            {/*if user is admin it can manage users, pets, and appointments*/}
            {user.role == 'Admin' &&
                <>
                    <AdminAppointments appointments={testAllAppointments} users={testAllUsers} pets={testAllPets} />
                </>
            }
        </MainContainer>
    )
}