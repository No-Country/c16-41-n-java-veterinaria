import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Home from '../pages/Home'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Services from '../pages/Services'
import Register from '../pages/Register'
import Contact from '../pages/Contact'
import AuthGuard from './AuthGuard'
import Profile from '../pages/Profile'
import Appointments from '../pages/Appointments'
import LogIn from '../pages/LogIn'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path={routes.public.HOME} element={<Home />} />
                <Route path={routes.public.ABOUT} element={<About />} />
                <Route path={routes.public.SERVICES} element={<Services />} />
                <Route path={routes.public.CONTACT} element={<Contact />} />
                <Route path={routes.public.REGISTER} element={<Register />} />
                <Route path={routes.public.LOGIN} element={<LogIn />} />
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
