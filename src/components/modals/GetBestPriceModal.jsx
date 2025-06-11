import MyModal from './MyModal';
import { IoCallOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@material-tailwind/react';

// Validation schema
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    address: yup.string().required('Address is required'),
    message: yup.string(),
});

const GetBestPriceModal = ({
    isOpen = false,
    setIsOpen = () => { }
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        // Here you would typically send the data to your backend
        alert('Form submitted successfully!');
        reset();
        setIsOpen(false);
    };

    const handleCancel = () => {
        reset();
        setIsOpen(false);
    };

    return (
        <MyModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            size='md'
            title="Get Best Price"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col mt-3 justify-start items-start gap-4'>
                    <div className='grid grid-cols-1 w-full md:grid-cols-2 gap-4'>
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">Name*</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name')}
                                className={`w-full px-2 py-2 border text-sm font-medium rounded-md ${errors.name ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                            )}
                        </div>

                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">Email*</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email')}
                                className={`w-full px-2 py-2 text-sm border font-medium rounded-md ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 w-full md:grid-cols-2 gap-4'>
                        <div className="w-full">
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-800 mb-1">Mobile*</label>
                            <input
                                id="mobile"
                                type="tel"
                                {...register('mobile')}
                                className={`w-full px-2 py-2 text-sm border font-medium rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.mobile && (
                                <p className="mt-1 text-xs text-red-500">{errors.mobile.message}</p>
                            )}
                        </div>

                        <div className="w-full">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-800 mb-1">Address*</label>
                            <input
                                id="address"
                                type="text"
                                {...register('address')}
                                className={`w-full px-2 py-2 text-sm border font-medium rounded-md ${errors.address ? 'border-red-500' : 'border-gray-400'}`}
                            />
                            {errors.address && (
                                <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="w-full">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">Message (Optional)</label>
                        <textarea
                            id="message"
                            rows={4}
                            {...register('message')}
                            className="w-full px-2 py-2 border text-sm font-medium border-gray-400 rounded-md"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        <Button
                            variant="text"
                            color="gray"
                            onClick={handleCancel}
                            className="normal-case font-medium cursor-pointer bg-gray-400 hover:bg-gray-500 shadow-none hover:shadow-sm text-[15px] py-2 px-4"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="bg-green-700 normal-case cursor-pointer font-medium text-[15px] py-2 px-4 shadow-none hover:shadow-sm hover:bg-green-800"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </MyModal>
    );
}

export default GetBestPriceModal;