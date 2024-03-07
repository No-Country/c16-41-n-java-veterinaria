import { useEffect } from "react";
import MainContainer from "../components/common/MainContainer";
import OwnerAppointments from "../components/Appointments/OwnerAppointments";
import { getUsersTest } from "../services/UserService";
import { getPetsTest } from "../services/PetService";
import { getAppointmentsTest } from "../services/AppointmentService";
import AdminAppointments from "../components/Appointments/AdminAppointments";

export default function Appointments() {

    //test user admin
    const testAllUsers = getUsersTest();
    const testAllPets = getPetsTest();
    const testAllAppointments = getAppointmentsTest();

    //test user owner
    const testUser = testAllUsers.find((u) => u.id == '1')
    const testPet = testAllPets.filter((p) => p.ownerid == testUser.id);
    const testAppointments = testAllAppointments.filter((a) => a.ownerId == testUser.id);

    useEffect(() => {

    }, [])

    return (
        <MainContainer>
            {/*if user is a pet owner it can manage appointments*/}
            {testUser.role == 'Owner' &&
                <OwnerAppointments appointments={testAppointments} pets={testPet} />
            }
            {/*if user is admin it can manage users, pets, and appointments*/}
            {testUser.role == 'Admin' &&
                <>
                    <AdminAppointments appointments={testAllAppointments} users={testAllUsers} pets={testAllPets} />
                </>
            }
        </MainContainer>
    )
}