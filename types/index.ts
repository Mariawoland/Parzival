// ====== Product PARAMS
export type CreateProductParams = {
    product: {
        title: string
        titleEn: string
        description: string
        descriptionEn: string
        imageUrl: string
        categoryId: string
        price: string
        sold: string
        soldEn: string
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
    titleEn: string
    description: string
    descriptionEn: string
    price: string
    imageUrl: string
    sold: string
    soldEn: string
    category: {
        _id: string
        name: string
    }
}


// ====== CATEGORY PARAMS
export type CreateCategoryParams = {
    categoryName: string
}

// ====== POST PARAMS
export type CreatePostParams = {
    post: {
        date: string;
        title: string;
        titleEn: string;
        description1: string;
        description1En: string;
        imageUrl: string;
    };
    path: string;
}

export type DeletePostParams = {
    postId: string
    path: string
}

export type GetAllPostsParams = {
    postId: string
    page: number
    limit: number
}

export type Post = {
    _id: string
    date: string
    title: string
    titleEn: string
    description1: string
    description2: string
    description3: string
    description1En: string
    description2En: string
    description3En: string
    imageUrl: string
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