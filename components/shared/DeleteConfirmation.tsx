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

import { deleteProduct } from '@/lib/actions/product.actions'

export const DeleteConfirmation = ({ productId }: { productId: string }) => {
    const pathname = usePathname()
    let [isPending, startTransition] = useTransition()

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                <Image className='bg-white p-1 rounded-md' src="/assets/icons/delete.png" alt="edit" width={30} height={30} />
            </AlertDialogTrigger>

            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                    <AlertDialogTitle>გინდა პროდუქტის წაშლა?</AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>არა</AlertDialogCancel>

                    <AlertDialogAction
                        onClick={() =>
                            startTransition(async () => {
                                await deleteProduct({ productId, path: pathname })
                            })
                        }>
                        {isPending ? '...' : 'კი'}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}