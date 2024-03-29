'use client'

import { useCallback, Dispatch, SetStateAction } from 'react'
import type { FileWithPath } from '@uploadthing/react'
import { useDropzone } from '@uploadthing/react/hooks'
import { generateClientDropzoneAccept } from 'uploadthing/client'

import { Button } from '@/components/ui/button'
import { convertFileToUrl } from '@/lib/utils'

type FileUploaderProps = {
    onFieldChange: (url: string) => void
    imageUrl: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

export function FileUploader({ imageUrl, onFieldChange, setFiles }: FileUploaderProps) {
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
        setFiles(acceptedFiles)
        onFieldChange(convertFileToUrl(acceptedFiles[0]))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
    })

    return (
        <div
            {...getRootProps()}
            className="flex-center bg-dark-3 flex cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 shadow-md">
            <input {...getInputProps()} className="cursor-pointer" />

            {imageUrl ? (
                <div className="flex h-full w-full flex-1 justify-center ">
                    <img
                        src={imageUrl}
                        alt="image"
                        width={250}
                        height={250}
                        className="w-full object-cover object-center"
                    />
                </div>
            ) : (
                <div className="flex-center flex-col py-5 text-grey-500">

                    <h3 className="mb-2 mt-2 text-sm">ფოტოს დამატება</h3>
                    <p className="p-medium-12 mb-4 text-sm">SVG, PNG, JPG</p>
                    <button type="button" className="rounded-full px-7 py-2 border border-gray-200 text-sm shadow">
                        ფოტოს ამორჩევა
                    </button>
                </div>
            )}
        </div>
    )
}