import PageTitle from '../common/PageTitle'
import WhiteContainer from '../common/WhiteContainer'

export default function OwnerProfile() {
    return (
        <WhiteContainer>
            <PageTitle color='primary'>Mi perfil</PageTitle>
            <div className='mx-4 xl:mx-0 py-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 md:gap-y-4 md:text-start'>
                <div>
                    <p className='font-semibold md:text-lg'>Nombre completo</p>
                    <p className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base'>Jane Doe</p>
                </div>
                <div>
                    <p className='font-semibold md:text-lg'>Telefono</p>
                    <p className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base'>112345678</p>
                </div>
                <div>
                    <p className='font-semibold md:text-lg'>Correo electronico</p>
                    <p className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base'>jane.doe@gmail.com</p>
                </div>
                <div>
                    <p className='font-semibold md:text-lg'>Contraseña</p>
                    <p className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base'>**********</p>
                </div>
            </div>
        </WhiteContainer>
    )
}
