import { useState } from 'react';
import WhiteContainer from "../common/WhiteContainer";
import PageTitle from "../common/PageTitle";
import PageSubtitle from '../common/PageSubtitle';
import AdminTableAppointments from './AdminTableAppointments';
import AdminAddAppointmentModal from './form/AdminAddAppointmentModal';
import { MdCalendarMonth } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import AdminTableUsers from './AdminTableUsers';
import AdminAddUserModal from './form/AdminAddUserModal';
import { useSelector } from 'react-redux';

export default function AdminAppointments() {

    const users = useSelector(store => store.users.users);
    const pets = useSelector(store => store.pets.pets);
    const appointments = useSelector(store => store.appointments.appointments);

    const [modalAppointment, setModalAppointment] = useState(false);
    const [modalUser, setModalUser] = useState(false);

    return (
        <>
            <div className='flex flex-col'>
                <div className={`${modalAppointment || modalUser ? '!blur-sm' : 'text-orange-200'}`}>
                    <WhiteContainer>
                        <PageTitle color='primary'>Turnos</PageTitle>
                        <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
                            onClick={() => setModalAppointment(true)}>
                            Crear turno <MdCalendarMonth className='inline ms-2' />
                        </button>
                        <AdminTableAppointments appointments={appointments} users={users} pets={pets} />
                    </WhiteContainer>
                </div>
                <div className='w-3/4 m-auto z-50 absolute left-0 right-0 top-[20vh]'>
                    <AdminAddAppointmentModal users={users} pets={pets} modal={modalAppointment} setModal={setModalAppointment} />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className={`${modalAppointment || modalUser ? '!blur-sm' : 'text-orange-200'}`}>
                    <WhiteContainer>
                        <PageSubtitle color='primary'>Usuarios</PageSubtitle>
                        <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
                            onClick={() => setModalUser(true)}>
                            Crear usuario <FaUserPlus className='inline ms-2' />
                        </button>
                        <AdminTableUsers users={users} pets={pets} />
                    </WhiteContainer>
                </div>
                <div className='w-3/4 m-auto z-50 absolute left-0 right-0 top-[20vh]'>
                    <AdminAddUserModal users={users} modal={modalUser} setModal={setModalUser} />
                </div>
            </div>
        </>
    )
}
