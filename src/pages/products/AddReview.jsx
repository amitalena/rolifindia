import { useState } from 'react';

const AddReview = () => {
  const [rating, setRating] = useState(0);
 
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <h2 className="text-2xl font-bold text-gray-900 mb-1">Rate this Product</h2>
      <p className="text-gray-600 mb-2">Share your overall experience</p>
      
      <div className="flex items-center justify-center mb-2">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={index}
              type="button"
              className={`text-3xl mx-1 cursor-pointer transition-all duration-300 focus:outline-none ${starValue <= (rating) ? 'text-yellow-700' : 'text-gray-300 hover:text-gray-400'}`}
              onClick={() => setRating(starValue)}
            >
              ★
            </button>
          );
        })}
      </div>
      
    </div>
  );
};

export default AddReview;