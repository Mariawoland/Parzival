import { IPost } from '@/lib/database/models/post.model'
import React from 'react'
import PostCard from './PostCard'

type CollectionProps = {
    data: IPost[],
    limit: number,
    page: number
    urlParamName?: string
}

const CollectionsPost = ({
    data,
}: CollectionProps) => {
    return (
        <>

            <div className="w-full flex flex-col items-stretch justify-center md:px-[6%] px-[4%] gap-12">
                {data.map((post) => {

                    return (
                        <div key={post._id} className="h-full w-full">
                            <PostCard post={post} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CollectionsPost;