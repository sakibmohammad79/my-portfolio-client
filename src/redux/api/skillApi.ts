import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSkill: build.mutation({
      query: (data) => ({
        url: "/skill",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.skill],
    }),
    getAllSkill: build.query({
      query: () => ({
        url: "/skill",
        method: "GET",
      }),
      providesTags: [tagTypes.skill],
    }),
  }),
});

export const { useAddSkillMutation, useGetAllSkillQuery } = skillApi;
