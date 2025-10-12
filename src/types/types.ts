
export type Product = {
id: string
title: string
slug: string
description: string
price: number
images: string[]
category: string
rating?: number
stock?: number
}


export type CartItem = {
product: Product
quantity: number
}