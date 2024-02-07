'use client';
import React, { useEffect, useState } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Cookies from 'js-cookie';
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';
import Link from 'next/link';

interface YourDataType {
    id: number;
    title: string;
    titleEn: string;
    image: string,
    price: string
}

const MyCart: React.FC = () => {
    const [storedData, setStoredData] = useState<YourDataType[]>([]);

    const selectedLanguage = Cookies.get("selectedLanguage");
    const language = selectedLanguage;

    useEffect(() => {

        const localStorageData = localStorage.getItem('cartProducts');
        if (localStorageData) {
            const parsedData = JSON.parse(localStorageData) as YourDataType[];

            const uniqueData = Array.from(new Set(parsedData.map(item => item.id)))
                .map(id => parsedData.find(item => item.id === id) as YourDataType);

            setStoredData(uniqueData);
        }
    }, []);

    const handleDeleteProduct = (id: number) => {
        const updatedData = storedData.filter(item => item.id !== id);
        localStorage.setItem('cartProducts', JSON.stringify(updatedData));
        setStoredData(updatedData);
    };

    const mappedObjects = storedData.map((obj) => (

        <li key={obj.id} className='flex gap-4'>

            <img src={obj.image} className='w-4/12 rounded-s-lg' />

            <div className='w-8/12 flex flex-col justify-between py-1'>

                <Link className='font-black sm:text-base text-xs text-two-1 leading-relaxed text-start' href={`/public/${obj.id}`}>{language === "ka" ? obj.title : obj.titleEn}</Link>

                <div className='flex justify-between'>

                    <p className='font-bold sm:text-base text-xs text-two-1'>{language === "ka" ? kaText.cart[1] : enText.cart[1]} ₾ {obj.price}</p>

                    <img onClick={() => handleDeleteProduct(obj.id)} src='/assets/icons/delete.png' className='w-5' />

                </div>

            </div>


        </li>
    ));

    return (
        <Sheet>
            <SheetTrigger className="m-0 p-0 w-8 max-w-8 min-w-8 max-h-8 min-h-8 h-8">
                <img src='/assets/icons/cart.png' className='w-full h-full' />
            </SheetTrigger>
            <SheetContent className="bg-one-7 border-0" style={{ zIndex: '5000' }}>
                <SheetHeader>
                    <SheetTitle>{language === "ka" ? kaText.cart[0] : enText.cart[0]}</SheetTitle>
                    <SheetDescription>
                        <ul className='flex flex-col gap-5'>{mappedObjects}</ul>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default MyCart;
