import { IPost } from '@/lib/database/models/post.model';
import React from 'react';
import PostCardMiniSchool from './PostCardMiniSchool';

type CollectionProps = {
    data: IPost[],
    limit: number,
    page: number
    urlParamName?: string
}

const CollectionsPostMiniSchool = ({
    data,
}: CollectionProps) => {
    return (
        <>

            <div className="w-full flex sm:flex-row flex-col  justify-center px-[6%] gap-12 h-full">
                {data.map((post) => {

                    return (
                        <div key={post._id} className="lg:w-1/4 sm:w-1/2 h-full  w-full flex">
                            <PostCardMiniSchool post={post} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CollectionsPostMiniSchool;