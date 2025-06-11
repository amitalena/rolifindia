import { Button, Spinner } from '@material-tailwind/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiMinutemailer } from "react-icons/si";

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {isLoad, setIsLoad} = useState(false);

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Form submitted successfully!');
    };

    return <>
        <div className="w-full bg-white">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            id="phone"
                            type="tel"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: { value: /^\+?[\d\s()-]{7,}$/, message: 'Invalid phone number' },
                                minLength: { value: 7, message: 'Phone number must be at least 7 digits' }
                            })}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            id="company"
                            type="text"
                            className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            {...register('company', {
                                required: 'Company name is required',
                                minLength: { value: 2, message: 'Company name must be at least 2 characters' }
                            })}
                        />
                        {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        rows="4"
                        className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button
                    type="submit"
                    className="w-full normal-case cursor-pointer font-medium text-[16px] shadow-none hover:shadow-md bg-blue-600 text-white py-2 px-4 rounded-md flex justify-center items-center gap-x-4 hover:bg-blue-700 transition"
                >
                    { isLoad ? <Spinner className='w-4 h-4' />:<SiMinutemailer size={18} />}
                    <span>Send Message</span>
                </Button>
            </form>
        </div>
    </>
}

export default ContactForm;