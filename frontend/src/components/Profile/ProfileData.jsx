import React from 'react'

export default function ProfileData({ title, value }) {
    return (
        <div>
            <p className='font-semibold md:text-lg'>{title}</p>
            <p className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base'>
                {value ? value : '-'}
            </p>
        </div>
    )
}
