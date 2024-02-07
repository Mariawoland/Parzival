import React from 'react';
import CollectionsPostMini from '@/components/shared/CollectionsPostMini';
import { getAllPosts, getPostById } from '@/lib/actions/post.actions'
import { SearchParamProps } from '@/types';
import { cookies } from "next/headers";
import Link from 'next/link';
import enText from '@/public/languages/en.json';
import kaText from '@/public/languages/ka.json';


const PostDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {

    const post = await getPostById(id);

    const selectedLanguage = cookies().get("selectedLanguage");
    const language = selectedLanguage?.value;

    const relatedPosts = await getAllPosts({
        postId: post._id,
        page: parseInt(searchParams.page as string, 10) || 1,
        limit: 4,
    });

    return (
        <>
            <section className="flex flex-col gap-12 px-[8%] pb-[8%] pt-[6%]">

                <div className='flex items-center justify-between md:text-base text-sm font-black text-six-1'>
                    <Link href='/blog'>{language === "ka" ? 'ყველა პოსტი' : 'All Posts'}</Link>
                    <p>{post.date}</p>
                </div>


                <h2 className='font-bold md:text-4xl sm:text-3xl text-2xl text-two-1'>{language === "ka" ? post.title : post.titleEn}</h2>

                <img
                    src={post.imageUrl}
                    alt="Post image"
                    className="w-full aspect-video object-cover"
                />

                <p className="md:text-base text-sm text-two-1 text-justify">{language === "ka" ? parseText(post.description1) : parseText(post.description1En)}</p>
            </section>


            <section className="px-[8%] pb-[8%]">

                <hr className='h-[2px] bg-two-1 border-0 mb-[50px]' />

                <div className='flex items-center justify-end md:text-base text-sm font-black text-six-1 pb-[8%]'>
                    <Link href='/blog'>{language === "ka" ? "ყველა პოსტი" : "All Posts"}</Link>
                </div>

                <CollectionsPostMini
                    data={relatedPosts?.data}
                    limit={4}
                    page={1}
                />
            </section>
        </>
    )
    function parseText(text: string) {
        const lines = text.split('axaliXazi');
        return lines.map((line: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, index: React.Key | null | undefined) => (
            <React.Fragment key={index}>
                {line}
                {index !== lines.length - 1 && <br />}
            </React.Fragment>
        ));
    }
}

export default PostDetails;
