import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { ChevronRight } from "lucide-react";

export default function GoBackBtn({ label }: { label: string }) {
  return (
    <Link
      className={cn(buttonVariants({ variant: "default" }), "group")}
      href={"/"}
    >
      {label}{" "}
      <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-all" />
    </Link>
  );
}
