import Collection from '@/components/shared/Collection';
import MyCart from '@/components/shared/MyCart';
import React from 'react';
import { getAllProducts } from '@/lib/actions/product.actions';

export default async function Shop() {

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