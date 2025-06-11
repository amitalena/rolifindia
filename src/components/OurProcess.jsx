import React from 'react';

const OurProcess = () => {
  const steps = [
    {
      title: "Design Consultation",
      description: "Our interior experts analyze your space and requirements to recommend perfect furniture, tiles, and electrical solutions.",
      icon: "📐",
      color: "bg-blue-100 border-blue-500 text-blue-600"
    },
    {
      title: "Product Selection",
      description: "Choose from our curated collections of premium furniture, tiles, sanitary ware, and electrical fixtures with customization options.",
      icon: "🛋️",
      color: "bg-amber-100 border-amber-500 text-amber-600"
    },
    {
      title: "3D Visualization",
      description: "See your selections come to life with our realistic 3D room visualizations before finalizing your order.",
      icon: "👁️",
      color: "bg-purple-100 border-purple-500 text-purple-600"
    },
    {
      title: "Seamless Delivery",
      description: "Professional handling and timely delivery of all items with complete care and quality checks.",
      icon: "🚚",
      color: "bg-green-100 border-green-500 text-green-600"
    },
    {
      title: "Installation & Support",
      description: "Expert installation services for electrical items and lifetime maintenance support for all products.",
      icon: "🛠️",
      color: "bg-red-100 border-red-500 text-red-600"
    }
  ];

  return (
    <section className="relative py-5 px-4 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-600 rounded-full text-sm font-semibold mb-4">
            HOW WE WORK
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl text-main-size mx-auto">
            From concept to completion - our step-by-step approach ensures perfect results for your space
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Step connector (except last) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-8 h-1 bg-gray-200 group-hover:bg-amber-400 transition-colors duration-300"></div>
              )}
              
              <div className="h-full bg-white p-6 rounded-xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className={`w-16 h-16 ${step.color} border-2 rounded-full flex items-center justify-center text-3xl mb-6 mx-auto transition-transform duration-300 group-hover:scale-110`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white absolute -top-3 left-1/2 transform -translate-x-1/2 rotate-45"></div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;