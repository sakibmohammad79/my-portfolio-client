import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProject: build.mutation({
      query: (data) => ({
        url: "/project",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.project],
    }),
    getAllProject: build.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
      providesTags: [tagTypes.project],
    }),
    deleteProject: build.mutation({
      query: (id: string) => ({
        url: `/project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.project],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetAllProjectQuery,
  useDeleteProjectMutation,
} = projectApi;
