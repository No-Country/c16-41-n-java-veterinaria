export default function SelectUser({ setUserId, users }) {
    return (
        <>
            <label htmlFor='inputUser' className='font-semibold md:text-lg'>Cliente *</label>
            <select required
                defaultValue={''}
                name='inputUser'
                id='inputUser'
                onChange={(e) => setUserId(e.target.value)}
                className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl focus:rounded-b-none text-sm md:text-base'>
                <option key='0' disabled value=''>
                    Selecciona un usuario
                </option>
                {users && users.map((user) => {
                    const { id, role, name } = user;

                    return role != 'Admin' &&
                        (
                            <option key={id} value={id}>
                                {id} - {name}
                            </option>
                        )
                })}
            </select >
        </>
    )
}
