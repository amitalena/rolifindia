import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { careerSchema } from '../../configs/validations';
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFileUpload,
} from 'react-icons/fa';

const CareerForm = () => {
    // Form validation schema
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(careerSchema)
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = async (data) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', data);
        setIsSubmitted(true);
        reset();
    };

    return <>
        <div className="md:w-2/3 p-8">
            {isSubmitted ? (
                <div className="text-center py-12">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <FaCheck className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-gray-900">Application Submitted!</h3>
                    <p className="mt-2 text-sm text-gray-500">
                        Thank you for your interest. We'll review your application and get back to you soon.
                    </p>
                    <div className="mt-6">
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Submit Another Application
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Application Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    {...register('name')}
                                    className={`block w-full pl-10 pr-3 py-2 border ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
                                    placeholder="John Doe"
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Mobile Field */}
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaPhone className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="mobile"
                                    type="tel"
                                    {...register('mobile')}
                                    className={`block w-full pl-10 pr-3 py-2 border ${errors.mobile ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'} rounded-md shadow-sm focus:outline-none sm:text-sm`}
                                    placeholder="1234567890"
                                />
                            </div>
                            {errors.mobile && (
                                <p className="mt-2 text-sm text-red-600">{errors.mobile.message}</p>
                            )}
                        </div>

                        {/* Address Field */}
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address (Optional)
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="address"
                                    type="text"
                                    {...register('address')}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="123 Main St, City, Country"
                                />
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                Resume
                            </label>
                            <div className="mt-1 flex items-center">
                                <label
                                    htmlFor="resume-upload"
                                    className={`cursor-pointer relative bg-white py-2 px-3 border ${errors.resume ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                >
                                    <FaFileUpload className="h-5 w-5 text-gray-400 mr-2" />
                                    <span>Choose file</span>
                                    <input
                                        id="resume-upload"
                                        name="resume"
                                        type="file"
                                        {...register('resume')}
                                        className="sr-only"
                                        accept=".pdf,.docx"
                                    />
                                </label>
                                <span className="ml-3 text-sm text-gray-500">
                                    PDF or DOCX (max. 2MB)
                                </span>
                            </div>
                            {errors.resume && (
                                <p className="mt-2 text-sm text-red-600">{errors.resume.message}</p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Cover Message (Optional)
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    rows={4}
                                    {...register('message')}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="Tell us why you'd be a good fit..."
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : 'Submit Application'}
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    </>
}

export default CareerForm;