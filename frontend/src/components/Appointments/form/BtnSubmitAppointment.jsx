import { MdCalendarMonth } from 'react-icons/md';

export default function BtnSubmitAppointment() {
    return (
        <button className='mb-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
            type='submit'>
            Solicitar turno <MdCalendarMonth className='inline ms-2' />
        </button>
    )
}
