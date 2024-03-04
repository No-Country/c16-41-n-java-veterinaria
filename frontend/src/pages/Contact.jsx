import { MdLocationOn, MdLocalPhone, MdEmail } from 'react-icons/md';
import MainContainer from '../components/common/MainContainer';
import DirectionMap from '../components/Contact/DirectionMap';
import PageTitle from '../components/common/PageTitle';

export default function Contact() {
    return (
        <MainContainer>
            <div className='py-8 md:pt-1 md:pb-10 px-5 bg-quaternary text-center text-secondary'>
                <PageTitle color='secondary'>¡Contactanos!</PageTitle>
                <div className='my-12 flex flex-col md:flex-row gap-5 justify-evenly'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-fit mx-auto bg-secondary p-4 rounded-full'><MdLocationOn className='text-quinary text-6xl' /></div>
                        <p className='uppercase font-extrabold text-2xl'>Dirección</p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Buenos Aires</p>
                            <p className='w-2/3 self-center font-light'>Av del Libertador 1850, CABA, C1425AAS</p>
                        </div>
                    </div>
                    <div className='px-6 flex flex-col gap-2'>
                        <div className='w-fit mx-auto bg-secondary p-4 rounded-full'><MdLocalPhone className='text-quinary text-6xl' /></div>
                        <p className='uppercase font-extrabold text-2xl'>Telefono</p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Buenos Aires</p>
                            <p className='font-light'>011 4808-4000</p>
                            <p className='font-light'>011 4808-4001</p>
                        </div>
                    </div>
                    <div className='px-6 flex flex-col gap-2'>
                        <div className='w-fit mx-auto bg-secondary p-4 rounded-full'><MdEmail className='text-quinary text-6xl' /></div>
                        <p className='uppercase font-extrabold text-2xl'>Email</p>
                        <div className='flex flex-col gap-1'>
                            <p className='font-bold'>Buenos Aires</p>
                            <a href='mailto:consultas@vetnocountry.com' className='font-light'>consultas@vetnocountry.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <DirectionMap />
            </div>
        </MainContainer>
    )
}
