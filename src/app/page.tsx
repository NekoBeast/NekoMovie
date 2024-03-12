"use client";

import { PageWrapper } from "@/lib/styled/pageWrapper";
import { MoviesList } from "./movies/movies_list";

const Page = () => {
  return (
    <PageWrapper>
      <MoviesList />
    </PageWrapper>
  );
};

export default Page;
