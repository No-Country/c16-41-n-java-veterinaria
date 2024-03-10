export default function MissionSection() {
    return (
        <section className='p-10 md:p-20 bg-gradient-230 from-quaternary to-secondary flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-40'>
            <div className='order-1 md:order-2'>
                <h2 className='text-2xl md:text-4xl text-center md:text-start font-bold md:!leading-relaxed tracking-wider'>Nuestra misión es proporcionar atención veterinaria compasiva y de alta calidad para todas las mascotas.</h2>
            </div>
            <div className='order-2 md:order-1 flex flex-col gap-2'>
                <p className='text-xl md:text-2xl !leading-normal'>Nos esforzamos por ser líderes en el cuidado animal, brindando un refugio acogedor y servicios veterinarios excepcionales.</p>
                <p className='text-xl md:text-2xl !leading-normal'>Aspiramos a ser reconocidos por nuestro compromiso inquebrantable con el bienestar animal y la excelencia en la atención veterinaria, estableciendo estándares de calidad en nuestra comunidad.</p>
            </div>
        </section>
    )
}
