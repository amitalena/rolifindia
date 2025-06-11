import { Input } from "@material-tailwind/react";
import { Controller } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";

const EmailField = ({ control, name, errors, label }) => {
    const errorMessage = errors?.[name]?.message;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field} // ✅ Ensures controlled value binding
                        crossOrigin="anonymous"
                        label={label}
                        color="black"
                        className="!text-black w-full placeholder-shown:!border-black focus:!border-t-transparent"
                        type={"email"}
                        icon={<MdOutlineMailOutline size={18} className="text-black" />}
                        value={field.value || ""} // ✅ Ensures default empty string to prevent uncontrolled input
                        onChange={(e) => field.onChange(e.target.value)} // ✅ Explicitly update field value
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default EmailField;
