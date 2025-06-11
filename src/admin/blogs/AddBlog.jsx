import { Title } from "react-head";
import { useForm } from "react-hook-form";
import EditorField from "../../components/fields/EditorField";
import MyButton from "../../components/buttons/MyButton";
// import getFormattedDateTime from "../../functions/getFormattedDateTime";
import { Spinner } from "@material-tailwind/react";
import AdminViewer from "../../screens/AdminViewer";
import InputField from "../../components/fields/InputField";
import ImageField from "../../components/fields/ImageField";
import DateField from "../../components/fields/DateField";
import { useState } from "react";

const AddBlog = () => {
    const [isLoad, setIsLoad] = useState(false);
    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    return <>
        <Title>Add Blog - Rolif India</Title>
        <AdminViewer title="Add Blog" backview={true}>
            <div className="w-full flex flex-col justify-start mb-3 items-start gap-y-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 items-center justify-center gap-y-2">
                    <InputField
                        control={control}
                        name="title"
                        label="Title"
                        errors={errors}
                    />
                    <ImageField
                        control={control}
                        name="image"
                        errors={errors}
                    />
                    <DateField
                        name="date"
                        control={control}
                        errors={errors}
                    />
                </div>
                <div className="w-full">
                    <EditorField
                        control={control}
                        name="description"
                        errors={errors}
                    />
                </div>
                <div className="w-full flex justify-end gap-x-2 items-center">
                    <MyButton className="bg-gray-800" onClick={() => reset()}>Reset</MyButton>
                    <MyButton className="bg-blue-700 flex justify-center items-center gap-x-2" >
                        {
                            isLoad ? <Spinner className="w-4 h-4" /> : null
                        }
                        <span>Publish</span>
                    </MyButton>
                </div>
            </div>
        </AdminViewer>
    </>
};

export default AddBlog;
