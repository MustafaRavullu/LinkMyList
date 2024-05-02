"use client";

import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import UpdateTodoModal from "./update-todo-modal";
import DeleteTodoModal from "./delete-todo-modal";
import { ITodo } from "@/lib/types";

export default function TodoCard({ todo }: { todo: ITodo }) {
  return (
    <li>
      <Card className="p-3 flex flex-row items-center justify-between">
        <CardHeader className="p-0">
          <CardTitle className="text-sm">{todo.title}</CardTitle>
        </CardHeader>
        <CardFooter className="p-0 flex gap-1 flex-shrink-0">
          <UpdateTodoModal todoId={todo.id} todoTitle={todo.title} />
          <DeleteTodoModal todoId={todo.id} />
        </CardFooter>
      </Card>
    </li>
  );
}
