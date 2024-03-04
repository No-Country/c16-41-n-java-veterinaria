export default function MainContainer({children}) {
    return (
        <main className='pt-20 md:mb-20 bg-gradient-to-b from-secondary via-secondary/60 to-secondary/10 font-body'>
            {children}
        </main>
    )
}
