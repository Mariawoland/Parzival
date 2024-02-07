"use client"

import { IProduct } from '@/lib/database/models/product.model'
import React from 'react'

const AddToCart = ({ product }: { product: IProduct }) => {
    const updateCart = () => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
        cartProducts.push({ id: product._id, title: product.title, titleEn: product.titleEn, image: product.imageUrl, price: product.price });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        window.location.reload();
    }


    return (
        <img src="/assets/icons/cart.png" onClick={updateCart} className="w-full h-full" />
    )
}

export default AddToCart