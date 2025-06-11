import { Title } from "react-head";
import { useForm } from "react-hook-form";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import MyButton from "../../components/buttons/MyButton";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../configs/validations";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";

const Login = () => {
    const [isLoad, setIsLoad] = useState(false);
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = async (data) => {
        const BASE_URL = import.meta.env.VITE_API_URL;
        const formData = new FormData();
        formData.append('email', data.email);
        formData.append('password', data.password);

        setIsLoad(true);
        try {
            const response = await axios.postForm(`${BASE_URL}/auth/login.php`, formData);
            if (response.status === 200 || response.status === 201) {
                console.log(response.data);
            }
        } catch (error) {
            console.log("Login Error:", error);
        } finally {
            setIsLoad(false);
        }
    }

    return <>
        <Title>Login Admin - Rolif India</Title>
        <main className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] sm:w-1/2 lg:w-[30%] p-2 flex flex-col justify-center items-center bg-white rounded-md shadow-md border border-solid border-gray-300 gap-y-4 py-4">
                <h2 className="font-semibold text-[28px]">Admin Login</h2>
                <div className="grid grid-cols-1 gap-y-4 w-[95%]">
                    <EmailField
                        name={"email"}
                        errors={errors}
                        control={control}
                        label={"Email"}
                    />
                    <PasswordField
                        name={"password"}
                        errors={errors}
                        control={control}
                        label={"Password"}
                    />
                    <MyButton type="submit" className="bg-blue-800 !text-[16px] gap-x-2 flex justify-center items-center">
                        {isLoad ? <Spinner className="w-4 h-4" /> : null}
                        Submit
                    </MyButton>
                </div>
            </form>
        </main>
    </>
}

export default Login;