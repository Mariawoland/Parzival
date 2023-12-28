"use client";
import { IProductEn } from '@/lib/database/models/productEn.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { DeleteConfirmation } from './DeleteConfirmation';
import AddToCart from './AddToCart';

type CardProps = {
    product: IProductEn,
}

const Card = ({ product }: CardProps) => {
    return (
        <>
            <div className='flex flex-col'>
                <Image src={product.imageUrl} width={200} height={200} alt='card image' />
                <Link href={`/productsEn/${product._id}`}>{product.title}</Link>
                <p>{product.category.name}</p>
                <AddToCart product={product} />
                <SignedIn>
                    <DeleteConfirmation productId={product._id} />
                </SignedIn>
            </div>

        </>
    )
}

export default Card;