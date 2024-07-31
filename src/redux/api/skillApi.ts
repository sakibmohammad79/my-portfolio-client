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
    }),
  }),
});

export const { useAddSkillMutation } = skillApi;
