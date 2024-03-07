import { useEffect, useState } from 'react';
import OwnerAddPetModal from '../components/Profile/OwnerAddPetModal';
import OwnerPets from '../components/Profile/OwnerPets';
import OwnerProfile from '../components/Profile/OwnerProfile';
import MainContainer from '../components/common/MainContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getPetsTest } from '../services/PetService';
import { setPets } from '../redux/slices/petsSlice';

export default function Profile() {

    const user = useSelector(store => store.user.user);
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    useEffect(() => {
        //aca buscaria en la bd
        const petsFromUser = getPetsTest().filter((p) => p.ownerid == user.id);
        dispatch(setPets(petsFromUser));
    }, [])

    return (
        <MainContainer>
            <div className='flex flex-col'>
                <div className={`${modal ? '!blur-sm' : 'text-orange-200'}`}>
                    <OwnerProfile user={user} />
                    {user.role != 'Admin' &&
                        <OwnerPets setModal={setModal} />
                    }
                </div>
                <div className='w-3/4 m-auto absolute left-0 right-0 top-[20vh]'>
                    <OwnerAddPetModal modal={modal} setModal={setModal} />
                </div>
            </div>
        </MainContainer>
    )
}