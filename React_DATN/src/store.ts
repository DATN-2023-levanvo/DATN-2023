import { configureStore } from "@reduxjs/toolkit"
import productApi from "./Services/Api_Product"
import categoryApi from "./Services/Api_Category"
import userApi from "./Services/Api_User"
import { colorApi } from "./Services/api_Color"

export const store = configureStore({
  reducer: {
    products: productApi.reducer,
    category: categoryApi.reducer,
    user: userApi.reducer,
    colorApi: colorApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware()
      .concat(productApi.middleware)
      .concat(categoryApi.middleware)
      .concat(userApi.middleware)
      .concat(colorApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
