import { NavLink } from 'react-router-dom';
import { BsHearts } from 'react-icons/bs';
import { BiSolidSend } from 'react-icons/bi';
import DogImg from '../../assets/home/home.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <motion.div className='md:my-5 lg:my-24 p-8 md:p-10 lg:p-12 flex flex-col md:flex-row justify-evenly gap-4 font-body'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ ease: 'easeOut', duration: 1 }}>
            <div className='flex flex-col gap-4 lg:gap-6 text-center md:text-start'>
                <h1 className='w-full md:w-4/5 text-5xl md:text-6xl lg:text-8xl font-bold text-zinc-700'>
                    ¡Tu mascota se merece lo mejor!
                    <BsHearts className='inline ms-2 text-red-700 rotate-12' />
                </h1>
                <h2 className='text-xl lg:text-2xl'>
                    Ofrecemos atención veterinaria de calidad, desde consultas generales hasta tratamientos especializados, con un <span className='text-quinary font-semibold'>equipo de veterinarios altamente calificados.</span>
                </h2>
                <p className='text-xl lg:text-2xl'>
                    Confía en nosotros para cuidar de tu mascota y reserva tu turno hoy mismo.
                </p>
                <NavLink to='/registro'
                    className='w-64 px-5 py-3 self-center md:self-start flex flex-row gap-2 justify-center items-center rounded-full bg-quinary text-xl lg:text-2xl text-white font-buttons hover:scale-110'>
                    Registrarme <BiSolidSend />
                </NavLink>
            </div>
            <div className='hidden md:block md:w-11/12'>
                <img src={DogImg} alt='Perro' />
            </div>
        </motion.div>
    )
}
