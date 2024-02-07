import CollectionsPost from '@/components/shared/CollectionsPost';
import React from 'react';
import { getAllPosts } from '@/lib/actions/post.actions';
import { Footer } from '@/components/shared/Footer';

export default async function Blog() {

    const posts = await getAllPosts({
        postId: '',
        page: parseInt(1 as unknown as string, 10) || 1,
        limit: 100,
    });

    return (
        <div>
            <div className='md:px-[12%] px-[6%] py-[7%]'>
                <CollectionsPost
                    data={posts?.data}
                    limit={100}
                    page={1}
                />

            </div>

            <Footer />
        </div>

    )
}