import { getPetByPetId } from "../../services/PetService";
import { getServiceById } from "../../services/ServiceService"
import { findUserById } from "../../services/UserService";

export default function AdminTableAppointments({ appointments, users, pets }) {

    return (
        <div className='my-4 mx-2 relative overflow-x-auto shadow-md rounded-lg'>
            <table className='w-full table-auto border-collapse !text-start text-sm lg:text-base'>
                <thead className='bg-quaternary text-secondary font-semibold'>
                    <tr>
                        <th scope='col' className='p-1 text-start'>Id</th>
                        <th scope='col' className='p-1 text-start'>Cliente</th>
                        <th scope='col' className='p-1 text-start'>Fecha Turno</th>
                        <th scope='col' className='p-1 text-start'>Mascota</th>
                        <th scope='col' className='p-1 text-start'>Servicio</th>
                        <th scope='col' className='p-1 text-start'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments &&
                        appointments.map((ap) => {

                            const { id, ownerId, petId, serviceId, dateTime, status } = ap;
                            const owner = findUserById(users, ownerId);

                            return (
                                <tr key={id} className='even:bg-tertiary/40'>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {id}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {owner.name} ({owner.id})
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {dateTime}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {getPetByPetId(pets, petId).name} - {getPetByPetId(pets, petId).breed}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary break-words'>
                                        {(getServiceById(serviceId)).name}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {status}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
