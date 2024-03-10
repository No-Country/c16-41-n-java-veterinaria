import Values from '../../assets/about-us/values.png';
import Value from './Value';

export default function ValuesSection() {
    return (
        <section className='m-6 p-10 rounded-3xl border border-quinary'>
            <h3 className='text-2xl md:text-4xl font-bold mb-2'>Nuestros <span className='text-quinary'>valores</span></h3>
            <div className='flex flex-row gap-10'>
                <div className='md:w-2/3 flex flex-col gap-3'>
                    <Value title='Compasión'>
                        Nos preocupamos profundamente por el bienestar físico y emocional de todas las mascotas y sus familias. Nos esforzamos por comprender sus necesidades individuales y brindar un cuidado compasivo en cada interacción.
                    </Value>
                    <Value title='Excelencia'>
                        Buscamos la excelencia en todo lo que hacemos, desde la atención médica hasta el servicio al cliente. Nos comprometemos a mantener altos estándares de calidad en nuestros servicios veterinarios, implementando las últimas prácticas y tecnologías para garantizar la mejor atención posible para las mascotas.
                    </Value>
                    <Value title='Innovación'>
                        Buscamos continuamente nuevas formas de mejorar y avanzar en nuestro campo veterinario. Estamos comprometidos con la investigación y el desarrollo de nuevas técnicas y tratamientos para garantizar que nuestras mascotas reciban la mejor atención médica disponible.
                    </Value>
                </div>
                <div className='hidden md:block'>
                    <img src={Values} alt='Perro' className='max-h-[60vh]' />
                </div>
            </div>
        </section>
    )
}
