export default function PageSubtitle({ color, children }) {
    return (
        <h2 className={`'mt-5 md:mt-6 md:mb-5 lg:mt-10 lg:mb-6 text-3xl md:text-6xl font-buttons text-center ' + text-` + color}>
            {children}
        </h2>
    )
}
