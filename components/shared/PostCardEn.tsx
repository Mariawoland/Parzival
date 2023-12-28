"use client";
import { IPostEn } from '@/lib/database/models/postEn.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { DeleteConfirmationPost } from './DeleteConfirmationPost';

type PostCardProps = {
    post: IPostEn,
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <>
            <div className='flex flex-col'>
                <Image src={post.imageUrl} width={200} height={200} alt='PostCard image' />
                <Link href={`/postsEn/${post._id}`}>{post.title}</Link>
                <SignedIn>
                    <DeleteConfirmationPost postId={post._id} />
                </SignedIn>
            </div>

        </>
    )
}

export default PostCard;