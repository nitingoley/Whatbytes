'use client';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import products from '../data/product';

const ProductGrid = () => {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get("search")?.toLowerCase();
    const categoryParam = searchParams.get("category");
    const priceParam = searchParams.get("price");

    let result = [...products];

    if (searchQuery) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery)
      );
    }

    if (categoryParam) {
      const categories = categoryParam.split(",");
      if (!categories.includes("All")) {
        result = result.filter(product =>
          categories.some(cat => product.category.toLowerCase() === cat.toLowerCase())
        );
      }
    }

    if (priceParam) {
      const maxPrice = Number(priceParam);
      result = result.filter(product => product.price <= maxPrice);
    }

    setFilteredProducts(result);
  }, [searchParams]);

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg mb-4">No products found</p>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
