"use server";

import {
    CreatePostParams,
    DeletePostParams,
    GetAllPostsParams,
} from '@/types'

import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Post from "../database/models/post.model";
import { revalidatePath } from 'next/cache';


export async function createPost({ post, path }: CreatePostParams) {
    try {
        await connectToDatabase();
        const newPost = await Post.create({ ...post })
        return JSON.parse(JSON.stringify(newPost))

    } catch (error) {
        handleError(error);
    }
}

export async function getPostById(postId: string) {
    try {
        await connectToDatabase()

        const post = await Post.findById(postId)

        if (!post) throw new Error('Post not found')

        return JSON.parse(JSON.stringify(post))
    } catch (error) {
        handleError(error)
    }
}

export async function getAllPosts({ postId, page, limit }: GetAllPostsParams) {
    try {
        await connectToDatabase();

        const skipAmount = (page - 1) * limit;
        const postsQuery = Post.find()
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);

        const posts = await postsQuery;
        const postsCount = await Post.countDocuments();

        return {
            data: JSON.parse(JSON.stringify(posts)),
            totalPages: Math.ceil(postsCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}

export async function deletePost({ postId, path }: DeletePostParams) {
    try {
        await connectToDatabase()

        const deletedPost = await Post.findByIdAndDelete(postId)

        if (deletedPost) revalidatePath(path);

        return JSON.parse(JSON.stringify(deletedPost))
    } catch (error) {
        handleError(error)
    }
}