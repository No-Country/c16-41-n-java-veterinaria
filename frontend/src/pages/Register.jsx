import { NavLink, useNavigate } from 'react-router-dom';
import MainContainer from '../components/common/MainContainer';
import PageTitle from '../components/common/PageTitle';
import FormInput from '../components/common/forms/FormInput';
import { createUser } from '../services/UserService';

export default function Register() {

    const navigate = useNavigate();

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const user = {
            name: formValues.inputUserName,
            lastname: formValues.inputUserLastName,
            email: formValues.inputEmail,
            password: formValues.inputPass,
            role: 'Owner',
            phone: formValues.inputPhone
        };

        try {
            const savedUser = await createUser(user);
            if (savedUser) navigate('/iniciar-sesion');
        } catch (error) {
            console.error('Error al registrar usuario:', error.message);
        }
    }

    return (
        <MainContainer>
            <div className='md:w-3/5 lg:w-2/5 mx-6 md:mx-auto my-5 xl:px-20 py-4 bg-white rounded-2xl shadow-md text-primary'>
                <PageTitle color='primary'>Registro</PageTitle>
                <h2 className='mb-2 lg:w-2/3 mx-auto text-center'>Para poder acceder a nuestros servicios, completá los siguientes datos:</h2>
                <form className='flex flex-col gap-3 mx-6 lg:w-2/3 lg:mx-auto' onSubmit={handleCreateAccount}>

                    <FormInput type='text' label='Nombre/s ' name='inputUserName' placeholder='Jane' />
                    <FormInput type='text' label='Apellido/s ' name='inputUserLastName' placeholder='Doe' />
                    <FormInput type='email' label='Correo electrónico ' name='inputEmail' placeholder='usuario@email.com' />
                    <FormInput type='tel' label='Teléfono ' name='inputPhone' placeholder='112345678' />
                    <FormInput type='password' label='Contraseña ' name='inputPass' placeholder={''} />

                    <p className='text-sm'>
                        ¿Tenés problemas con el registro? <NavLink to='/contacto' className='underline'>Contactanos</NavLink>
                    </p>
                    <button
                        className='py-1 px-5 md:py-2 text-center rounded-full border-2 border-transparent bg-primary text-white lg:text-xl tracking-wide font-buttons hover:bg-white hover:border-primary hover:text-primary'>
                        Registrarme
                    </button>
                </form>
                <p className='my-3 w-2/3 mx-auto md:text-lg text-center'>
                    ¿Ya tenés una cuenta? <NavLink to='/iniciar-sesion' className='block underline'>Inicia sesión</NavLink>
                </p>
            </div>
        </MainContainer>
    )
}