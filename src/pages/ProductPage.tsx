
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { useCartStore } from "../store/cart";

export default function ProductPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const add = useCartStore((s) => s.add);

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    add({
      id: Number(product.id), // ensure it's a number
      title: product.title,
      price: product.price,
      quantity: 1,
    });
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Product Images */}
      <div>
        <div className="h-96 bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="object-cover max-h-full"
          />
        </div>
        <div className="mt-3 flex gap-2">
          {product.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${product.title} ${i}`}
              className="h-20 w-20 object-cover rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 mt-2">{product.description}</p>
        <div className="mt-4 text-3xl font-bold">
          ${product.price.toFixed(2)}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={handleAddToCart}
            className="px-5 py-3 rounded-md bg-brand-500 text-white"
          >
            Add to cart
          </button>
          <button className="px-5 py-3 rounded-md border">Buy now</button>
        </div>
      </div>
    </div>
  );
}
