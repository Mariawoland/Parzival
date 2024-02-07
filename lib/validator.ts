import * as z from "zod";

export const ProductFormSchema = z.object({
    title: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    titleEn: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    description: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    descriptionEn: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    imageUrl: z.string(),
    categoryId: z.string(),
    price: z.string(),
    sold: z.string(),
    soldEn: z.string()
})

export const PostFormSchema = z.object({
    title: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    titleEn: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    description1: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    description1En: z.string().min(3, {
        message: "Title must be at least 3 characters.",
    }),
    imageUrl: z.string(),
    date: z.string()
})