import { IProduct } from '@/lib/database/models/product.model'
import React from 'react'
import GardenCard from './GardenCard'
import Pagination from './Pagination'

type GardenCollectionProps = {
    data: IProduct[],
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string
}

const GardenCollection = ({
    data,
    page,
    totalPages = 0,
    urlParamName,
}: GardenCollectionProps) => {
    return (
        <>
            <div className="flex flex-col items-center gap-10 px-[6%] py-[4%]">

                <ul className="xl:w-[1127px] lg:w-[840px] sm:w-[550px] w-[265px]  flex items-center flex-wrap gap-6">
                    {data.map((product) => {

                        return (
                            <li key={product._id} className="w-[255px] grow-0 shrink-0">
                                <GardenCard product={product} />
                            </li>
                        )
                    })}
                </ul>


                {totalPages > 1 && (
                    <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
                )}
            </div>

        </>
    )
}

export default GardenCollection