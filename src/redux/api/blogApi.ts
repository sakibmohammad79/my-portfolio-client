import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addBlog: build.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.blog],
    }),
    getAllBlog: build.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: [tagTypes.blog],
    }),
    deleteBlog: build.mutation({
      query: (id: string) => ({
        url: `/blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.blog],
    }),
  }),
});

export const { useAddBlogMutation, useGetAllBlogQuery, useDeleteBlogMutation } =
  blogApi;
