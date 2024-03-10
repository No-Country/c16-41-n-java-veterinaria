export default function SelectPet({ pets }) {
    return (
        <>
            <label htmlFor='inputPet' className='font-semibold md:text-lg'>Mascota *</label>

            {pets.length > 0 ?
                (<select required
                    defaultValue={''}
                    name='inputPet'
                    id='inputPet'
                    className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl focus:rounded-b-none text-sm md:text-base'>
                    <option key='0' disabled value=''>
                        Selecciona una mascota
                    </option>
                    {pets.map((pet) => {
                        const { id, name, breed } = pet;

                        return (
                            <option key={id} value={id}>
                                {name} - {breed}
                            </option>
                        )
                    })}
                </select>)
                :
                (<select required
                    defaultValue={''}
                    name='inputPet'
                    id='inputPet'
                    className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl focus:rounded-b-none text-sm md:text-base'>
                    <option key='0' disabled value=''>
                        Sin mascotas registradas
                    </option>
                </select>)
            }


        </>
    )
}
