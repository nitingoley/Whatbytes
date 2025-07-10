"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);

  const categories = ["All", "fashion", "electronics", "accessories"];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('price');

    if (categoryParam) {
      setSelectedCategories(categoryParam.split(','));
    }
    if (priceParam) {
      setPriceRange(Number(priceParam));
    }
  }, [searchParams]);

  const toggleCategory = (category) => {
    let newCategories;
    if (category === 'All') {
      newCategories = ['All'];
    } else {
      newCategories = selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category && c !== 'All')
        : [...selectedCategories.filter(c => c !== 'All'), category];
    }

    setSelectedCategories(newCategories);
    updateUrlFilters(newCategories, priceRange);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
    updateUrlFilters(selectedCategories, value);
  };

  const updateUrlFilters = (categories, price) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (categories.length > 0) {
      params.set('category', categories.join(','));
    } else {
      params.delete('category');
    }

    if (price && price < 1000) {
      params.set('price', price.toString());
    } else {
      params.delete('price');
    }

    router.push(`/?${params.toString()}`);
  };

  return (
    <aside className="w-full lg:w-1/4 p-4 rounded-lg h-fit space-y-6">
      <div className="bg-[#022b63] text-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2 capitalize">
                <input
                  type="checkbox"
                  className={`w-5 h-5 rounded-full border-2 border-blue-600 appearance-none cursor-pointer
                    checked:bg-blue-600 checked:border-blue-600 checked:ring-2 checked:ring-offset-1 checked:ring-blue-400
                    checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:mx-auto 
                    checked:before:my-auto checked:before:rounded-full checked:before:bg-white`}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Price</h3>
          <input
            type="range"
            min={0}
            max={1000}
            step={50}
            value={priceRange}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-sm text-gray-200 mt-1">Up to ${priceRange}</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;