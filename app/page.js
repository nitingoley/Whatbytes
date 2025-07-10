import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Sidebar from '@/components/Sidebar';

// Dynamically import ProductGrid and disable SSR for it
const ProductGrid = dynamic(() => import('@/components/ProductGrid'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <main className="flex-1">
            <Suspense fallback={<div className="text-center py-12">Loading products...</div>}>
              <ProductGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
