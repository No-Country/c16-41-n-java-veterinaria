export default function FormInput({ type, label, name, placeholder }) {
    return (
        <div className='flex flex-col gap-1'>
            <label htmlFor={name} className='font-semibold md:text-lg'>{label} *</label>
            <input type={type} name={name} id={name} placeholder={placeholder} required
                className='border border-primary/30 outline-transparent focus:outline-primary py-1 px-2 rounded-2xl text-sm md:text-base' />
        </div>
    )
}
