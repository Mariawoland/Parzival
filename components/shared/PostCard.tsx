"use client";
import { IPost } from '@/lib/database/models/post.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { DeleteConfirmationPost } from './DeleteConfirmationPost';

type PostCardProps = {
    post: IPost,
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <>
            <div className='flex flex-col'>
                <Image src={post.imageUrl} width={200} height={200} alt='PostCard image' />
                <Link href={`/posts/${post._id}`}>{post.title}</Link>
                <SignedIn>
                    <DeleteConfirmationPost postId={post._id} />
                </SignedIn>
            </div>

        </>
    )
}

export default PostCard;