import { IPost } from '@/lib/database/models/post.model'
import React from 'react'
import PostCardMini from './PostCardMini'

type CollectionProps = {
    data: IPost[],
    limit: number,
    page: number
    urlParamName?: string
}

const CollectionsPostMini = ({
    data,
}: CollectionProps) => {
    return (
        <>

            <div className="w-full flex md:flex-row flex-col items-stretch justify-center px-[6%] gap-12">
                {data.map((post) => {

                    return (
                        <div key={post._id} className="md:w-1/2 min-h-full  w-full flex ">
                            <PostCardMini post={post} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CollectionsPostMini;