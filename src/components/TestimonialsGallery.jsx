import React from 'react'
import Testimonial from './Testimonial';
import d1 from "../assets/d1.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";

const TestimonialsGallery = () => {

    const testimonials = [
    {
      name: "Bessie Cooper",
      img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bessie Cooper",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Bessie Cooper",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  const gallery = [
    d1,
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=400",
    d3,
    d4,
  ];

  return (
    <div className="w-full">
      {/* TESTIMONIALS */}
      <div className="bg-[#dbe8d3] py-16 text-center">
        <p className="text-gray-500 mb-2"> 🐾 Customer Testimonials</p>
        <p className="text-4xl font-extrabold text-gray-800">
          What <span className="text-cyan-500">Our Clients</span> Say
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 w-[90%] mx-auto">
          {testimonials.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </div>
        
        <div className='mt-4'>
        <button className="mt-10 bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600">
          View More
        </button>
         </div>

      </div>

      {/* GALLERY */}
      <div className="bg-white py-16">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-green-500 mb-2"> 🐾 Our Post Gallery</p>
              <p className="text-4xl font-extrabold text-gray-800">
                <span className="text-cyan-500">Looking</span> and
                <br /> Smelling Great
              </p>
            </div>

            <p className="text-gray-600">
              Welcome to Our Post Gallery, where creativity meets inspiration.
              Explore a vibrant collection of artwork and stories.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                className="rounded-xl h-64 w-full object-cover"
              />
            ))}
          </div>

            {/* dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-6 h-1 bg-cyan-500 rounded"></div>
            <div className="w-2 h-1 bg-gray-300 rounded"></div>
            <div className="w-2 h-1 bg-gray-300 rounded"></div>
            <div className="w-2 h-1 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsGallery
