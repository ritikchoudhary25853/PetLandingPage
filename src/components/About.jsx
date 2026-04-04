import React from 'react'
import MaskGroup from "../assets/Maskgroup.png";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f7f6] py-12 flex justify-center">
      
      <div className="w-[95%] max-w-7xl flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src={MaskGroup}
            alt="pet"
            className="w-64 sm:w-80 md:w-[400px] h-auto object-cover rounded-[20%] shadow-lg"
          />

          {/* Icon */}
          <div className="absolute bottom-[-15px] left-[-15px] bg-green-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
            🦴
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          {/* Tag */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-500 font-semibold mb-3">
            🐾 <span>About Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Dedicated to <span className="text-cyan-500">Your Pet’s</span>
            <br /> Well-Being Always
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
            We recognize that pets hold a special place in our hearts. Our mission is to deliver premium, all-natural products that enhance their health and joy.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-700 text-sm md:text-base">
            <div>✔ 24/7 support</div>
            <div>✔ Lowest Price</div>
            <div>✔ Quick Delivery</div>
            <div>✔ Community Focus</div>
          </div>

          {/* BUTTON */}
          <div className='mt-6'>
            <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full shadow-md w-full sm:w-auto transition">
              View About Us Page
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About;