import AddToCart from '@/components/shared/AddToCart';
import Collection from '@/components/shared/CollectionEn';
import { getProductById, getRelatedProductsByCategory } from '@/lib/actions/productEn.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image';

const ProductDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const product = await getProductById(id);

    const relatedProducts = await getRelatedProductsByCategory({
        categoryId: product.category._id,
        productId: product._id,
        page: searchParams.page as string,
    })

    return (
        <>
            <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
                    <Image
                        src={product.imageUrl}
                        alt="hero image"
                        width={1000}
                        height={1000}
                        className="h-full min-h-[300px] object-cover object-center"
                    />

                    <div className="flex w-full flex-col gap-8 p-5 md:p-10">
                        <div className="flex flex-col gap-6">
                            <h2 className='h2-bold'>{product.title}</h2>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="flex gap-3">
                                    <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                                        ${product.price}
                                    </p>
                                    <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                                        {product.category.name}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <AddToCart product={product} />

                        <div className="flex flex-col gap-5">
                            <div className='flex gap-2 md:gap-3'>
                                <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
                                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
                            <p className="p-medium-16 lg:p-regular-18">{product.description}</p>
                            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{product.url}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* productS with the same category */}
            <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <h2 className="h2-bold">Related products</h2>

                <Collection
                    data={relatedProducts?.data}
                    emptyTitle="No Events Found"
                    emptyStateSubtext="Come back later"
                    collectionType="All_Products"
                    limit={3}
                    page={searchParams.page as string}
                    totalPages={relatedProducts?.totalPages}
                />
            </section>
        </>
    )
}

export default ProductDetails