import { NavLink } from "react-router-dom";
import MainContainer from "../components/common/MainContainer";
import PageTitle from "../components/common/PageTitle";

export default function LogIn() {
    return (
        <MainContainer>
            <div className='md:w-3/5 lg:w-2/5 mx-6 md:mx-auto my-5 xl:px-20 py-4 bg-white rounded-2xl shadow-md text-primary'>
                <PageTitle color='primary'>Iniciar <span className='block lg:inline-block'>sesión</span></PageTitle>
                <h2 className='mb-2 lg:w- lg:w-2/3 mx-auto text-center'>Ingresa tus datos para iniciar sesión en tu cuenta:</h2>
                <form className='flex flex-col gap-3 mx-6 lg:w-2/3 lg:mx-auto'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputEmail' className='font-semibold md:text-lg'>Correo electrónico</label>
                        <input type='email' name='inputEmail' id='inputEmail' placeholder='usuario@email.com' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputPass' className='font-semibold md:text-lg'>Contraseña</label>
                        <input type='password' name='inputPass' id='inputPass' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <p className='text-sm'>
                        ¿Tenés problemas iniciando sesión? <NavLink to='/contacto' className='underline'>Contactanos</NavLink>
                    </p>
                    <button
                        className='py-1 px-5 md:py-2 text-center rounded-full border-2 border-transparent bg-primary text-white lg:text-xl tracking-wide font-buttons hover:bg-white hover:border-primary hover:text-primary'>
                        Iniciar sesión
                    </button>
                </form>
                <p className='my-3 w-2/3 mx-auto md:text-lg text-center'>
                    ¿No estás registrado aún? <NavLink to='/registro' className='block underline'>Registrate</NavLink>
                </p>
            </div>
        </MainContainer>
    )
}
