import React from 'react'
import logo from "../assets/Logo.png";
import Facebook from "../assets/facebook.png";
import Insta from "../assets/Insta.png";
import Call from "../assets/Call.png";
import Mail from "../assets/Mail.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <div className='w-full bg-gray-800 '>

      {/* TOP */}
      <div className='w-full text-white flex flex-col md:flex-row justify-between items-center'>
       
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 m-6 md:m-10 text-center sm:text-left'>
          <img 
            src={logo} 
            alt="logo"
            className='h-16 md:h-26 object-cover'
          />
          <p className='max-w-md text-sm md:text-base'>
            we are dedicated to provide natural, high-quality products that promote the well-being of your beloved pets.
          </p>
        </div>

        <div className='m-6 md:m-10 text-center md:text-left'> 
          <p className='text-3xl font-extrabold'>Useful Links</p>

          {/* SHOW on mobile also */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 font-medium ">
            <a href="#home" className="!no-underline !text-white hover:text-blue-500">Home</a>
            <a href="#about" className="!no-underline !text-white hover:text-blue-500">About</a>
            <a href="#service" className="!no-underline !text-white hover:text-blue-500">Services</a>
            <a href="#products" className="!no-underline !text-white hover:text-blue-500">Products</a>
            <a href="#contact" className="!no-underline !text-white hover:text-blue-500">Contact us</a>
          </div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className='bg-gray-700 flex flex-col lg:flex-row justify-between items-center gap-6 py-6 text-white'>
        
        <div className='flex justify-center items-center gap-2 ml-10'>
          <div className='h-8 w-8 bg-blue-600 rounded-full flex justify-center items-center border-2 border-white'>
            <img src={Facebook} alt="facebook" className='h-4' />
          </div>
          <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
            <img src={Insta} alt="insta" className='h-4'/>
          </div>
          <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
            <img src={Twitter} alt="twitter" className='h-4'/>
          </div>
          <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
            <h6 className='pt-1'>in</h6>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-5 text-center'>
          
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
              <img src={Call} alt="Contact Number" />
            </div>
            <p className='text-sm pt-3'>9547582243</p>
          </div>

          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
              <img src={Mail} alt="Contact Number" />
            </div>
            <p className='text-sm pt-3'>yossef.gitmasters@gmail.com</p>
          </div>

          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 bg-black rounded-full flex justify-center items-center border-2 border-white'>
              <img src={Mail} alt="Address" />
            </div>
            <p className='text-sm max-w-xs pt-3'>Suite 3 first floor Grove Chambers 36 Green Lane, England</p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row justify-between items-center text-white text-center gap-2 py-4'>
        
        <div>
          <p className='text-sm m-10'>Copyright © 2024 All Rights Reserved</p>
        </div>

        <div>
          <p className='text-sm m-10'>Privacy Policy • Terms & Conditions</p>
        </div>
      </div>

    </div>
  )
}

export default Footer;