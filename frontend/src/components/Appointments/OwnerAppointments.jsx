import { useState } from 'react';
import WhiteContainer from '../common/WhiteContainer';
import PageTitle from '../common/PageTitle';
import { MdCalendarMonth } from 'react-icons/md';
import OwnerTableAppointments from './OwnerTableAppointments';
import OwnerAddAppointmentModal from './form/OwnerAddAppointmentModal';
import { useSelector } from 'react-redux';

export default function OwnerAppointments() {

    const user = useSelector(store => store.user.user);
    const pets = useSelector(store => store.pets.pets);
    const appointments = useSelector(store => store.appointments.appointments);
    const [modalAppointment, setModalAppointment] = useState(false);

    return (
        <div className='flex flex-col'>
            <div className={`${modalAppointment ? '!blur-sm' : 'text-orange-200'}`}>
                <WhiteContainer>
                    <PageTitle color='primary'>Mis turnos</PageTitle>
                    <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
                        onClick={() => setModalAppointment(true)}>
                        Solicitar turno <MdCalendarMonth className='inline ms-2' />
                    </button>
                    {
                        appointments && appointments.length > 0 ?
                            <OwnerTableAppointments appointments={appointments} pets={pets} /> :
                            <p className='mt-5'>Sin turnos registrados</p>
                    }

                </WhiteContainer>
            </div>
            <div className='w-3/4 m-auto absolute left-0 right-0 top-[20vh]'>
                <OwnerAddAppointmentModal user={user} pets={pets} modal={modalAppointment} setModal={setModalAppointment} />
            </div>
        </div>
    )
}
