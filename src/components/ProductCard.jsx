import React, {useState} from 'react'


const ProductCard = ({product}) => {

 const [qty, setQty] = useState(1);

  return (
      <div className="bg-white rounded-2xl p-6 shadow-md w-full max-w-sm">
      {/* Image */}
      <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-42 object-cover"
        />
      </div>

      {/* Title & Price */}
      <div className="flex justify-between items-center mt-5">
        <h3 className="text-xl font-extrabold text-gray-800">
          {product.name}
        </h3>
        <span className="text-green-500 font-semibold">
          ${product.price.toFixed(2)}
        </span>
      </div>

      {/* Quantity + Cart */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-3 py-1 bg-gray-100"
          >
            -
          </button>
          <span className="px-4">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-1 bg-gray-100"
          >
            +
          </button>
        </div>

        <button className=" bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-md">
          🛒
        </button>
      </div>
    </div>
  );
}

export default ProductCard
