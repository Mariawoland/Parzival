import Collection from '@/components/shared/Collection';
import MyCart from '@/components/shared/MyCart';
import React from 'react';
import { getAllProducts } from '@/lib/actions/product.actions';
import { SearchParamProps } from '@/types';
import Search from '@/components/shared/Search';
import CategoryFilter from '@/components/shared/CategoryFilter';
import { Footer } from '@/components/shared/Footer';
import Image from "next/image";

export default async function Shop({ searchParams }: SearchParamProps) {

    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const products = await getAllProducts({
        query: searchText,
        category,
        page,
        limit: 12
    });


    return (
        <div>
            <div className="flex items-center justify-center relative h-[88vh] md:flex-row w-full flex-col gap-5">
                <Image width={1000} height={600} alt='photo' src='/assets/shop/img1.jpeg' className='w-full h-full -z-50 absolute inset-0 object-cover' />
                <div className="flex justify-center items-center h-[50px] w-10/12 overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Search />
                    <CategoryFilter />
                </div>

            </div>
            <Collection
                data={products?.data}
                limit={12}
                page={page}
                totalPages={products?.totalPages}
            />

            <Footer />
        </div>
    )
}