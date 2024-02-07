"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';


const Search = ({ placeholder = 'Search title...' }: { placeholder?: string }) => {

    const language = Cookies.get('selectedLanguage');

    const [query, setQuery] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let newUrl = '';

            if (query) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: query
                })
            } else {
                newUrl = removeKeysFromQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query']
                })
            }

            router.push(newUrl, { scroll: false });
        }, 300)

        return () => clearTimeout(delayDebounceFn);
    }, [query, searchParams, router])


    return (
        <div className='flex grow items-center'>
            <img src="/assets/icons/search.png" alt="search" className='w-7 h-7' />
            <input
                type="text" placeholder={language === "ka" ? 'მოძებნეთ პროდუქტი...' : 'Search is temporarily unavailable...'}
                onChange={(e) => setQuery(e.target.value)}
                className={`${language === "en" ? 'cursor-not-allowed' : ''} md:text-sm text-xs px-5 h-full border-0 focus:outline-none outline-none bg-grey-50 placeholder:text-grey-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none grow`}
                {...(language === "en" ? { disabled: true } : {})}
            />
        </div>
    )
}

export default Search