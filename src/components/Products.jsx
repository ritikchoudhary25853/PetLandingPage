import React from 'react'
import ProductCard from './ProductCard'
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

const Products = () => {  
    
    const productsData = [
  {
    id: 1,
    name: "Milk Bones",
    price: 236,
    image:
     p1,
  },
  {
    id: 2,
    name: "Cat Cereal Food",
    price: 236,
    image:
      p2,
  },
  {
    id: 3,
    name: "Calcium Bones",
    price: 300,
    image:
      p3,
  },
];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-[#e2f9c8] to-[#b1d7e6] flex justify-center">
      <div className="w-[95%] max-w-7xl text-center">
        {/* Heading */}
        <p className="text-gray-600 mb-2">Our Products</p>
        <p className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Explore Our <span className="text-cyan-500">Natural</span> Offerings
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Button */}
        <div className='mt-4'>
        <button className="px-6 py-3 border-2 rounded border-green-400 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
          View Product Page
        </button>
        </div>

      </div>
    </div>
  )
}

export default Products
