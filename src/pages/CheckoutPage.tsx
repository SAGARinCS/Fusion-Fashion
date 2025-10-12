import React, { useState } from 'react'
import {useCartStore} from '../store/cart'
import { useNavigate } from 'react-router-dom'


export default function CheckoutPage() {
const items = useCartStore(s => s.items)
const clear = useCartStore(s => s.clear)
const navigate = useNavigate()
const [loading, setLoading] = useState(false)


const total = items.reduce((s, it) => s + it.product.price * it.quantity, 0)


const submit = async (e: React.FormEvent) => {
e.preventDefault()
setLoading(true)
// mock delay
await new Promise(r => setTimeout(r, 1000))
clear()
setLoading(false)
navigate('/')
alert('Order placed (mock) — thanks!')
}


if (items.length === 0) return <div>Your cart is empty.</div>


return (
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<form onSubmit={submit} className="lg:col-span-2 card p-6 space-y-4">
<h2 className="text-xl font-bold">Checkout</h2>
<input required placeholder="Full name" className="w-full p-3 border rounded-md" />
<input required placeholder="Address" className="w-full p-3 border rounded-md" />
<input required placeholder="City" className="w-full p-3 border rounded-md" />
<div className="flex gap-3">
<input required placeholder="Postal code" className="w-1/2 p-3 border rounded-md" />
<input required placeholder="Country" className="w-1/2 p-3 border rounded-md" />
</div>
<div className="text-right">Total: <span className="font-bold">${total.toFixed(2)}</span></div>
<button type="submit" disabled={loading} className="px-5 py-3 bg-brand-500 text-white rounded-md">{loading ? 'Placing...' : 'Place order'}</button>
</form>


<aside className="card p-4">
<h3 className="font-semibold">Order summary</h3>
<div className="mt-4 space-y-2">
{items.map(it => (
<div key={it.product.id} className="flex justify-between">
<div>{it.product.title} x{it.quantity}</div>
<div>${(it.product.price * it.quantity).toFixed(2)}</div>
</div>
))}
</div>
</aside>
</div>
)
}