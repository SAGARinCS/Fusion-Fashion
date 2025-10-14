// import { useCartStore } from "../store/cart";


// export const CartPage = () => {
// const { cart, removeFromCart, clearCart } = useCartStore();

// const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


// return (
// <div className="p-6 text-gray-900 dark:text-gray-100">
// <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
// {cart.length === 0 ? (
// <p>No items in cart.</p>
// ) : (
// <>
// <ul className="space-y-3">
// {cart.map((item) => (
// <li
// key={item.id}
// className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow"
// >
// <div>
// <h2 className="font-semibold">{item.title}</h2>
// <p className="text-sm">Qty: {item.quantity}</p>
// <p className="text-sm text-gray-600 dark:text-gray-400">
// ${item.price * item.quantity}
// </p>
// </div>
// <button
// onClick={() => removeFromCart(item.id)}
// className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
// >
// Remove
// </button>
// </li>
// ))}
// </ul>
// <div className="mt-6 flex justify-between items-center">
// <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
// <div className="flex gap-3">
// <button
// onClick={clearCart}
// className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
// >
// Clear Cart
// </button>
// <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
// Checkout
// </button>
// </div>
// </div>
// </>
// )}
// </div>
// );
// };
import { useCartStore } from "../store/cart";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
  const navigate = useNavigate();
  
  // ✅ Correct function and state names
  const items = useCartStore((state) => state.items);
  const { remove, clear } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="p-6 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ${item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => remove(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <div className="flex gap-3">
              <button
                onClick={clear}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
