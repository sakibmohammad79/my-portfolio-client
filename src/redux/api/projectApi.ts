import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // addSkill: build.mutation({
    //   query: (data) => ({
    //     url: "/skill",
    //     method: "POST",
    //     contentType: "application/json",
    //     data,
    //   }),
    //   invalidatesTags: [tagTypes.skill],
    // }),
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

export const { useGetAllProjectQuery, useDeleteProjectMutation } = projectApi;
