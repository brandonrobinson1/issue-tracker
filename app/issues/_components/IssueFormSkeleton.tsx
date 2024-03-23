import { Box } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton: () => React.JSX.Element = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="3rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
