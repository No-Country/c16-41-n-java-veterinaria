import { NavLink } from 'react-router-dom';
import { BiSolidSend } from 'react-icons/bi';
import MainContainer from '../components/common/MainContainer';
import HistorySection from '../components/About/HistorySection';
import MissionSection from '../components/About/MissionSection';
import ValuesSection from '../components/About/ValuesSection';

export default function About() {
    return (
        <MainContainer>
            <div className='-z-10 md:mb-5 flex flex-col items-center gap-4'>
                <HistorySection />
                <MissionSection />
                <ValuesSection />
                <p className='text-2xl text-primary'>¡Sé parte de la historia!</p>
                <NavLink to='/registro'
                    className='w-64 px-5 py-2 text-center flex flex-row gap-2 justify-center items-center rounded-full bg-quaternary text-secondary text-xl lg:text-2xl font-buttons hover:bg-quinary'>
                    Registrarme <BiSolidSend />
                </NavLink>
            </div>
        </MainContainer >
    )
}