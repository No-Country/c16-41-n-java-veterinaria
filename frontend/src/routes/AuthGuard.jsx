//import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthGuard () {
    //Revisar en redux si hay un usuario guardado con sesion iniciada
    //const loginSlice = useSelector(store => store.users);
    //si encuentra el email retorna el elemento okay, sino navega a la home
    //return loginSlice.email ? <Outlet/> : <Navigate replace to={'/'}/>
}

export default  AuthGuard;