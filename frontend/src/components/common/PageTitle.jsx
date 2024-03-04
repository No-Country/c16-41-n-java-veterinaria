export default function PageTitle({ color, children }) {
    return (
        <h1 className={`'mt-5 md:my-6 lg:my-10 text-3xl md:text-6xl font-buttons text-center ' + text-` + color}>
            {children}
        </h1>
    )
}
