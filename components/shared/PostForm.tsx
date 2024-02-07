"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import { useUploadThing } from '@/lib/uploadthing';
import { useRouter } from "next/navigation";
import { IPost } from "@/lib/database/models/post.model";
import { createPost } from "@/lib/actions/post.actions"


type PostFormProps = {
    post?: IPost,
    postId?: string
}


const PostForm = ({ post, postId }: PostFormProps) => {

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
            const uploadedImages = await startUpload(files);

            if (!uploadedImages) {
                return;
            }

            uploadedImageUrl = uploadedImages[0].url;
        }

        try {
            const newPost = await createPost({
                post: {
                    ...values,
                    imageUrl: uploadedImageUrl
                },
                path: '/',
            });

            if (newPost) {
                form.reset();
                router.push(`/posts/${newPost._id}`);
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

                        <h1 className="text-xl py-1 font-black text-gray-500">პოსტის დამატება</h1>

                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="date" className="text-gray-500" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="text" placeholder="სათაური" {...field} />
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
                                        <Input type="text" placeholder="სათაური ინგლისურად" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description1"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input type="text" placeholder="აღწერა" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description1En"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input type="text" placeholder="აღწერა ინგლისურად" {...field} />
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

export default PostForm;