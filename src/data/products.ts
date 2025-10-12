import type { Product } from '../types/types'
import { nanoid } from 'nanoid'
import myimg from "../assets/Hoodie1.jpg"
import shoesimg from "../assets/shoes1.jpg"
import googlesimg from "../assets/googles1.jpg"
import wmachine from "../assets/wmachine1.jpg"
import shirt  from "../assets/shirt1.jpg"
import medicine from "../assets/medicine1.jpg"
import laptop from "../assets/laptop1.webp"



export const PRODUCTS: Product[] = [
{
id: nanoid(),
title: 'Mens Hoodie',
slug: 'mens-hoodie',
description: 'Comfortable and stylish all-day hoodie with memory foam insole.',
price: 79.99,
images: [myimg],
category: 'apparel',
rating: 4.6,
stock: 24
},
{
id: nanoid(),
title: 'mens footwear',
slug: 'mens-footwear',
description: 'Cozy midweight shoes made from recycled fibers.',
price: 49.99,
images: [shoesimg],
category: 'footwear',
rating: 4.8,
stock: 40
},
{
id: nanoid(),
title: ' transparent googles',
slug: 'transparent-googles',
description: 'made of glass and protects from uv rays',
price: 24.12,
images: [googlesimg],
category: 'eyewear',
rating: 4.4,
stock: 12
},
{
id: nanoid(),
title: 'pain killer tablets',
slug: 'pain-killer-tablet',
description: 'verified and examined by nepal pharmacy council',
price: 12.99,
images: [medicine],
category: 'medicne',
rating: 4.4,
stock: 12
},
{
id: nanoid(),
title: ' laptop',
slug: 'my-laptop',
description: "genuine laptops from authentic stores",
price: 1299.0,
images: [laptop],
category: 'electronics',
rating: 4.4,
stock: 12
},
{
id: nanoid(),
title: ' washing machine',
slug: 'washing-machine',
description: 'made up of high quality material',
price: 885.99,
images: [wmachine],
category: 'electronics',
rating: 4.4,
stock: 32
},
{
id: nanoid(),
title: ' unisex shirt',
slug: 'unisex-shirt',
description: 'made up of high fabric cotton material',
price: 129.0,
images: [shirt],
category: 'apparerl',
rating: 4.4,
stock: 12
},
]