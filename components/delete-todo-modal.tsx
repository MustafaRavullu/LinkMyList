import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useTodoContext } from "@/contexts/todo-context";
import { toast } from "sonner";

export default function DeleteTodoModal({
  todoId,
  todoTitle,
}: {
  todoId: string;
  todoTitle: string;
}) {
  const { deleteTodo } = useTodoContext();
  function handleDelete() {
    deleteTodo(todoId);
    toast.success("Todo deleted");
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Trash2 className="h-5 w-5" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will delete todo:{" "}
            <span className="font-bold">{todoTitle}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
