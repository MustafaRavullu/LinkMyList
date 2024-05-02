"use client";

import { useTodoContext } from "@/contexts/todo-context";
import TodoCard from "./todo-card";

export default function TodoList() {
  const { todos } = useTodoContext();
  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}></TodoCard>
      ))}
    </ul>
  );
}
