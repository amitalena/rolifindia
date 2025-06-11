import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const PasswordField = ({ control, name, errors, label }) => {
    const [isShow, setIsShow] = useState(false);
    const errorMessage = errors?.[name]?.message;

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input
                        {...field}
                        crossOrigin="anonymous"
                        label={label}
                        color="black"
                        className="!text-black w-full placeholder-shown:!border-black focus:!border-t-transparent"
                        type={isShow ? "text" : 'password'}
                        icon={
                            <button type="button" className="cursor-pointer" onClick={() => setIsShow(!isShow)}>
                                {
                                    isShow ? <FaRegEyeSlash size={18} className="text-black" /> : <FaRegEye size={18} className="text-black" />
                                }
                            </button>
                        }
                        value={field.value || ""}
                        onChange={(e) => field.onChange(e.target.value)}
                    />
                )}
            />
            {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
        </div>
    );
};

export default PasswordField;
