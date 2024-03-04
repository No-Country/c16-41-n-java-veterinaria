import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ServicesSlider from '../components/Services/ServicesSlider';
import { getServicesTest } from '../services/ServiceService';
import MainContainer from '../components/common/MainContainer';
import PageTitle from '../components/common/PageTitle';

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
		<MainContainer>
			<PageTitle color='quinary'>Nuestros servicios</PageTitle>
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
		</MainContainer>
	)
}