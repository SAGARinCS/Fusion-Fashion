import type { Product } from "../types/types";
import { useCartStore } from "../store/cart";


interface ProductCardProps {
product: Product;
}


export const ProductCard = ({ product }: ProductCardProps) => {
const addToCart = useCartStore((s) => s.addToCart);


return (
<div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
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
onClick={() => addToCart(product)}
className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
>
Add to Cart
</button>
</div>
);
};