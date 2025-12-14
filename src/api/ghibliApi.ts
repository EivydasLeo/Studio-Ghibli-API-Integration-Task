import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film, People } from "../types/types";

const BASE_URL = "https://ghibliapi.vercel.app/";

export const ghibliApi = createApi({
    reducerPath: "ghibliApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getFilms: builder.query<Film[], void>({
            query: () => "films",
        }),

        getPeople: builder.query<People[], void>({
            query: () => "people",
        }),
    }),
});

export const { useGetFilmsQuery, useGetPeopleQuery } = ghibliApi;
