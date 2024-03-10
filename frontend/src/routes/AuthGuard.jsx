//import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthGuard() {

    const user = useSelector(store => store.user.user);

    return user ? <Outlet /> : <Navigate replace to={'/iniciar-sesion'} />
}

export default AuthGuard;