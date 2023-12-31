import CollectionsPost from '@/components/shared/CollectionsPost';
import { getPostById, getRelatedPostsByCategory } from '@/lib/actions/post.actions'
import { SearchParamProps } from '@/types'
import Image from 'next/image';

const PostDetails = async ({ params: { id }, searchParams }: SearchParamProps) => {
    const post = await getPostById(id);

    const relatedPosts = await getRelatedPostsByCategory({
        categoryId: post.category._id,
        postId: post._id,
        page: searchParams.page as string,
    })

    return (
        <>
            <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
                    <Image
                        src={post.imageUrl}
                        alt="hero image"
                        width={1000}
                        height={1000}
                        className="h-full min-h-[300px] object-cover object-center"
                    />

                    <div className="flex w-full flex-col gap-8 p-5 md:p-10">
                        <div className="flex flex-col gap-6">
                            <h2 className='h2-bold'>{post.title}</h2>

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                <div className="flex gap-3">
                                    <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700">
                                        ${post.price}
                                    </p>
                                    <p className="p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500">
                                        {post.category.name}
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div className='flex gap-2 md:gap-3'>
                                <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
                                <div className="p-medium-16 lg:p-regular-20 flex flex-wrap items-center">

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
                            <p className="p-medium-16 lg:p-regular-18">{post.description}</p>
                            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">{post.url}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* postS with the same category */}
            <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <h2 className="h2-bold">Related posts</h2>

                <CollectionsPost
                    data={relatedPosts?.data}
                    emptyTitle="No Events Found"
                    emptyStateSubtext="Come back later"
                    limit={3}
                    page={searchParams.page as string}
                    totalPages={relatedPosts?.totalPages}
                />
            </section>
        </>
    )
}

export default PostDetails