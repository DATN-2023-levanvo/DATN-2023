import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../Models/interfaces";
import { pause } from "../utils/pause";

const productApi = createApi({
  reducerPath: "products",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:8080`,
    fetchFn: async (...args) => (
        await pause(1000),
        fetch(...args)
    )
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query<IProduct[], void>({
      query: () => `/api/products`,
      providesTags: ["Product"]
    }),

    getOneProduct: builder.query<IProduct, number | string>({
      query: (id) => `/api/product/${id}`,
      providesTags: ["Product"]
    }),

    addProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `/api/product`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    // Xóa sản phẩm tạm thời
    deleteProduct: builder.mutation<void,number | string>({
        query: (id) => ({
            url: `/api/product/${id}`,
            method: "DELETE",
        }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: builder.mutation<IProduct,IProduct>({
      query: (product) => ({
        url: `/api/product/${product._id}`,
        method: "PATCH",
        body: product
      }),
      invalidatesTags: ["Product"]
    }),

    //API in ra tất cả sản phẩm xóa tạm thời
    getAllDeletedProducts: builder.query<IProduct[], void>({
      query: () => `/api/restore-product-data`,
      providesTags: ["Product"]
    }),

    // API khôi phục sản phẩm
    restoreProduct: builder.mutation({
      query: (id) => ({
        url: `/api/product/restore/${id}`,
        method: "PUT"
      }),
      invalidatesTags: ["Product"]
    }),

    //API Xóa sản phẩm vĩnh viễn
    removeProduct: builder.mutation({
      query: (id) => ({
        url: `/api/product/${id}/delete`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"]
    })
  })
});

export const { 
  useGetAllProductQuery,
   useAddProductMutation,
   useDeleteProductMutation, 
   useGetOneProductQuery, 
   useUpdateProductMutation,
   useGetAllDeletedProductsQuery,
   useRestoreProductMutation,
   useRemoveProductMutation
   } = productApi;
export default productApi;
