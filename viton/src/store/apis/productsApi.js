import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const productApi = createApi({
    reducerPath: "productsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                query: () => {
                    return {
                        url: '/products?limit=1000',

                        method: 'GET'
                    }
                }
            }),
            fetchLimitedProducts: builder.query({
                query: (options) => {
                    return {
                        url: `/products?limit=${options?.limit || 10}`,
                        method: 'GET'
                    }
                }
            }),
            fetchSingleProduct: builder.query({
                query: (id) => {
                    return {
                        url: `/products/${id}`,
                        method: 'GET'
                    }
                }
            }),
            fetchAllCategories: builder.query({
                query: () => {
                    return {
                        url: '/products/category-list',
                        method: 'GET'
                    }
                }
            }),
            fetchCatagoriesProducts: builder.query({
                query: (category) => {
                    return {
                        url: `/products/category/${category}`,
                        method: 'GET'
                    }

                }
            }),
            fetchSearchedProducts: builder.query({
                query: (searchQuery) => {
                    return {
                        url: `/products/search?q=${searchQuery}`,
                        method: 'GET'
                    }
                }
            }),
            fetchLimitAndSkipProducts: builder.query({
                query: ({ limit, skip }) => {
                    return {
                        url: `/products?limit=${limit}&skip=${skip}`,
                        method: 'GET'
                    }
                }
            }),


        }

    },



})

export const { useFetchProductsQuery, useFetchLimitedProductsQuery, useFetchSingleProductQuery, useFetchAllCategoriesQuery, useFetchCatagoriesProductsQuery, useFetchSearchedProductsQuery, useFetchLimitAndSkipProductsQuery } = productApi;
export { productApi };