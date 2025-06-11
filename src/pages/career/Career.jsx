import {
    FaCheck,
    FaBriefcase
} from 'react-icons/fa';
import CareerForm from './CareerForm';


const Career = () => {
    return (
        <div className=" bg-gray-50 py-4 px-4 md:px-8">
            <div className="w-full mx-auto">

                {/* Main Content */}
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Company Info */}
                        <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6 flex items-center">
                                <FaBriefcase className="mr-2" /> Why Work With Us?
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FaCheck className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5" />
                                    <span>Competitive salaries and benefits</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5" />
                                    <span>Flexible work arrangements</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5" />
                                    <span>Professional development opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <FaCheck className="h-5 w-5 flex-shrink-0 mr-3 mt-0.5" />
                                    <span>Inclusive and diverse workplace</span>
                                </li>
                            </ul>

                            <div className="mt-12">
                                <h3 className="text-lg font-semibold mb-4">Current Openings</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="hover:underline flex items-center">
                                            <FaBriefcase className="mr-2" size={14} /> Frontend Developer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline flex items-center">
                                            <FaBriefcase className="mr-2" size={14} /> Backend Engineer
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline flex items-center">
                                            <FaBriefcase className="mr-2" size={14} /> UX Designer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Application Form */}
                        <CareerForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;