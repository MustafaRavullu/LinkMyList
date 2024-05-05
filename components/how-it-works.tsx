"use client";

import { useTodoContext } from "@/contexts/todo-context";

export default function HowItWorks() {
  const { todos } = useTodoContext();
  if (todos.length !== 0) return;
  return (
    <div className="flex justify-center items-center gap-5">
      <p className="text-zinc-500 text-sm font-semibold">
        Create a list and share it
      </p>
    </div>
  );
}
