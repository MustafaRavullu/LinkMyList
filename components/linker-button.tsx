"use client";

import { useTodoContext } from "@/contexts/todo-context";
import { Button } from "./ui/button";

export default function LinkerButton() {
  const { todos } = useTodoContext();
  return <Button disabled={todos.length === 0}>Link The List</Button>;
}
