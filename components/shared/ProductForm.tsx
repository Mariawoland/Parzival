"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ProductFormSchema } from "@/lib/validator";
import { productDefaultValues } from "@/constants";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Dropdown from "./Dropdown";
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import Image from "next/image";
import { useUploadThing } from '@/lib/uploadthing';
import { useRouter } from "next/navigation";
import { IProduct } from "@/lib/database/models/product.model";
import { createProduct } from "@/lib/actions/product.actions"


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
                product: { ...values, imageUrl: uploadedImageUrl },
                userId,
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
            <div className="lg:w-1/2 w-full px-5 m-auto mt-10">
                <h1 className="text-lg font-black text-two-1 pb-5 ps-1">პროდუქტის დამატება</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">

                        <div className="flex flex-col gap-5">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="პროდუქტის სახელი" {...field} className="input-field" />
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
                        </div>

                        <div className="flex flex-col gap-5 md:flex-row w-full">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Textarea placeholder="პროდუქტის აღწერა" {...field} className="textarea rounded-2xl h-72" />
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
                        </div>

                        <div className="flex flex-col gap-5 md:flex-row">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                                                <Input type="number" placeholder="Price" {...field} className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />

                                            </div>

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="url"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">

                                                <Input placeholder="URL" {...field} className="input-field" />
                                            </div>

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={form.formState.isSubmitting}
                            className="button col-span-2 w-full"
                        >
                            {form.formState.isSubmitting ? (
                                'დაელოდეთ...'
                            ) : `დამატება`}</Button>
                    </form>
                </Form>
            </div>

        </>
    )
}

export default ProductForm;