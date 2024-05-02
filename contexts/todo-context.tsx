"use client";

import { TodoContextType, ITodo } from "@/lib/types";
import { createContext, useContext, useState } from "react";
import { nanoid } from "nanoid";

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const saveTodo = (todoTitle: string) => {
    const newTodo: ITodo = {
      id: nanoid(),
      title: todoTitle,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const updateTodo = (id: string, todoTitle: string) => {
    const newTodoList = todos.map((todo: ITodo) => {
      if (todo.id === id) {
        return { ...todo, title: todoTitle };
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
  };
  const deleteTodo = (id: string) => {
    const newTodoList = todos.filter((todo: ITodo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  };
  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoContextProvider");
  }
  return context;
}
