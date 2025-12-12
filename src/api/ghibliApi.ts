import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ghibliApi = createApi({
    reducerPath: "ghibliApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ghibliapi.vercel.app/" }),
    endpoints: (builder) => ({
        getFilms: builder.query({
            query: () => "films",
        }),
        getPeopleByFilmId: builder.query({
            query: (filmId) => `films/${filmId}/people`,
        }),
    }),
});

export const { useGetFilmsQuery, useGetPeopleByFilmIdQuery } = ghibliApi;
