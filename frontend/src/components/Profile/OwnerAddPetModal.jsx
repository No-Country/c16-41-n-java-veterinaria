import { MdOutlinePets } from 'react-icons/md';
import WhiteContainer from '../common/WhiteContainer';

export default function OwnerAddPetModal({ modal, setModal }) {

    if (!modal) return;

    return (
        <WhiteContainer>
            <button className='px-2 absolute text-xl right-10 rounded-full hover:bg-primary hover:text-white'
                onClick={() => setModal(false)}>x</button>
            <h2 className='mt-8 lg:mb-6 text-3xl md:text-6xl font-buttons text-center text-primary'>Registro de mascota</h2>
            <form>
                <div className='mx-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputName' className='font-semibold md:text-lg'>Nombre de mascota *</label>
                        <input type='text' name='inputName' id='inputName' placeholder='Pepito' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputBirthdate' className='font-semibold md:text-lg'>Fecha de nacimiento *</label>
                        <input type='date' name='inputBirthdate' id='inputBirthdate' placeholder='dd/mm/aaaa' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputSpecies' className='font-semibold md:text-lg'>Especie *</label>
                        <input type='text' name='inputSpecies' id='inputSpecies' placeholder='Hamster' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='inputBreed' className='font-semibold md:text-lg'>Raza *</label>
                        <input type='text' name='inputBreed' id='inputBreed' required
                            className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
                    </div>
                </div>
                <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
                    type='submit' onClick={() => setModal(false)}>
                    Agregar mascota <MdOutlinePets className='inline ms-2' />
                </button>
            </form>
        </WhiteContainer>
    )
}
