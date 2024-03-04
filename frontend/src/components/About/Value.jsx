import React from 'react';
import { FaCheck } from 'react-icons/fa6';

export default function Value({ title, children }) {
    return (
        <div className='me-5 flex flex-row gap-2'>
            <FaCheck className='text-quinary !mt-1 !text-xl w-[40px]' />
            <div className='w-[99%]'>
                <p className='block font-semibold md:text-xl mb-1'>{title}</p>
                <p className='md:text-lg'>{children}</p>
            </div>
        </div>
    )
}
