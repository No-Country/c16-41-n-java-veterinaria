import { MdLocationOn, MdLocalPhone, MdEmail } from 'react-icons/md';
import DirectionMap from '../components/Contact/DirectionMap';

export default function Contact() {
    return (
        <div className='pt-20 md:mb-10 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/10 font-body'>
            <div className='py-12 md:py-14 px-5 bg-quaternary text-center text-secondary'>
                <h1 className='text-4xl lg:text-6xl font-buttons'>¡Contactanos!</h1>
                <div className='my-10 flex flex-col md:flex-row gap-5 justify-evenly'>
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
        </div>
    )
}
