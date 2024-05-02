"use client";

import { useTodoContext } from "@/contexts/todo-context";
import TodoCard from "./todo-card";

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul className="sm:mb-20 mb-32 flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}></TodoCard>
      ))}
    </ul>
  );
}
