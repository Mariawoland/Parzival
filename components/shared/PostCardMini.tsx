import { IPost } from '@/lib/database/models/post.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmationPost } from './DeleteConfirmationPost';
import { cookies } from "next/headers";

type PostCardProps = {
    post: IPost,
}

const PostCardMini = ({ post }: PostCardProps) => {

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;

    return (
        <>
            <div className={`w-full min-h-full relative overflow-hidden border-2 border-six-1 rounded-2xl bg-four-3 flex flex-col`}>

                <img src={post.imageUrl} className=' w-full aspect-video object-cover' alt='PostCard image' />

                <Link href={`/posts/${post._id}`} className={`flex text-lg px-3 font-semibold text-two-1 hover:text-six-1 py-4 transition-all duration-300 grow`}>{language === "ka" ? post.title : post.titleEn}</Link>

                <hr className={`bg-six-1 h-[2px] border-0`} />

                <p className={`font-bold text-end text-sm px-6 py-3 text-six-1`}>{post.date}</p>

                <SignedIn>
                    <div className='absolute right-6 top-6'>
                        <DeleteConfirmationPost postId={post._id} />
                    </div>
                </SignedIn>
            </div>
        </>
    )
}

export default PostCardMini;