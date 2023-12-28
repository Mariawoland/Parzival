import Collection from '@/components/shared/CollectionEn';
import MyCart from '@/components/shared/MyCart';
import React from 'react';
import { getAllProducts } from '@/lib/actions/productEn.actions';

export default async function ShopEn() {

    const products = await getAllProducts({
        query: '',
        category: '',
        page: 1,
        limit: 6
    });


    return (
        <div>
            <MyCart />
            <Collection
                data={products?.data}
                emptyTitle="No Products Found"
                emptyStateSubtext="Come back later"
                collectionType="All_Products"
                limit={3}
                page={1}
                totalPages={2}
            />
        </div>
    )
}