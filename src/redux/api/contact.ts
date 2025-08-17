import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addContact: build.mutation({
      query: (data) => ({
        url: "/contacts",
        method: "POST",
        contentType: "application/json",
        data,
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    getAllContact: build.query({
      query: (params) => ({
        url: "/contacts",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.contact],
    }),
    getSingleContact: build.query({
      query: (id: string) => ({
        url: `/contacts/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.contact],
    }),
    deleteContact: build.mutation({
      query: (id: string) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.contact],
    }),
    getContactStats: build.query({
      query: () => ({
        url: "/contacts/stats",
        method: "GET",
      }),
      providesTags: [tagTypes.contact],
    }),
  }),
});

export const {
  useAddContactMutation,
  useGetSingleContactQuery,
  useGetAllContactQuery,
  useDeleteContactMutation,
  useGetContactStatsQuery,
} = contactApi;