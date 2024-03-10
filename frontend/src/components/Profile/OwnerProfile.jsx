import PageTitle from '../common/PageTitle'
import WhiteContainer from '../common/WhiteContainer'
import ProfileData from './ProfileData';

export default function OwnerProfile({ user }) {

    const { id, name, lastname, email, password, role, phone } = user;

    return (
        <WhiteContainer>
            <PageTitle color='primary'>Mi perfil</PageTitle>
            <div className='mx-4 xl:mx-0 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                <ProfileData title='Nombre completo' value={name + ' ' + lastname} />
                <ProfileData title='Teléfono' value={phone} />
                <ProfileData title='Correo electrónico' value={email} />
                <ProfileData title='Contraseña' value={password.replace(/./g, '*')} />
            </div>
        </WhiteContainer>
    )
}
