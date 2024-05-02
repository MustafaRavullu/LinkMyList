import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex-1 flex justify-center">
      <MaxWidthWrapper className="max-w-screen-md my-2 flex flex-col gap-5">
        <div className="h-20 flex w-full justify-between items-center">
          <Skeleton className="w-[100px] h-[24px]" />
          <Skeleton className="w-[136px] h-[40px]" />
        </div>
        {Array.from("abcdefghijk").map((_, index) => (
          <div key={index} className="flex gap-4">
            <Skeleton className="w-[40px] h-[40px] " />
            <Skeleton className="w-full h-[40px] " />
          </div>
        ))}
      </MaxWidthWrapper>
    </div>
  );
}
