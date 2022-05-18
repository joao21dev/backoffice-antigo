import axios from "axios";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/user.model";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api-env.eba-p3jiv4uy.us-east-1.elasticbeanstalk.com/bank",
  }),
  endpoints: (builder) => ({
    users: builder.query<User[], void>({
      query: () => "/accounts/1",
    }),
  }),
});

export const { useUsersQuery } = usersApi;
