import { configureStore } from "@reduxjs/toolkit";
import { dishesApi } from "./slices/dishesApi";

const store = configureStore({
    reducer: {
        [dishesApi.reducerPath]: dishesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dishesApi.middleware),
  })

export type RootState = ReturnType<typeof store.getState>
export default store;