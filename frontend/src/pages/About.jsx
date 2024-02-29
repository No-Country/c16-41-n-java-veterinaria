import { NavLink } from 'react-router-dom';
import HistorySection from '../components/About/HistorySection';
import MissionSection from '../components/About/MissionSection';
import ValuesSection from '../components/About/ValuesSection';
import { BiSolidSend } from 'react-icons/bi';

export default function About() {
    return (
        <div className='pt-20 md:mb-20 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/10 font-body'>
            <div className='-z-10 md:my-5  flex flex-col items-center gap-4'>
                <HistorySection />
                <MissionSection />
                <ValuesSection />
                <p className='text-2xl text-primary'>¡Sé parte de la historia!</p>
                <NavLink to='/registro'
                    className='w-64 px-5 py-2 text-center flex flex-row gap-2 justify-center items-center rounded-full bg-quaternary text-secondary text-xl lg:text-2xl font-buttons hover:bg-quinary'>
                    Registrarme <BiSolidSend />
                </NavLink>
            </div>
        </div >
    )
}