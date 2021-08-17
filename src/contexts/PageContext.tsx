import { useRouter } from "next/router";
import React, { createContext, useState } from "react";

interface PageContextType {
  page: number | undefined;
  setPage: (page: number) => void;
}

export const PageContext = createContext({} as PageContextType);

interface PageContextProviderProps {
  children: React.ReactNode;
}

export function PageContextProvider({ children }: PageContextProviderProps) {
  const router = useRouter();
  const { page } = router.query;

  const [pageId, setPage] = useState<number | undefined>(
    page ? +page : undefined
  );

  return (
    <PageContext.Provider value={{ page: pageId, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
