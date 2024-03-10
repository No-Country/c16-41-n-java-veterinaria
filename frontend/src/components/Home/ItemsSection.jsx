import { NavLink } from 'react-router-dom';
import { FaSearch, FaUsers } from 'react-icons/fa';
import { MdTimeline, MdOutlineLocalHospital, MdOutlineEvent } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function ItemsSection() {
    return (
        <motion.div className='mx-4 md:mx-10 my-20 border border-primary text-center md:text-start'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <div className='my-4 p-2 md:p-8 lg:p-10 flex flex-col md:flex-row justify-evenly gap-10 font-body'>
                <div className='order-2 md:order-1 w-full md:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className='flex flex-col gap-2 mx-10 md:mx-0 p-4 md:p-5 bg-secondary border border-primary rounded-tl-3xl rounded-br-3xl'>
                        <MdTimeline className='text-3xl text-primary' />
                        <p className='mx-10 md:mx-0 text-xl md:text-2xl font-bold text-primary'>Experiencia de más de 10 años</p>
                        <p className='mx-10 md:mx-0 text-sm lg:text-base'>Contamos con más de una década de experiencia en el mercado, brindando confianza y seguridad en cada consulta.</p>
                    </div>
                    <div className='flex flex-col gap-2 mx-10 md:mx-0 p-4 md:p-5 bg-secondary border border-primary rounded-tl-3xl rounded-br-3xl'>
                        <FaUsers className='text-3xl text-primary' />
                        <p className='mx-10 md:mx-0 text-2xl font-bold text-primary'>Equipo altamente calificado</p>
                        <p className='mx-10 md:mx-0 text-sm lg:text-base'>Nuestro equipo de veterinarios está compuesto por profesionales altamente calificados y apasionados por el bienestar animal.</p>
                    </div>
                    <div className='flex flex-col gap-2 mx-10 md:mx-0 p-4 md:p-5 bg-secondary border border-primary rounded-tl-3xl rounded-br-3xl'>
                        <MdOutlineLocalHospital className='text-3xl text-primary' />
                        <p className='mx-10 md:mx-0 text-2xl font-bold text-primary'>Cuidado compasivo y experto</p>
                        <p className='mx-10 md:mx-0 text-sm lg:text-base'>Desde consultas generales hasta tratamientos especializados, nos comprometemos a proporcionar el más alto nivel de atención veterinaria.</p>
                    </div>
                    <div className='flex flex-col gap-2 mx-10 md:mx-0 p-4 md:p-5 bg-secondary border border-primary rounded-tl-3xl rounded-br-3xl'>
                        <MdOutlineEvent className='text-3xl text-primary' />
                        <p className='mx-10 md:mx-0 text-2xl font-bold text-primary'>Reserva en línea conveniente</p>
                        <p className='mx-10 md:mx-0 text-sm lg:text-base'>Haz tu vida más fácil reservando tu turno en línea hoy mismo, con nuestro sistema de reserva de turnos rápido y sencillo.</p>
                    </div>
                    <NavLink to='/servicios'
                        className='w-64 px-5 py-2 justify-self-center flex md:hidden flex-row gap-2 justify-center items-center rounded-full text-primary border-primary border-2 text-xl font-buttons hover:bg-primary hover:text-secondary'>
                        Ver servicios <FaSearch />
                    </NavLink>
                </div>
                <div className='order-1 md:order-2 w-full md:w-2/5 flex flex-col gap-4 text-primary'>
                    <p className='uppercase md:text-xl'>Expertos en el Bienestar Animal</p>
                    <h2 className='font-buttons text-3xl md:text-4xl lg:text-5xl'>Cuidado veterinario confiable para todas las mascotas</h2>
                    <NavLink to='/servicios'
                        className='w-64 px-5 py-2 self-center md:self-start hidden md:flex flex-row gap-2 justify-center items-center rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-secondary'>
                        Ver servicios <FaSearch />
                    </NavLink>
                </div>
            </div>
        </motion.div>
    )
}
