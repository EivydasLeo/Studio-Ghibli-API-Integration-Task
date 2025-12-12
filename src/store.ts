import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ghibliApi } from "./api/ghibliApi";

export const store = configureStore({
    reducer: {
        [ghibliApi.reducerPath]: ghibliApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ghibliApi.middleware),
});

setupListeners(store.dispatch);
