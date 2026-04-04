import React from 'react'
import logo from "../assets/Logo.png";
import Check from "../assets/green tik.png";
import Cross from "../assets/crosss.png";

const WhyChooseUs = () => {

  const headers = [
    "Brands",
    "Ethical and Cruelty-Free",
    "Vet-Approved Formulas",
    "100% Natural Ingredients",
    "Customer Satisfaction",
    "Sustainable and Eco-Friendly",
  ];

  return (
    <div className='w-full py-16 px-4 md:px-10'>

      {/* TOP SECTION */}
      <div className="flex items-center justify-center lg:justify-start gap-2 text-green-500 font-semibold mb-3">
            🐾 <span>Benefits with Us</span>
          </div>

      <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
        
        <p className='text-3xl md:text-5xl font-extrabold text-center md:text-left'>
          Why <span className='text-blue-400'>Choose</span> Us
        </p>

        <p className='max-w-xl text-gray-600 text-center md:text-left'>
          Choosing us means prioritizing your pet's health with high-quality, all natural products. 
          Our passion for pet care drives us to provide exceptional services and trusted solutions 
          for your furry family members.
        </p>

      </div>

      {/* TABLE */}
      <div className="mt-12 border rounded-2xl overflow-hidden">

        {/* Scroll Wrapper for mobile */}
        <div className="overflow-x-auto">
          
          <div className="min-w-[700px]">

            {/* HEADER ROW */}
            <div className="grid grid-cols-6 bg-white text-gray-700 font-semibold text-center py-4 px-2">
              {headers.map((item, index) => (
                <div key={index} className="text-xs md:text-sm lg:text-base px-2">
                  {item}
                </div>
              ))}
            </div>

            {/* OUR BRAND ROW */}
            <div className="grid grid-cols-6 bg-[#9cc7d3] items-center text-center py-6">
              
              <div className="flex justify-center">
                <div className="bg-white w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shadow">
                  <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="bg-white w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shadow">
                    <img src={Check} alt="check" className="w-5 h-5 object-contain" />
                  </div>
                </div>
              ))}
            </div>

            {/* OTHER BRAND ROW */}
            <div className="grid grid-cols-6 bg-[#bfe3a8] items-center text-center py-6">
              
              <div className="flex justify-center">
                <div className="bg-white px-2 py-1 md:px-3 md:py-2 rounded-md text-gray-700 text-xs md:text-sm font-medium shadow">
                  Other Brand
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="bg-white w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center shadow">
                    <img src={Cross} alt="cross" className="w-5 h-5 object-contain" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default WhyChooseUs