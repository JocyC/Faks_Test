import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MsgBody } from "../../interfaces";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://local.ip:3000/api/v1" }),
  tagTypes: ["Claims", "Messages"],
  endpoints: (builder) => ({
    getClaims: builder.query({
      query: () => "/claims",
      providesTags: ["Claims"],
    }),
    getSingleClaim: builder.query({
      query: (id) => `/claims/:${id}`,
    }),
    getMessages: builder.query({
      query: () => "/messages",
    }),
    getSingleLab: builder.query({
      query: (id) => `/labs/:${id}`,
    }),
    createClaim: builder.mutation({
      query: (claim) => ({
        url: "/claims",
        method: "POST",
        body: claim,
      }),
      invalidatesTags: ["Claims"],
    }),
    createMessage: builder.mutation({
      query: (message) => ({
        url: "/messages",
        method: "POST",
        body: message,
      }),
      invalidatesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetClaimsQuery,
  useGetSingleClaimQuery,
  useGetMessagesQuery,
  useGetSingleLabQuery,
  useCreateClaimMutation,
  useCreateMessageMutation,
} = apiSlice;
