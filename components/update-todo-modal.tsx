"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTodoContext } from "@/contexts/todo-context";
import { useState } from "react";

const FormSchema = z.object({
  todo: z
    .string()
    .min(1, {
      message: "Todo must be at least 1 character.",
    })
    .max(200, { message: "Todo exceeds the maximum limit of 200 characters." }),
});

export default function UpdateTodoModal({
  todoId,
  todoTitle,
}: {
  todoId: string;
  todoTitle: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const { updateTodo } = useTodoContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      todo: todoTitle,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    updateTodo(todoId, data.todo);
    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Pencil className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <FormField
              control={form.control}
              name="todo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Todo Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Type here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Edit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
