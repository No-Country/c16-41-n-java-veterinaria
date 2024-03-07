import React from 'react'
import { MdOutlinePets } from 'react-icons/md'

export default function PetItem({ pet }) {
    return (
        <div className='text-center flex flex-col items-center gap-1'>
            <div className='p-2 w-fit rounded-full bg-secondary'>
                <MdOutlinePets className='text-6xl text-quinary' />
            </div>
            <p>{pet.name}</p>
            <p>{pet.breed} </p>
            <p className='text-sm italic'>({pet.species})</p>
        </div>
    )
}
