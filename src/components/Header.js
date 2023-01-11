export default function Header(props) {
    return (
        <>
            <div className="bg-gray-300">
                <div className="max-w-7xl mx-auto min-h-screen p-6 px-4">{props.children}</div>
            </div>
        </>
    )
}
