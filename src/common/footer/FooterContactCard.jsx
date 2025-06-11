const FooterContactCard = ({
    icon,
    title = "",
    content,
}) => {
    return <>
        <div className="w-full rounded-md h-[120px] flex justify-start items-start gap-x-6 py-3 px-4 bg-gray-50 border border-gray-200 border-solid hover:shadow-[0px_0px_3px_1px_#e5e7eb] hover:-translate-y-2 transition-all duration-300">
            <div className="mt-2">
                {icon}
            </div>
            <div className="flex flex-col justify-start gap-y-4 -space-y-4 items-start">
                <h2 className="font-semibold text-[20px] text-main-color">{title}</h2>
                <p className="text-gray-700">{content}</p>
            </div>
        </div>
    </>
}

export default FooterContactCard;