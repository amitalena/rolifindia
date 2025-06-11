
const IconButton = ({
    icon,
    route = "",
    className = ""
}) => {
    return <>
        <a href={route} target="_blank" className="w-auto h-auto">
            <div className={`bg-white rounded-full flex justify-center items-center w-6 transition-all duration-300 hover:rotate-y-[360deg] transform h-6 cursor-pointer hover:text-white text-black ${className}`}>
                {icon}
            </div>
        </a>
    </>
}

export default IconButton;