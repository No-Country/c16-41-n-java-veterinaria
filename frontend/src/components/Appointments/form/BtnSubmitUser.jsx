import { FaUserPlus } from 'react-icons/fa';

export default function BtnSubmitUser() {
    return (
        <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
            type='submit'>
            Crear usuario <FaUserPlus className='inline ms-2' />
        </button>
    )
}
