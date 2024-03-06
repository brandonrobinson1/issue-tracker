"use client";

import {
  QueryClientProvider as ReactQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";
const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
