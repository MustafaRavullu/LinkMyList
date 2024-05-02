"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import Confetti from "./confetti";

export default function ListItem({ title, id }: { title: string; id: string }) {
  const [checked, setChecked] = useState<boolean>(false);
  const handleCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <li className="flex items-center gap-4">
      <Checkbox
        id={id}
        className="h-10 w-10"
        checked={checked}
        onCheckedChange={handleCheckboxChange}
      />
      <label
        htmlFor={id}
        className={cn(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
          checked && "line-through text-gray-500"
        )}
      >
        {title}
      </label>
      {checked && <Confetti />}
    </li>
  );
}
