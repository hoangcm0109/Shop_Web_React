import { configureStore } from "@reduxjs/toolkit"

import productModalSlice from "./product-modal/productModalSlice"

export const store = configureStore({
    reducer: {
        productModal: productModalSlice
    }
})