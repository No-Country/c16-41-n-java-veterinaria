import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Header from '../components/common/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Register from '../pages/Register'
import AuthGuard from './AuthGuard'
import Profile from '../pages/Profile'
import Appointments from '../pages/Appointments'
import Footer from '../components/common/Footer'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={routes.public.HOME} element={<Home />} />
                <Route path={routes.public.ABOUT} element={<About />} />
                <Route path={routes.public.SERVICIOS} element={<Services />} />
                <Route path={routes.public.REGISTER} element={<Register />} />

                {/* Guard para que los usuarios sin sesión iniciada no ingresen a perfil y turnos
                    <Route element={<AuthGuard />}>
                    <Route path={routes.private.PROFILE} element={<Profile />} />
                    <Route path={routes.private.APPOINTMENTS} element={<Appointments />} />
                    </Route>
                */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
