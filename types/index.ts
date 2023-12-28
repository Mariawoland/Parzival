// ====== Product PARAMS
export type CreateProductParams = {
    userId: string
    product: {
        title: string
        description: string
        imageUrl: string
        categoryId: string
        price: string
        url: string
    }
    path: string
}

export type DeleteProductParams = {
    productId: string
    path: string
}

export type GetAllProductsParams = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetRelatedProductsByCategoryParams = {
    categoryId: string
    productId: string
    limit?: number
    page: number | string
}

export type Product = {
    _id: string
    title: string
    description: string
    price: string
    imageUrl: string
    url: string
    category: {
        _id: string
        name: string
    }
}

// ====== Product PARAMS EN
export type CreateProductParamsEn = {
    userId: string
    product: {
        title: string
        description: string
        imageUrl: string
        categoryId: string
        price: string
        url: string
    }
    path: string
}

export type DeleteProductParamsEn = {
    productId: string
    path: string
}

export type GetAllProductsParamsEn = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetRelatedProductsByCategoryParamsEn = {
    categoryId: string
    productId: string
    limit?: number
    page: number | string
}

export type ProductEn = {
    _id: string
    title: string
    description: string
    price: string
    imageUrl: string
    url: string
    category: {
        _id: string
        name: string
    }
}

// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
}

// ====== Posts PARAMS
export type CreatePostParams = {
    userId: string
    post: {
        title: string
        description: string
        imageUrl: string
        categoryId: string
        price: string
        url: string
    }
    path: string
}

export type DeletePostParams = {
    postId: string
    path: string
}

export type GetAllPostsParams = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetRelatedPostsByCategoryParams = {
    categoryId: string
    postId: string
    limit?: number
    page: number | string
}

export type Post = {
    _id: string
    title: string
    description: string
    price: string
    imageUrl: string
    url: string
    category: {
        _id: string
        name: string
    }
}

// ====== Posts PARAMS
export type CreatePostParamsEn = {
    userId: string
    post: {
        title: string
        description: string
        imageUrl: string
        categoryId: string
        price: string
        url: string
    }
    path: string
}

export type DeletePostParamsEn = {
    postId: string
    path: string
}

export type GetAllPostsParamsEn = {
    query: string
    category: string
    limit: number
    page: number
}

export type GetRelatedPostsByCategoryParamsEn = {
    categoryId: string
    postId: string
    limit?: number
    page: number | string
}

export type PostEn = {
    _id: string
    title: string
    description: string
    price: string
    imageUrl: string
    url: string
    category: {
        _id: string
        name: string
    }
}


// ====== URL QUERY PARAMS
export type UrlQueryParams = {
    params: string
    key: string
    value: string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParamProps = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}