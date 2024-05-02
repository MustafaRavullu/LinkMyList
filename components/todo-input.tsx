"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTodoContext } from "@/contexts/todo-context";

const FormSchema = z.object({
  todo: z.string().min(1, {
    message: "Todo must be at least 1 character.",
  }),
});

export default function TodoInput() {
  const { saveTodo } = useTodoContext();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      todo: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    saveTodo(data.todo);
    form.reset();
  }
  return (
    <header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-start justify-between"
        >
          <FormField
            control={form.control}
            name="todo"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="todo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
    </header>
  );
}
