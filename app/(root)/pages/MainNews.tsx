import CollectionsPostMiniMain from '@/components/shared/CollectionsPostMiniMain';
import React from 'react';
import { getAllPosts } from '@/lib/actions/post.actions';
import { cookies } from "next/headers"
import Link from 'next/link';

export default async function MainNews() {

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;


    const posts = await getAllPosts({
        postId: '',
        page: 1,
        limit: 2
    });

    return (
        <>
            <div className='px-[6%] pt-[6%] pb-10 text-two-1 font-bold'>
                <Link href='/blog' className='block text-3xl pb-3'>{language === "ka" ? 'ამბები 📰' : 'News 📰'}</Link>
                <p className='text-two-1 sm:text-base text-sm'>{language === "ka" ? 'გაიგე მეტი პასრსიფალის ბოლო ამბების და ინიციატივების შესახებ...' : 'Learn about Parzival`s news and initiatives...'}</p>
            </div>

            <div>
                <CollectionsPostMiniMain
                    data={posts?.data}
                    limit={2}
                    page={1}
                />
            </div>

        </>

    )
}