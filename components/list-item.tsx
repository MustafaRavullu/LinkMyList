"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { cn } from "@/lib/utils";
import Confetti from "./confetti";

export default function ListItem({ title, id }: { title: string; id: string }) {
  const [checked, setChecked] = useState<boolean>(false);
  const [audioFiles, setAudioFiles] = useState<{
    success: HTMLAudioElement;
    eraser: HTMLAudioElement;
  } | null>(null);
  useEffect(() => {
    const success = new Audio("/success.mp3");
    const eraser = new Audio("/eraser.mp3");
    setAudioFiles({ success, eraser });
  }, []);

  const handleCheckboxChange = () => {
    setChecked((prevState) => !prevState);
    if (audioFiles === null) return;
    if (!checked) {
      audioFiles.success.play();
    } else {
      audioFiles.eraser.play();
    }
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
