import { IPost } from '@/lib/database/models/post.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmationPost } from './DeleteConfirmationPost';
import { cookies } from "next/headers";

type PostCardProps = {
    post: IPost,
}

const PostCard = ({ post }: PostCardProps) => {

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;

    return (
        <>
            <div className="relative w-full h-full flex md:flex-row flex-col justify-center overflow-hidden border-2 bg-four-4 border-six-1 rounded-3xl">

                <img src={post.imageUrl} className='md:border-e-2 border-six-1 md:w-1/3 w-full md:aspect-square sm:aspect-video aspect-square object-cover' alt='PostCard image' />

                <div className='flex flex-col md:w-2/3 w-full min-h-full justify-between'>

                    <div className='p-[4%] grow'>
                        <p className='text-six-1 text-xs pb-3'>{post.date}</p>
                        <Link href={`/posts/${post._id}`} className='flex sm:text-xl text-base font-semibold text-two-2 hover:text-six-1 transition-all duration-300'>{language === "ka" ? post.title : post.titleEn}</Link>
                    </div>

                    <div className='p-[2%] mt-auto flex flex-col items-end'>
                        <hr className='w-full mb-3 border-0 h-[2px] bg-six-1' />
                        <Link href={`/posts/${post._id}`} className='md:w-40 w-full flex items-center justify-center border-2 border-six-1 py-2 rounded-full bg-four-3 hover:bg-four-4 text-six-1 transition-all text-sm duration-300 font-semibold tracking-wide' >{language === "ka" ? 'გაიგე მეტი' : 'Learn More'}</Link>
                    </div>


                </div>

                <SignedIn>
                    <div className='absolute right-6 top-6'>
                        <DeleteConfirmationPost postId={post._id} />
                    </div>
                </SignedIn>
            </div>

        </>
    )
}

export default PostCard;