import { NavLink } from 'react-router-dom';
import MainContainer from '../components/common/MainContainer';
import PageNotFoundImg from '../assets/404/404.png';

export default function PageNotFound() {
    return (
        <MainContainer>
            <div className='mx-4 xl:mx-auto xl:w-3/4 my-5 md:my-10 pt-5 px-2 bg-quaternary rounded-lg flex flex-col md:flex-row gap-2 items-center justify-evenly'>
                <div className='order-2 md:order-1'>
                    <img src={PageNotFoundImg} alt='Perro mirando de frente' className='w-11/12 md:w-full' />
                </div>
                <div className='order-1 md:order-2 text-center flex flex-col gap-1 md:gap-4'>
                    <h1 className='text-secondary text-5xl lg:text-8xl font-buttons tracking-widest'>
                        404 <span className='block text-primary'>ERROR</span>
                    </h1>
                    <h2 className='md:text-2xl text-primary'>Página no encontrada</h2>
                    <NavLink to='/'
                        className='py-1 md:py-2 text-center rounded-full bg-primary text-secondary lg:text-xl font-buttons hover:bg-secondary hover:text-primary'>
                        Volver al inicio
                    </NavLink>
                </div>
            </div>
        </MainContainer>
    )
}
