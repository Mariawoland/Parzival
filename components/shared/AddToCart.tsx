"use client"

import { IProduct } from '@/lib/database/models/product.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const AddToCart = ({ product }: { product: IProduct }) => {
    const updateCart = () => {
        const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
        cartProducts.push({ id: product._id, title: product.title });
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        window.location.reload();
    }


    return (
        <div className="flex items-center gap-3">

            <>
                <Button onClick={updateCart} className="button rounded-full" size="lg">Get Tickets</Button>

            </>
        </div>
    )
}

export default AddToCart