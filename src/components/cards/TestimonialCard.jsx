import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="relative flex flex-col h-[210px] px-6 py-4 border border-solid border-gray-200 my-4 mb-8 text-center bg-white rounded-md shadow-md overflow-hidden">
            {/* Quote Icon Design */}
            <div className="absolute top-[-22px] left-[-8px] w-[100px] h-[100px] rounded-br-full flex items-center justify-center">
                <FaQuoteLeft className="text-[20px] rotate-0 text-main-color" />
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-main-color">{testimonial.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{testimonial.feedback}</p>

                {/* Footer: Avatar, Rating, Name, Designation */}
                <div className="mt-4 flex flex-col items-center">
                    {/* Avatar: Uncomment and add image if needed */}
                    {/* <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-[#1C85C6]" /> */}

                    <div className="flex justify-center items-center gap-1 mt-1">
                        {Array(5).fill(0).map((_, index) => (
                            <FaStar key={index} className="text-yellow-400 text-[18px]" />
                        ))}
                    </div>

                    <h4 className="mt-1 font-semibold text-main-color">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
