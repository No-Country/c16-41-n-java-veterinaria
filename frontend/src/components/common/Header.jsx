import React, { useState } from 'react';
import Logo from "../../assets/logo.svg"
import { MdOutlinePets, MdMenu, MdClose, MdLogin } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { links, routes } from '../../routes/routes';

export default function Header() {

    const [open, setOpen] = useState(false);

    return (
        <div className='font-body bg-secondary w-full fixed top-0 left-0 md:border-b border-black'>
            <div className='md:flex items-center justify-between md:px-4 lg:px-10 px-7'>
                <NavLink to={links[0].url}
                    onClick={() => setOpen(false)}
                    className='py-2 bg-secondary text-xl md:text-2xl flex items-center gap-4 z-10'>
                    <p className='text-primary text-center flex flex-col'>
                        <span>Veterinaria</span>
                        <span>No Country</span>
                    </p>
                    <img src={Logo} alt="Logo" className='h-12' />
                </NavLink>

                <div onClick={() => setOpen(!open)} className='absolute right-8 top-4 cursor-pointer md:hidden z-10'>
                    {
                        open ? <MdClose className='w-6 h-10' /> : <MdMenu className='w-6 h-10' />
                    }
                </div>

                <div className={`md:flex md:items-center pt-4 md:pt-0 md:pb-0 pb-12 absolute md:static bg-secondary md:z-auto -z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500  ease-in 
                ${open ? 'top-16' : 'top-[-490px]'}`}>
                    {links.map((link) => {
                        return (
                            <NavLink key={link.url}
                                to={link.url}
                                onClick={() => setOpen(false)}
                                className='block px-2 md:px-4 lg:px-10 py-2 pb-2 md:py-7 border-b-2 border-transparent text-primary 
                                md:hover:bg-quinary/[0.19] md:hover:border-b-2 md:hover:border-quinary duration-500'>
                                {link.name}
                            </NavLink>)
                    })}
                    <NavLink to='/registro'
                        onClick={() => setOpen(false)}
                        className='btn uppercase font-semibold px-3 py-1 rounded duration-500 md:hidden text-quaternary'>
                        Ingresar <MdLogin className='inline' />
                    </NavLink>
                </div>
                <NavLink to='/registro'
                    onClick={() => setOpen(false)}
                    className='btn uppercase font-semibold px-3 py-1 rounded duration-500 hidden md:block md:static text-quaternary'>
                    Ingresar <MdLogin className='inline' />
                </NavLink>
                {/* button */}
            </div>
        </div >
    )
}
