"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {useCartStore} from "@/store/useCartStore";
import Header from "@/components/Header";
import products from "../../../data/product";



// products
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto py-8 text-center">Product not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto max-h-96 object-contain rounded"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
            <p className="text-gray-600 mb-2">{product.brand}</p>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">
                {"★".repeat(Math.round(product.rating))}
              </div>
              <span className="text-gray-500 ml-1">({product.rating})</span>
            </div>
            <p className="text-2xl font-semibold text-gray-900 mb-4">${product.price}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="w-full bg-[#022b63] text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;