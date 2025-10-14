import Hoodie from "../assets/Hoodie2.jpg"
import Denim from "../assets/Denim1.jpg"
import Leather from "../assets/Leather1.jpg"
import Summer from "../assets/Summer1.jpg"
export default function Products() {
  const products = [
    { name: "Classic Hoodie", price: "$49", image: Hoodie },
    { name: "Denim Jacket", price: "$79", image: Denim },
    { name: "Leather Boots", price: "$99", image: Leather },
    { name: "Summer Dress", price: "$59", image: Summer },
  ];

  return (
    <div className="container mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Latest Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.name}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-blue-500 font-bold mt-1">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
