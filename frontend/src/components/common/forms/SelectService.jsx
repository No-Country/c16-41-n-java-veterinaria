import { getServices } from "../../../services/ServiceService";

export default function SelectService() {

    const services = getServices();

    return (
        <>
            <label htmlFor='inputService' className='font-semibold md:text-lg'>Servicio *</label>
            <select required
                defaultValue={''}
                name='inputService'
                id='inputService'
                placeholder='Selecciona un servicio'
                className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl focus:rounded-b-none text-sm md:text-base'>
                <option key='0' disabled value=''>
                    Selecciona un servicio
                </option>
                {services && services.map((service) => {
                    return (
                        <option key={service.id} value={service.id}>
                            {service.name} - ${service.cost}
                        </option>
                    )
                })}
            </select >
        </>
    )
}
