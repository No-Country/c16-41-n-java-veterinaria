import { useState } from 'react';
import OwnerAddPetModal from '../components/Profile/OwnerAddPetModal';
import OwnerPets from '../components/Profile/OwnerPets';
import OwnerProfile from '../components/Profile/OwnerProfile';
import MainContainer from '../components/common/MainContainer';

export default function Profile() {

    const [modal, setModal] = useState(true);

    return (
        <MainContainer>
            <div className='flex flex-col'>
                <div className={`${modal ? '!blur-sm': 'text-orange-200' }`}>
                    <OwnerProfile />
                    <OwnerPets setModal={setModal} />
                </div>
                <div className='w-3/4 m-auto absolute left-0 right-0 top-[20vh]'>
                    <OwnerAddPetModal modal={modal} setModal={setModal} />
                </div>
            </div>
        </MainContainer>
    )
}