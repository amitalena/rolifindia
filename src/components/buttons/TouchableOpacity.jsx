import { Button } from "@material-tailwind/react";

const TouchableOpacity = ({
    children,
    onClick = () => {},
    className = "",
}) => {
    return <>
        <Button
            className={`bg-transparent cursor-pointer text-black outline-none shadow-none hover:shadow-none p-1 rounded-md ${className}`}
            onClick={onClick}
        >{children}</Button>
    </>
}

export default TouchableOpacity;