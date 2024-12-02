
// "use client";
// import React from "react";
// import { Button } from "@/components/ui/button"; 

// function Home() {
//   return ( <div className="px-4"> 
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
//       <a href="#" className="block">
//         {/* Product Image */}
//         <img
//           alt="Product"
//           src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//           className="h-56 w-full object-cover rounded-lg p-4"
//         />

//         <div className="p-4">
//           {/* Product Title */}
//           <h3 className="text-lg font-semibold text-gray-900">Living Room Sofa</h3>

//           {/* Product Price */}
//           <p className="text-xl font-bold text-gray-800 mt-2">$240,000</p>

//           {/* Action Buttons */}
//           <div className="mt-4 flex gap-4">
//             <Button className="w-full bg-indigo-600 text-white rounded-md py-2">Buy Now</Button>
//             <Button className="w-full bg-gray-200 text-gray-800 rounded-md py-2">Add to Cart</Button>
//           </div>
//         </div>
//       </a>
//     </div>
//     </div>
//   );
// }

// export default Home;

"use client";
import React from "react";
import { Button } from "@/components/ui/button";

function Home() {
  const products = [
    {
      id: 1,
      title: "Anti Bacterial Dishwashing Liquid",
      image:
        "/products/ANTI-Bacterial Dish Washing Liquid.jpg",
      price: 2400,
      currency: "Ksh",
    },
    {
      id: 2,
      title: "Bleach",
      image:
        "/products/Bleach.jpg",
      price: 1200,
      currency: "Ksh",
    },
    {
      id: 3,
      title: "Dashy Brite",
      image:
        "/products/Dashy Brite.jpg",
      price: 750,
      currency: "Ksh",
    },
    {
      id: 4,
      title: "Dish washing Liquid",
      image:
        "/products/Dishwashing Liquid.jpg",
      price: 7500,
      currency: "Ksh",
    },
    {
      id: 5,
      title: "Lavender",
      image:
        "/products/Lavender.jpg",
      price: 750,
      currency: "Ksh",
    },
    {
      id: 6,
      title: "Anti Bacterial Dishwashing Liquid",
      image:
        "/products/ANTI-Bacterial Dish Washing Liquid.jpg",
      price: 2400,
      currency: "Ksh",
    },
    {
      id: 7,
      title: "Bleach",
      image:
        "/products/Bleach.jpg",
      price: 1200,
      currency: "Ksh",
    },
    {
      id: 8,
      title: "Dashy Brite",
      image:
        "/products/Dashy Brite.jpg",
      price: 750,
      currency: "Ksh",
    },
    {
      id: 9,
      title: "Dish washing Liquid",
      image:
        "/products/Dishwashing Liquid.jpg",
      price: 750,
      currency: "Ksh",
    },
    {
      id: 10,
      title: "Lavender",
      image:
        "/products/Lavender.jpg",
      price: 750,
      currency: "Ksh",
    },
  ];

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded-lg overflow-hidden shadow-lg">
            <a href="#" className="block">
              {/* Product Image */}
              <img
                alt={product.title}
                src={product.image}
                className="h-56 w-full object-cover rounded-lg p-4"
              />
              <div className="p-4">
                {/* Product Title */}
                <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>

                {/* Product Price */}
                <p className="text-xl font-bold text-gray-800 mt-2">
                  {product.currency}
                  {product.price.toLocaleString()}
                </p>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-4">
                  <Button className="w-full bg-indigo-600 text-white rounded-md py-2">
                    Buy Now
                  </Button>
                  <Button className="w-full bg-gray-200 text-gray-800 rounded-md py-2">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
