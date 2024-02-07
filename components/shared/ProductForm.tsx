"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductFormSchema } from "@/lib/validator";
import { productDefaultValues } from "@/constants";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Dropdown from "./Dropdown";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import { useUploadThing } from '@/lib/uploadthing';
import { useRouter } from "next/navigation";
import { IProduct } from "@/lib/database/models/product.model";
import { createProduct } from "@/lib/actions/product.actions";
import { Textarea } from "../ui/textarea";
import '@/styles.css';


type ProductFormProps = {
    userId: string,
    product?: IProduct,
    productId?: string
}


const ProductForm = ({ userId, product, productId }: ProductFormProps) => {

    const [files, setFiles] = useState<File[]>([]);

    const initialValues = productDefaultValues;

    const router = useRouter();

    const { startUpload } = useUploadThing('imageUploader');

    const form = useForm<z.infer<typeof ProductFormSchema>>({
        resolver: zodResolver(ProductFormSchema),
        defaultValues: initialValues
    })

    async function onSubmit(values: z.infer<typeof ProductFormSchema>) {

        const productData = values;

        let uploadedImageUrl = values.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files)

            if (!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }

        try {
            const newProduct = await createProduct({
                product: {
                    ...values, imageUrl: uploadedImageUrl
                },
                path: '/'
            })

            if (newProduct) {
                form.reset();
                router.push(`/products/${newProduct._id}`)
            }
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <>
            <div className="lg:w-1/2 w-full p-[5%]">

                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-[5%] bg-four-1 rounded-3xl">

                        <h1 className="text-xl py-1 font-black text-gray-500">პროდუქტის დამატება</h1>

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder="პროდუქტის დასახელება" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="titleEn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder="პროდუქტის დასახელება ინგლისურად" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Textarea placeholder="პროდუქტის აღწერა" {...field} ></Textarea>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="descriptionEn"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Textarea placeholder="პროდუქტის აღწერა ინგლისურად" {...field}></Textarea>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder='ფასი'  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="sold"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder='ჩაწერე გაყიდულია ან მარაგშია'  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="soldEn"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder='ჩაწერე In stock ან Sold out'  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="border border-gray-200 shadow-md rounded-full py-3 text-gray-500 font-black col-span-2 w-full"
                        >
                            {form.formState.isSubmitting ? (
                                'დაელოდეთ...'
                            ) : `დამატება`}</button>
                    </form>
                </Form>
            </div >

        </>
    )
}

export default ProductForm;