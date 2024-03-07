import { MdOutlinePets } from 'react-icons/md';
import WhiteContainer from '../common/WhiteContainer';
import FormInput from '../common/forms/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { toPet } from '../../domain/models/Pet';
import { setPets } from '../../redux/slices/petsSlice';
import { createPet } from '../../services/PetService';

export default function OwnerAddPetModal({ modal, setModal }) {

    const user = useSelector(store => store.user.user);
    const pets = useSelector(store => store.pets.pets);
    const dispatch = useDispatch();

    if (!modal) return;

    const handleSubmitPet = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData);

        const newPet = {
            name: formValues.inputPetName,
            species: formValues.inputSpecies,
            breed: formValues.inputBreed,
            birthdate: formValues.inputBirthdate,
            ownerid: user.id
        };

        try {
            const savedPet = await createPet(newPet);
        } catch (error) {
            console.error('Error al registrar mascota:', error.message);
        }

        //envio a la bd
        const updatedPets = [...pets, newPet];
        dispatch(setPets(updatedPets))
        setModal(false);
    }

    return (
        <WhiteContainer>
            <button className='px-2 absolute text-xl right-10 rounded-full hover:bg-primary hover:text-white'
                onClick={() => setModal(false)}>
                x
            </button>
            <h2 className='mt-8 lg:mb-6 text-3xl md:text-6xl font-buttons text-center text-primary'>Registro de mascota</h2>
            <form onSubmit={handleSubmitPet}>
                <div className='mx-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                    <FormInput type='text' label='Nombre de mascota' name='inputPetName' placeholder='Nombre completo' />
                    <FormInput type='date' label='Fecha de nacimiento' name='inputBirthdate' placeholder='' />
                    <FormInput type='text' label='Especie' name='inputSpecies' placeholder='Perro' />
                    <FormInput type='text' label='Raza' name='inputBreed' placeholder='Labrador' />
                </div>
                <button className='mt-2 px-5 py-2 rounded-full border-primary border-2 text-xl lg:text-2xl font-buttons hover:bg-primary hover:text-white'>
                    Agregar mascota <MdOutlinePets className='inline ms-2' />
                </button>
            </form>
        </WhiteContainer>
    )
}
