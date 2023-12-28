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

interface YourDataType {
    id: number;
    title: string;
}

const MyCart: React.FC = () => {
    const [storedData, setStoredData] = useState<YourDataType[]>([]);

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
        <li key={obj.id}>
            <p>{obj.title}</p>
            <button onClick={() => handleDeleteProduct(obj.id)}>
                <img src='/assets/icons/delete.png' />
            </button>
        </li>
    ));

    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <img src='/assets/icons/cart.png' />
                </SheetTrigger>
                <SheetContent style={{ zIndex: '5000' }}>
                    <SheetHeader>
                        <SheetDescription>
                            <ul>{mappedObjects}</ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MyCart;
