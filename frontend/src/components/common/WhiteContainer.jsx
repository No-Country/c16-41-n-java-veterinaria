import React from 'react'

export default function WhiteContainer({ children }) {
    return (
        <div className='md:w-3/5 lg:w-3/5 mx-6 md:mx-auto my-5 xl:px-20 py-4 bg-white rounded-2xl shadow-md text-primary text-center relative'>
            {children}
        </div>
    )
}
