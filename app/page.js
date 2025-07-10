"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import products from "../data/product"

const Home = () => {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('search')?.toLowerCase();
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('price');

    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery)
      );
    }

    // Apply category filter
    if (categoryParam) {
      const categories = categoryParam.split(',');
      if (!categories.includes('All')) {
        result = result.filter(product =>
          categories.some(cat => product.category.toLowerCase() === cat.toLowerCase())
        );
      }
    }

    // Apply price filter
    if (priceParam) {
      const maxPrice = Number(priceParam);
      result = result.filter(product => product.price <= maxPrice);
    }

    setFilteredProducts(result);
  }, [searchParams]);

  return (
    <div className="min-h-screen">
     
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg mb-4">No products found</p>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;