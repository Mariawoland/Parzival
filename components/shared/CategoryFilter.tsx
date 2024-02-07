"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import '@/styles.css';

const CategoryFilter = () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories();

            categoryList && setCategories(categoryList as ICategory[])
        }

        getCategories();
    }, [])

    const onSelectCategory = (category: string) => {
        let newUrl = '';

        if (category && category !== 'All') {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: category
            })
        } else {
            newUrl = removeKeysFromQuery({
                params: searchParams.toString(),
                keysToRemove: ['category']
            })
        }

        router.push(newUrl, { scroll: false });

    }

    return (
        <Select onValueChange={(value: string) => onSelectCategory(value)}>
            <SelectTrigger className="w-[60px] h-[50px] border-0 shadow-none focus-visible:border-0 focus:outline-none focus-within:border-0 focus:border-0 focus:ring-0">
                <img src="/assets/icons/filter.png" className="w-full h-full" />
            </SelectTrigger>
            <SelectContent className=" min-w-[59px] max-w-[61px] w-[60px] p-0 m-0">
                <SelectItem value="All" className="hidden"></SelectItem>
                {categories.map((category) => {

                    return (
                        <SelectItem
                            value={category.name}
                            key={category._id}
                            className="w-[60px] text-2xl"
                        >
                            {category.name}
                        </SelectItem>
                    );

                })}
            </SelectContent>
        </Select>
    );
}


export default CategoryFilter