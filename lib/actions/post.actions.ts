"use server";

import {
    CreatePostParams,
    DeletePostParams,
    GetAllPostsParams,
    GetRelatedPostsByCategoryParams,
} from '@/types'

import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Post from "../database/models/post.model";
import Category from '../database/models/category.model';
import { revalidatePath } from 'next/cache';

const populatePost = (query: any) => {
    return query
        .populate({ path: 'category', model: Category, select: '_id name' })
}

const getCategoryByName = async (name: string) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

export async function createPost({ post, path }: CreatePostParams) {
    try {
        await connectToDatabase();
        const newPost = await Post.create({ ...post, category: post.categoryId })
        return JSON.parse(JSON.stringify(newPost))

    } catch (error) {
        handleError(error);
    }
}

export async function getPostById(postId: string) {
    try {
        await connectToDatabase()

        const post = await populatePost(Post.findById(postId))

        if (!post) throw new Error('Post not found')

        return JSON.parse(JSON.stringify(post))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllPosts({ query, limit = 6, page, category }: GetAllPostsParams) {
    try {
        await connectToDatabase()

        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
        const categoryCondition = category ? await getCategoryByName(category) : null
        const conditions = {
            $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
        }

        const skipAmount = (Number(page) - 1) * limit
        const postsQuery = Post.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const posts = await populatePost(postsQuery)
        const postsCount = await Post.countDocuments(conditions)

        return {
            data: JSON.parse(JSON.stringify(posts)),
            totalPages: Math.ceil(postsCount / limit),
        }
    } catch (error) {
        handleError(error)
    }
}

export async function deletePost({ postId, path }: DeletePostParams) {
    try {
        await connectToDatabase()

        const deletedPost = await populatePost(Post.findByIdAndDelete(postId))

        if (deletedPost) revalidatePath(path);

        return JSON.parse(JSON.stringify(deletedPost))
    } catch (error) {
        handleError(error)
    }
}


export async function getRelatedPostsByCategory({
    categoryId,
    postId,
    limit = 3,
    page = 1,
}: GetRelatedPostsByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit
        const conditions = { $and: [{ category: categoryId }, { _id: { $ne: postId } }] }

        const postsQuery = Post.find(conditions)
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit)

        const posts = await populatePost(postsQuery)
        const postsCount = await Post.countDocuments(conditions)

        return { data: JSON.parse(JSON.stringify(posts)), totalPages: Math.ceil(postsCount / limit) }
    } catch (error) {
        handleError(error)
    }
}