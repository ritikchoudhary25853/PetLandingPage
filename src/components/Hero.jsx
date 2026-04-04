import React from 'react'
import HeroDog from "../assets/HeroPhoto.jpeg";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#e2f9c8] to-[#b1d7e6] flex items-start justify-center pt-28   ">
      
      <div className="w-[95%] max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
          <div className="max-w-3xl">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-[1] text-gray-800">
          Holistic <span className="text-cyan-500">Health</span> Choices
          <br />
          for Beloved Pet
          </p>

       

          <p className="text-gray-600 mt-4 text-base md:text-lg">
            We offer all-natural products designed to nurture your pets’ health and happiness.
            Give your fury friends the care they deserve. 
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded shadow-md w-full sm:w-auto">
              Shop Now
            </button>

            <button className="flex items-center gap-2 px-5 py-3 rounded border bg-white shadow-sm w-full sm:w-auto justify-center">
              <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
                ▶
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="h-96 w-96 rounded-3xl flex justify-center overflow-hidden">
        <img
        src={HeroDog}
        alt="dog"
        className="w-full h-full object-contain"
        />
        </div>

      </div>
    </div>
  )
}

export default Hero;