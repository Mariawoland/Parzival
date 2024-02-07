"use client"

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { formUrlQuery } from '@/lib/utils'

type PaginationProps = {
    page: number | string,
    totalPages: number,
    urlParamName?: string
}

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const onClick = (btnType: string) => {
        const pageValue = btnType === 'next'
            ? Number(page) + 1
            : Number(page) - 1

        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: urlParamName || 'page',
            value: pageValue.toString(),
        })

        router.push(newUrl, { scroll: false })
    }

    return (
        <div className="flex gap-2">
            <button
                className="border-2 border-two-1 bg-four-4 rounded-xl p-2 opacity-50 hover:opacity-70 transition-all duration-300"
                onClick={() => onClick('prev')}
                disabled={Number(page) <= 1}
            >
                <img src="assets/icons/next.png" className='-rotate-180 w-7' />

            </button>
            <button
                className="border-2 border-two-1 bg-four-4 rounded-xl p-2 opacity-50 hover:opacity-70 transition-all duration-300"
                onClick={() => onClick('next')}
                disabled={Number(page) >= totalPages}
            >
                <img src="assets/icons/next.png" className='w-7' />
            </button>
        </div>
    )
}

export default Pagination