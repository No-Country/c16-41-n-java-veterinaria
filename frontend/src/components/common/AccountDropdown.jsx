import { useEffect, useState } from 'react'
import { MdAccountCircle, MdLogin } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function AccountDropdown({ setOpen }) {

    const user = useSelector(store => store.user.user);
    const [avatarModalOpen, setAvatarModalOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        dispatch(logout());
        navigate('/iniciar-sesion');
    }

    useEffect(() => {
        setAvatarModalOpen(false);
    }, [user])

    return (
        <>
            {user != null ?
                (
                    <div className='relative'>
                        <MdAccountCircle className='cursor-pointer text-4xl text-quaternary'
                            onClick={() => setAvatarModalOpen(!avatarModalOpen)} />

                        {avatarModalOpen &&
                            (<div className='w-fit md:w-44 px-2 py-1 flex md:flex-col items-center gap-4 md:gap-2 text-center bg-secondary rounded-2xl shadow-lg absolute md:top-12 md:right-1'>
                                <NavLink to='/perfil'
                                    className='px-4 py-1 rounded-2xl hover:bg-quaternary/40'>
                                    Mi Perfil
                                </NavLink>
                                <NavLink to='/turnos'
                                    className='px-4 py-1 rounded-2xl hover:bg-quaternary/40'>
                                    Mis Turnos
                                </NavLink>
                                <button onClick={() => logOut()}
                                    className='px-4 py-1 rounded-2xl hover:bg-quaternary/40'>
                                    Cerrar sesión
                                </button>
                            </div>)
                        }
                    </div>) :
                (
                    <NavLink to='/iniciar-sesion'
                        onClick={() => setOpen(false)}
                        className='btn uppercase font-semibold px-3 py-1 rounded duration-500 text-quaternary'>
                        Ingresar<MdLogin className='inline' />
                    </NavLink>
                )}
        </>
    )
}
