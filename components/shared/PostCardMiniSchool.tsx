import { IPost } from '@/lib/database/models/post.model'
import { SignedIn, auth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmationPost } from './DeleteConfirmationPost';
import { cookies } from "next/headers";

type PostCardProps = {
    post: IPost,
}

const PostCardMiniSchool = ({ post }: PostCardProps) => {

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;

    const truncatedDescription = post.description1.slice(0, 100);
    const truncatedDescriptionEn = post.description1En.slice(0, 100);

    const truncatedTitle = post.title.slice(0, 30);
    const truncatedTitleEn = post.titleEn.slice(0, 30);

    return (
        <>
            <div className={`w-full grow sm:h-[440px] h-full flex flex-col relative overflow-hidden border-2 border-school-1 rounded-2xl bg-four-2`}>

                <img src={post.imageUrl} className=' w-full aspect-video object-cover' alt='PostCard image' />

                <Link href={`/posts/${post._id}`} className={`flex text-lg px-5 font-semibold text-two-1 hover:text-school-1 py-4 transition-all duration-300`}>{language === "ka" ? truncatedTitle : truncatedTitleEn}</Link>

                <p className={`text-justify grow text-sm px-5 text-two-1`}>{language === "ka" ? truncatedDescription + "..." : truncatedDescriptionEn + "..."}</p>

                <div className='p-3'>
                    <Link href={`/posts/${post._id}`} className='flex justify-center border-2 font-black transition-all duration-300 tracking-wider border-school-1 hover:border-school-2 text-school-1 hover:text-four-1 bg-four-4 hover:bg-school-2 w-full rounded-2xl mt-1 py-3 text-base'>{language === "ka" ? 'გაიგე მეტი' : 'Learn More'}</Link>
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

export default PostCardMiniSchool;