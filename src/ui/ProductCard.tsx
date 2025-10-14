import type { Product } from "../types/types";
import { useCartStore } from "../store/cart";
import toast, { Toaster } from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const add = useCartStore((s) => s.add); // ✅ correct function from store

  const handleAddToCart = () => {
    add({
      id: Number(product.id), // ensure id is number
      title: product.title,
      price: product.price,
      quantity: 1,
    });
    toast.success(`${product.title} added to cart!`); // ✅ toast notification
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
      <Toaster position="top-right" /> {/* toast container */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h3 className="text-lg font-semibold mt-3 text-gray-800 dark:text-gray-200">
        {product.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {product.description}
      </p>
      <p className="text-gray-900 dark:text-gray-100 font-bold mt-2">
        ${product.price}
      </p>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  );
};
