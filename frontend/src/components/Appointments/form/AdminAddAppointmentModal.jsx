import { useState, useEffect } from 'react';
import WhiteContainer from '../../common/WhiteContainer';
import PageSubtitle from '../../common/PageSubtitle';
import FormInput from '../../common/forms/FormInput';
import SelectUser from '../../common/forms/SelectUser';
import SelectPet from '../../common/forms/SelectPet';
import SelectService from '../../common/forms/SelectService';
import BtnSubmitAppointment from './BtnSubmitAppointment';

export default function AdminAddAppointmentModal({ users, pets, modal, setModal }) {

    const [userId, setUserId] = useState();

    useEffect(() => { }, [userId])

    if (!modal) return;

    const handleCreateAppointment = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        //logica de envio a la bd

        setModal(false);
    }

    return (
        <WhiteContainer>
            <button className='px-2 absolute text-xl right-10 rounded-full hover:bg-primary hover:text-white'
                onClick={() => setModal(false)}>x</button>
            <PageSubtitle color='primary' >Gestión de turnos</PageSubtitle>
            <form className='my-2' onSubmit={handleCreateAppointment}>
                <div className='mx-4 py-6 grid grid-cols-1 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                    <div className='flex flex-col gap-1'>
                        <SelectUser setUserId={setUserId} users={users} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <SelectPet pets={pets.filter((p) => p.ownerid == userId)} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <SelectService />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <FormInput type='datetime-local' label='Fecha y horario del turno ' name='inputDateTime' placeholder={''} />
                    </div>
                </div>
                <BtnSubmitAppointment />
            </form>
        </WhiteContainer>
    )
}
