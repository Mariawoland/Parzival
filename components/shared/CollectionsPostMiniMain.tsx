import { IPost } from '@/lib/database/models/post.model'
import React from 'react'
import PostCardMiniMain from './PostCardMiniMain'

type CollectionProps = {
    data: IPost[],
    limit: number,
    page: number
    urlParamName?: string
}

const CollectionsPostMiniMain = ({
    data,
}: CollectionProps) => {
    return (
        <>

            <ul className="w-full flex md:flex-row flex-col items-stretch justify-center px-[6%] gap-12">
                {data.map((post) => {

                    return (
                        <li key={post._id} className="md:w-1/2 h-full  w-full">
                            <PostCardMiniMain post={post} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default CollectionsPostMiniMain;