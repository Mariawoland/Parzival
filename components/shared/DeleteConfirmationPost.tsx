'use client'

import { useTransition } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import { deletePost } from '@/lib/actions/post.actions'

export const DeleteConfirmationPost = ({ postId }: { postId: string }) => {
    const pathname = usePathname()
    let [isPending, startTransition] = useTransition()

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Image src="/assets/icons/delete.png" alt="edit" width={30} height={30} className='bg-white p-1 rounded-md' />
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>გინდა პოსტის წაშლა?</AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>არა</AlertDialogCancel>

                    <AlertDialogAction
                        onClick={() =>
                            startTransition(async () => {
                                await deletePost({ postId, path: pathname })
                            })
                        }>
                        {isPending ? '...' : 'კი'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}