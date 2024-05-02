"use client";

import { useTodoContext } from "@/contexts/todo-context";
import { howItWorksData } from "@/lib/constants";

export default function HowItWorks() {
  const { todos } = useTodoContext();
  if (todos.length !== 0) return;
  return (
    <div className="grid grid-cols-3">
      {howItWorksData.map((item) => (
        <div key={item.id} className="text-center text-gray-500">
          Step {item.number} <br />
          {item.text}
        </div>
      ))}
    </div>
  );
}
