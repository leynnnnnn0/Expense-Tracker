import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const walletApi = createApi({
  reducerPath: "wallet",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-backend-leynnnnnn.onrender.com/",
  }),
  endpoints: (builder) => ({
    getWalletDetails: builder.query({ query: () => "get" }),
  }),
});

export const { useGetWalletDetailsQuery, useNewMoneyMutation } = walletApi;
