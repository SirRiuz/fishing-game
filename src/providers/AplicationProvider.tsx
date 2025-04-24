import { QueryClientProvider } from "@tanstack/react-query";

import { ReactNode } from "react";
import { queryClient } from "../context/AplicationContext";

export interface AplicationProviderProps {
  children: ReactNode;
}

export default function AplicationProvider({ children }: AplicationProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
