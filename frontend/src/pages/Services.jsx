import { useEffect, useState } from 'react';
import ServicesSlider from '../components/Services/ServicesSlider';
import { getServicesTest } from '../services/ServiceService';
import { NavLink } from 'react-router-dom';

export default function Services() {

	const [services, setServices] = useState();

	useEffect(() => {
		const getData = () => {
			//provisorio uso el servicesTest
			const savedServices = getServicesTest();
			setServices(savedServices);
		}
		getData();
	}, [])

	return (
		<div id='services-container' className='md:my-5 pt-20 md:mb-20 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/10 font-body'>
			<h1 className='my-6 mx-auto text-3xl md:text-6xl w-1/2 md:w-full text-quinary font-buttons text-center'>Nuestros servicios</h1>
			<div className='w-5/6 xl:w-3/4 mx-auto mt-6 md:mt-8 mb-20 -z-30'>
				{services && <ServicesSlider services={services} />}
			</div>
			<div className='my-5 text-center'>
				<h5 className='mb-4 font-bold text-2xl'>Para otras consultas, contactanos.</h5>
				<NavLink to='/contacto'
					className='py-1 px-5 md:py-2 text-center rounded-full bg-quinary text-white lg:text-xl tracking-wide font-buttons hover:bg-secondary hover:text-quinary'>
					Canales de contacto
				</NavLink>
			</div>
		</div>
	)
}