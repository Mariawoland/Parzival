"use server";

import {
    CreateProductParams,
    DeleteProductParams,
    GetAllProductsParams,
    GetRelatedProductsByCategoryParams,
} from '@/types'

import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Product from "../database/models/product.model";
import Category from '../database/models/category.model';
import { revalidatePath } from 'next/cache';

const populateProduct = (query: any) => {
    return query
        .populate({ path: 'category', model: Category, select: '_id name' })
}

const getCategoryByName = async (name: string) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

export async function createProduct({ product, path }: CreateProductParams) {
    try {
        await connectToDatabase();
        const newProduct = await Product.create({ ...product, category: product.categoryId })
        return JSON.parse(JSON.stringify(newProduct))

    } catch (error) {
        handleError(error);
    }
}

export async function getProductById(productId: string) {
    try {
        await connectToDatabase()

        const product = await populateProduct(Product.findById(productId))

        if (!product) throw new Error('Product not found')

        return JSON.parse(JSON.stringify(product))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllProducts({ query, limit = 6, page, category }: GetAllProductsParams) {
    try {
        await connectToDatabase()

        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}

        const categoryCondition = category ? await getCategoryByName(category) : null

        const conditions = {
            $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
        }

        const skipAmount = (Number(page) - 1) * limit
        const productsQuery = Product.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const products = await populateProduct(productsQuery)
        const productsCount = await Product.countDocuments(conditions)

        return {
            data: JSON.parse(JSON.stringify(products)),
            totalPages: Math.ceil(productsCount / limit),
        }


    } catch (error) {
        handleError(error);
    }
}

export async function deleteProduct({ productId, path }: DeleteProductParams) {
    try {
        await connectToDatabase()

        const deletedProduct = await populateProduct(Product.findByIdAndDelete(productId))

        if (deletedProduct) revalidatePath(path);

        return JSON.parse(JSON.stringify(deletedProduct))
    } catch (error) {
        handleError(error)
    }
}


export async function getRelatedProductsByCategory({
    categoryId,
    productId,
    limit = 3,
    page = 1,
}: GetRelatedProductsByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { $and: [{ category: categoryId }, { _id: { $ne: productId } }] }

        const productsQuery = Product.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const products = await populateProduct(productsQuery)
        const productsCount = await Product.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(products)), totalPages: Math.ceil(productsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}