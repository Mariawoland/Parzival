import React from 'react';
import AddToCart from '@/components/shared/AddToCart';
import Collection from '@/components/shared/Collection';
import { getProductById, getRelatedProductsByCategory } from '@/lib/actions/product.actions'
import { SearchParamProps } from '@/types';
import { cookies } from 'next/headers';


const ProductDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const product = await getProductById(id);

    const relatedProducts = await getRelatedProductsByCategory({
        categoryId: product.category._id,
        productId: product._id,
        page: searchParams.page as string,
    })

    const selectedLanguage = cookies().get("selectedLanguage");
    let language = selectedLanguage?.value;

    return (
        <>
            <section className="p-[8%]">

                <div className="flex lg:flex-row flex-col border-t-2 border-one-6 lg:rounded-tr-2xl overflow-hidden">

                    <div className='lg:w-2/5 w-full'>
                        <img
                            src={product.imageUrl}
                            alt="poriduct image" className="w-full  aspect-square object-cover object-center"
                        />
                    </div>

                    <div className='lg:w-3/5 w-full h-full'>

                        <div className="flex justify-between">

                            <p className="font-base h-14 flex px-5 justify-center items-center  bg-one-6 rounded-br-2xl">
                                {product.category.name}
                            </p>

                            <div className='flex items-end justify-end gap-[4px] text-two-1 font-bold  font-base'>

                                <p className="h-14 flex px-4 justify-center items-center  bg-one-6 rounded-b-2xl">
                                    {language === "ka" ? product.sold : product.soldEn}
                                </p>
                                <div className='w-14 h-14 p-3 bg-one-6 rounded-b-2xl cursor-pointer'>
                                    <AddToCart product={product} />

                                </div>

                            </div>

                        </div>


                        <div className='text-two-2 pb-7'>

                            <h2 className='text-4xl px-6 pt-10 font-bold'>{language === "ka" ? product.title : product.titleEn}</h2>

                            <p className="text-4xl text-two-1 ps-7 pt-10 font-bold">
                                ₾ {product.price}
                            </p>

                            <p className="pt-10 px-7">{language === "ka" ? parseText(product.description) : parseText(product.descriptionEn)}</p>
                        </div>


                    </div>


                </div>

            </section>

            <section className="flex flex-col">

                <h1 className="px-[6%] text-two-1 font-bold text-2xl">{language === "ka" ? "მსგავსი პროდუქტები" : "Related Products"} {product.category.name}</h1>
                <Collection
                    data={relatedProducts?.data}
                    limit={4}
                    page={1}
                    totalPages={1}
                />
            </section>
        </>
    )

    function parseText(text: string) {
        const lines = text.split('axaliXazi');
        return lines.map((line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
            <React.Fragment key={index}>
                {line}
                {index !== lines.length - 1 && <br />}
            </React.Fragment>
        ));
    }
}

export default ProductDetails