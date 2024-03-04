import AboutUs from '../../assets/about-us/about-us.jpg';
import { motion } from 'framer-motion';
import PageTitle from '../common/PageTitle';

export default function HistorySection() {
    return (
        <motion.section className='md:w-3/4 px-8 flex flex-col gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <PageTitle color='quinary'>Nuestra historia</PageTitle>
            <div>
                <img src={AboutUs} alt='Fundadores' className='my-5 mx-auto' />
                <p className='text-quaternary text-2xl md:text-4xl font-bold'>El Comienzo de un Sueño</p>
                <p className='text-base md:text-xl'>Hace una década, en el corazón de nuestra comunidad, dos apasionados amantes de los animales, Ana y Carlos, decidieron convertir su amor por las mascotas en algo más que una simple pasión. Con una profunda comprensión de las necesidades de las mascotas y la falta de servicios veterinarios accesibles en la zona, decidieron dar un paso audaz y fundar nuestra veterinaria, entonces conocida como {"'Amigos Peludos'"}.</p>
                <p className='text-quaternary text-2xl md:text-4xl font-bold'>Una Clínica con Corazón</p>
                <p className='text-base md:text-xl'>Armados con su experiencia en la atención y el cuidado de una variedad de animales, Ana y Carlos transformaron una pequeña clínica en un refugio acogedor para las mascotas y sus dueños. Con dedicación y esfuerzo, construyeron una reputación de confianza y excelencia en el cuidado veterinario.</p>
                <p className='text-base md:text-xl'>A lo largo de los años, {"'Amigos Peludos'"} ha crecido y evolucionado, adaptándose constantemente para satisfacer las necesidades cambiantes de nuestras mascotas y sus familias. Nuestra veterinaria se ha convertido en un pilar de la comunidad, brindando no solo servicios médicos excepcionales, sino también apoyo y orientación a todos aquellos que aman a sus mascotas.</p>
                <p className='text-quaternary text-2xl md:text-4xl font-bold'>Compromiso con el Bienestar Animal</p>
                <p className='text-base md:text-xl'>Hoy, diez años después de nuestros modestos comienzos, seguimos comprometidos con nuestra misión original: proporcionar atención veterinaria compasiva y de alta calidad para todas las mascotas que pasan por nuestras puertas. Somos una familia en constante crecimiento, unida por nuestro amor compartido por los animales y el deseo de hacer del mundo un lugar mejor para ellos.</p>
            </div>
        </motion.section>
    )
}
