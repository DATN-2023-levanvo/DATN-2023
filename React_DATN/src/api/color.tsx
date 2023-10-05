
import { pause } from "../utils/pause"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { IColor } from "../Interface/color"

const colorApi = createApi({
    reducerPath: 'colors',
    tagTypes: ["Color"],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        fetchFn: async (...args) => {
            await pause(1000)
            return fetch(...args)
        }
    }),
    endpoints: (builder) => ({
        getColors: builder.query<IColor, void>({
            query: () => `colors`,
            providesTags: ["Color"]
        }),
        getColorById: builder.query<IColor, number>({
            query: (id) => `colors/${id}`,
            providesTags: ["Color"]
        }),
        addColor: builder.mutation<IColor, IColor>({
            query: (product) => ({
                url: "colors",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["Color"]
        }),
        removeColor: builder.mutation<void, number | string>({
            query: (id) => ({
                url: `colors/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Color"]
        }),
        updateColor: builder.mutation<IColor, IColor>({
            query: (product) => ({
                url: `colors/${product.color_id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ["Color"]
        })
    })
})

export const {
    useAddColorMutation,
    useGetColorByIdQuery,
    useGetColorsQuery,
    useRemoveColorMutation,
    useUpdateColorMutation
} = colorApi

export const productReducer = colorApi.reducer

export default colorApi