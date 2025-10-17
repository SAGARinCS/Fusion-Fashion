import  { useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import {ProductCard} from '../ui/ProductCard'

//this is home section
export default function Home() {
const [query] = useState('')
const [category, setCategory] = useState<string | null>(null)
const [sort, setSort] = useState<'popular' | 'price-asc' | 'price-desc' | 'newest'>('popular')


const categories = useMemo(() => Array.from(new Set(PRODUCTS.map(p => p.category))), [])


const filtered = useMemo(() => {
let res = PRODUCTS.slice()
if (query) res = res.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
if (category) res = res.filter(p => p.category === category)
if (sort === 'price-asc') res.sort((a, b) => a.price - b.price)
if (sort === 'price-desc') res.sort((a, b) => b.price - a.price)
return res
}, [query, category, sort])


return (
<div>
<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl font-bold text-blue-100">Featured products</h1>
<p className="text-blue-100">Handpicked items you’ll love</p>
</div>
<div className=" font-bold text-blue-100">
<select value={sort} onChange={e => setSort(e.target.value as any)} className="px-3 py-2 border rounded-md">
<option value="popular">Popular</option>
<option value="price-asc">Price: Low to High</option>
<option value="price-desc">Price: High to Low</option>
<option value="newest">Newest</option>
</select>


<select value={category ?? ''} onChange={e => setCategory(e.target.value || null)} className="px-3 py-2 border rounded-md">
<option value="">All categories</option>
{categories.map(c => (
<option key={c} value={c}>{c}</option>
))}
</select>
</div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
{filtered.map(p => (
<ProductCard key={p.id} product={p} />
))}
</div>
</div>
)
}