import React from 'react'

const Testimonial = ({img, name}) => {
  return (
      <div className="bg-white p-6 rounded-xl shadow-md relative">
      <p className="text-gray-600 text-sm leading-relaxed">
        “Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam.”
      </p>

      <div className="flex items-center gap-3 mt-4">
        <img
          src={img}
          className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400"
        />
        <div>
          <p className="font-semibold text-gray-800">{name}</p>
          <div className="text-yellow-400 text-sm">★★★★★</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
