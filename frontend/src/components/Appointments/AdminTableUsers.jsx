import { getPetByPetId } from "../../services/PetService";
import { getServiceById } from "../../services/ServiceService"
import { findUserById } from "../../services/UserService";

export default function AdminTableUsers({ users, pets }) {

    return (
        <div className='my-4 mx-2 relative overflow-x-auto shadow-md rounded-lg'>
            <table className='w-full table-auto border-collapse !text-start text-sm lg:text-base'>
                <thead className='bg-quaternary text-secondary font-semibold'>
                    <tr>
                        <th scope='col' className='p-1 text-start'>Id</th>
                        <th scope='col' className='p-1 text-start'>Nombre</th>
                        <th scope='col' className='p-1 text-start'>Email</th>
                        <th scope='col' className='p-1 text-start'>Telefono</th>
                        <th scope='col' className='p-1 text-start'>Mascotas</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((ap) => {

                            const { id, name, email, role, phone } = ap;

                            return role != 'Admin' && (
                                <tr key={id} className='even:bg-tertiary/40'>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {id}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {name}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {email}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary break-words'>
                                        {phone ? phone : '-'}
                                    </td>
                                    <td className='px-1 py-2 text-quaternary'>
                                        {0}
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
