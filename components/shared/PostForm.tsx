"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PostFormSchema } from "@/lib/validator";
import { postDefaultValues } from "@/constants";
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
import { Textarea } from "@/components/ui/textarea"
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import Image from "next/image";
import { useUploadThing } from '@/lib/uploadthing';
import { useRouter } from "next/navigation";
import { IPost } from "@/lib/database/models/post.model";
import { createPost } from "@/lib/actions/post.actions"


type PostFormProps = {
    userId: string,
    post?: IPost,
    postId?: string
}


const PostForm = ({ userId, post, postId }: PostFormProps) => {

    const [files, setFiles] = useState<File[]>([]);

    const initialValues = postDefaultValues;

    const router = useRouter();

    const { startUpload } = useUploadThing('imageUploader');

    const form = useForm<z.infer<typeof PostFormSchema>>({
        resolver: zodResolver(PostFormSchema),
        defaultValues: initialValues
    })

    async function onSubmit(values: z.infer<typeof PostFormSchema>) {

        const postData = values;

        let uploadedImageUrl = values.imageUrl;

        if (files.length > 0) {
            const uploadedImages = await startUpload(files)

            if (!uploadedImages) {
                return
            }

            uploadedImageUrl = uploadedImages[0].url
        }

        try {
            const newPost = await createPost({
                post: { ...values, imageUrl: uploadedImageUrl },
                userId,
                path: '/'
            })

            if (newPost) {
                form.reset();
                router.push(`/posts/${newPost._id}`)
            }
        } catch (error) {
            console.log(error);
        }


    }


    return (
        <>
            <div className="lg:w-1/2 w-full px-5 m-auto mt-10">
                <h1 className="text-lg font-black text-two-1 pb-5 ps-1">პოსტის დამატება</h1>
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

                        <div className="hidden">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-white px-4 py-2">
                                                <Input type="number" placeholder="Price" {...field} className="p-regular-16 bg-white text-white border-0 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" value={0} />

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
                                            <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-white after:px-4 py-2">

                                                <Input placeholder="URL" {...field} className="input-field bg-white text-white" value={'https://parzival-anto.vercel.app/'} />
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

export default PostForm;