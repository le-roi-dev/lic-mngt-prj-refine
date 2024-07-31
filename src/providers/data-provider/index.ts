"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://lic-refine.verce.app/";

export const dataProvider = dataProviderSimpleRest(API_URL);
