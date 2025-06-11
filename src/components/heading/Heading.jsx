const Heading = ({ children }) => {
    return (
      <div className="w-full font-semibold text-[20px] sm:text-[28px] my-8 flex justify-center items-center gap-x-4 relative">
        {/* Left decorative pattern */}
        <div className="flex items-center gap-x-1">
          <div className="w-4 h-4 bg-amber-500 rotate-45"></div>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-transparent"></div>
        </div>
        
        {/* Heading text */}
        <h2 className="text-center text-gray-800 px-4 relative">
          {children}
          {/* Underline effect */}
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></span>
        </h2>
        
        {/* Right decorative pattern */}
        <div className="flex items-center gap-x-1">
          <div className="w-12 h-1 bg-gradient-to-l from-amber-400 to-transparent"></div>
          <div className="w-4 h-4 bg-amber-500 rotate-45"></div>
        </div>
      </div>
    );
  };
  
  export default Heading;