import { IProduct } from '@/lib/database/models/product.model';
import { SignedIn, auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { DeleteConfirmation } from './DeleteConfirmation';
import AddToCart from './AddToCart';
import { cookies } from "next/headers";

type GardenCardProps = {
    product: IProduct,
}

const GardenCard = ({ product }: GardenCardProps) => {

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;


    return (
        <>
            <div className="relative w-full flex flex-col overflow-hidden border-2 bg-four-4 border-garden-1 rounded-2xl h-full">

                <img src={product.imageUrl} className='border-b border-garden-1 w-full aspect-square object-cover' alt='productCard image' />
                <div className='flex flex-col w-full h-full justify-between'>

                    <div className='flex gap-[4px] justify-between w-full'>
                        <p className='flex grow justify-center items-center font-black bg-garden-1 text-two-1 py-1 rounded-br-lg text-sm'>{language === "ka" ? product.sold : product.soldEn}</p>

                        <p className='flex grow justify-center items-center bg-garden-1 text-two-1  py-1 rounded-b-lg text-sm font-bold'>₾ {product.price}</p>

                        <p className='flex bg-garden-1 grow justify-center text-two-1  py-1 rounded-bl-lg text-base'>{product.category.name}</p>
                    </div>


                    <Link href={`/products/${product._id}`} className='text-lg font-semibold text-two-1 hover:text-two-2 p-3 transition-all duration-300 text-center'>
                        {language === "ka" ? product.title : product.titleEn}
                    </Link>


                    <div className='w-full flex items-center justify-center bg-garden-1 text-four-1 text-sm font-semibold tracking-wide cursor-pointer'>
                        <div className='w-full py-3 h-full opacity-70 hover:opacity-100 transition-all duration-300'>
                            <div className='w-7 h-full mx-auto'>
                                <AddToCart product={product} />
                            </div>
                        </div>
                    </div>




                </div>

                <SignedIn>
                    <div className='absolute right-5 top-5'>
                        <DeleteConfirmation productId={product._id} />
                    </div>
                </SignedIn>
            </div >

        </>
    )
}

export default GardenCard;