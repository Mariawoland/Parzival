import CollectionsPost from '@/components/shared/CollectionsPost';
import React from 'react';
import { getAllPosts } from '@/lib/actions/post.actions';

export default async function Blog() {

    const posts = await getAllPosts({
        query: '',
        page: 1,
        category: '',
        limit: 6
    });

    console.log(posts);

    return (
        <div>
            <CollectionsPost
                data={posts?.data}
                emptyTitle="No Posts Found"
                emptyStateSubtext="Come back later"
                limit={3}
                page={1}
                totalPages={2}
            />
        </div>
    )
}