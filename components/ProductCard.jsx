"use client";
import useCartStore from "@/store/useCartStore";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain rounded"
        />
      </Link>
      <div className="mt-3">
        <Link href={`/product/${product.id}`} className="text-base text-black font-semibold hover:text-blue-600">
          {product.title}
        </Link>
        <p className="text-gray-500 text-sm">{product.brand}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div>
            <p className="text-gray-900 font-semibold">${product.price}</p>
            <div className="text-yellow-500 text-xs">
              {"★".repeat(Math.round(product.rating))}
              <span className="text-gray-500 ml-1">({product.rating})</span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="bg-[#022b63] text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;