import { MdOutlinePets } from 'react-icons/md';
import WhiteContainer from '../common/WhiteContainer';
import { useSelector } from 'react-redux';
import PetItem from './PetItem';

export default function OwnerPets({ setModal }) {

    const pets = useSelector(store => store.pets.pets);

    return (
        <WhiteContainer>
            <h2 className='mt-4 md:mt-6 md:mb-5 lg:mt-10 lg:mb-6 text-3xl md:text-6xl font-buttons text-center text-primary'>Mis mascotas</h2>
            <div className='py-6 flex flex-row gap-10 justify-center'>
                {
                    pets && (
                        pets.map((pet => {
                            return (<PetItem key={pet.id} pet={pet} />)
                        }))
                    )
                }
            </div>
            <button className='mb-6 px-5 py-2 self-center md:self-start rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'
                onClick={() => setModal(true)}>
                Agregar mascota <MdOutlinePets className='inline ms-2' />
            </button>
        </WhiteContainer>
    )
}
