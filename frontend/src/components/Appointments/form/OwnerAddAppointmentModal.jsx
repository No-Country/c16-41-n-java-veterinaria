import { createAppointment } from '../../../services/AppointmentService';
import WhiteContainer from '../../common/WhiteContainer';
import FormInput from '../../common/forms/FormInput';
import SelectPet from '../../common/forms/SelectPet';
import SelectService from '../../common/forms/SelectService';
import BtnSubmitAppointment from './BtnSubmitAppointment';

export default function OwnerAddAppointmentModal({ user, pets, modal, setModal }) {

    if (!modal) return;

    const handleCreateAppointment = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const appointment = {
            ownerId: user.id,
            petId: formValues.inputPet,
            serviceId: formValues.inputService,
            dateTime: formValues.inputDateTime,
            status: 'Pendiente'
        }

        try {
            const savedAppointment = await createAppointment(appointment);
            setModal(false);
        } catch (error) {
            console.error('Error al registrar turno:', error.message);
        }
    }

    return (
        <WhiteContainer>
            <button className='px-2 absolute text-xl right-10 rounded-full hover:bg-primary hover:text-white'
                onClick={() => setModal(false)}>x</button>
            <h2 className='mt-8 lg:mb-6 text-3xl md:text-6xl font-buttons text-center text-primary'>Turno</h2>
            <form onSubmit={handleCreateAppointment}>
                <div className='mx-4 py-6 grid grid-cols-1 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                    <div className='flex flex-col gap-1'>
                        <SelectPet pets={pets} />
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
