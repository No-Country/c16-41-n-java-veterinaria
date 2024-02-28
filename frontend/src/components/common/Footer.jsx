import React from 'react';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { links } from '../../routes/routes';

export default function Footer() {
    return (
        <div className='p-6 bg-slate-700 md:px-10 text-secondary flex flex-col gap-4'>
            <div className='flex flex-col md:flex-row gap-2 md:items-center justify-between'>
                <NavLink to={links[0].url}
                    className='text-xl md:text-xl flex items-center gap-4 z-10'>
                    <p className='text-center flex flex-col'>
                        <span>Veterinaria</span>
                        <span>No Country</span>
                    </p>
                    <img src={Logo} alt='Logo' className='h-8' />
                </NavLink>

                <div className='flex flex-row gap-5'>
                    {links.map((link) => {
                        return (
                            <NavLink key={link.url}
                                to={link.url}
                                className='block md:hover:underline duration-500'>
                                {link.name}
                            </NavLink>)
                    })}
                </div>
            </div>
            <hr className='border-secondary' />
            <p className='text-start md:text-center'>© 2024 NoCountry - Equipo c16-41-n-java.</p>
        </div>
    )
}
