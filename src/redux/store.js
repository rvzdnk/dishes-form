import { configureStore } from "@reduxjs/toolkit";
import { dishesApi } from "./slices/dishesApi";

const store = configureStore({
    reducer: {
        [dishesApi.reducerPath]: dishesApi.reducer,
    },
  })

export default store;