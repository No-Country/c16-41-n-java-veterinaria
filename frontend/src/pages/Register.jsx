import { NavLink } from 'react-router-dom';
import MainContainer from '../components/common/MainContainer';
import PageTitle from '../components/common/PageTitle';

export default function Register() {
    return (
        <MainContainer>
            <div className='md:w-3/5 lg:w-2/5 mx-6 md:mx-auto my-5 xl:px-20 py-4 bg-white rounded-2xl shadow-md text-primary'>
                <PageTitle color='primary'>Registro</PageTitle>
                <h2 className='mb-2 lg:w-2/3 mx-auto text-center'>Para poder acceder a nuestros servicios, completá los siguientes datos:</h2>
                <form className='flex flex-col gap-3 mx-6 lg:w-2/3 lg:mx-auto'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputName' className='font-semibold md:text-lg'>Nombre completo *</label>
                        <input type='text' name='inputName' id='inputName' placeholder='Jane Doe' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputEmail' className='font-semibold md:text-lg'>Correo electrónico *</label>
                        <input type='email' name='inputEmail' id='inputEmail' placeholder='usuario@email.com' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputPhone' className='font-semibold md:text-lg'>Teléfono *</label>
                        <input type='tel' name='inputPhone' id='inputPhone' placeholder='112345678' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputPass' className='font-semibold md:text-lg'>Contraseña *</label>
                        <input type='password' name='inputPass' id='inputPass' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputPass2' className='font-semibold md:text-lg'>Reingresar contraseña *</label>
                        <input type='password' name='inputPass2' id='inputPass2' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
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