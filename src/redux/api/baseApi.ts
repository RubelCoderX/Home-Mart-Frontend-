/* eslint-disable @typescript-eslint/no-explicit-any */

import { logOut, setUser } from "../features/user/userSlice";
import { RootState } from "../store";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:3000/api/v1",
  baseUrl: "https://home-mart-backend.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    // console.log(token);
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});
const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const res = await fetch("https://home-mart-backend.vercel.app/api/v1", {
      method: "POST",
      credentials: "include",
    });

    const user = (api.getState() as RootState).auth.user;
    const data = await res.json();
    if (data?.data?.accessToken && user !== null) {
      api.dispatch(setUser({ user, token: data.data.accessToken }));
      return baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["product", "user"],
  endpoints: () => ({}),
});
