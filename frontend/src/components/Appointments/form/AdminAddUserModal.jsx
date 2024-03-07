import WhiteContainer from '../../common/WhiteContainer';
import FormInput from '../../common/forms/FormInput';
import BtnSubmitUser from './BtnSubmitUser';

export default function AdminAddUserModal({ users, modal, setModal }) {

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
            <h2 className='mt-8 lg:mb-6 text-3xl md:text-6xl font-buttons text-center text-primary'>Gestión de usuarios</h2>
            <form className='my-2' onSubmit={handleCreateAppointment}>
                <div className='mx-4 py-6 grid grid-cols-1 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>

                    <FormInput type='text' label='Nombre completo ' name='inputUserName' placeholder='Jane Doe' />
                    <FormInput type='email' label='Correo electrónico ' name='inputEmail' placeholder='usuario@email.com' />
                    <FormInput type='tel' label='Teléfono ' name='inputPhone' placeholder='112345678' />
                    <FormInput type='password' label='Contraseña ' name='inputPass' placeholder={''} />
                </div>
                <BtnSubmitUser />
            </form>
        </WhiteContainer>
    )
}
