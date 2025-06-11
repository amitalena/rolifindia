import { Button } from "@material-tailwind/react";
import { Tooltip } from "antd";

/**
 * @param {Object} props
 * @param {Function} props.onClick
 * @param {string} props.title
 * @param {string} props.className
 * @param {'button' | 'reset' | 'submit'} props.type
 * @param {React.ReactNode} props.children
 * @param {'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftBottom' | 'leftTop' | 'right' | 'rightBottom' | 'rightTop' | 'topLeft' | 'topRight' | 'top'} props.placement
 * @returns 
 */
const MyButton = ({
    onClick = () => { },
    className = "",
    title,
    children,
    placement = "bottom",
    type = "button"
}) => {
    return <>
        <Tooltip title={title} placement={placement}>
            <Button
                type={type}
                className={`cursor-pointer shadow-none hover:shadow-sm normal-case font-medium text-[15px] py-2 rounded-sm ${className}`}
                onClick={onClick}
            >{children}</Button>
        </Tooltip>
    </>
}

export default MyButton;