"use client";

import { useTodoContext } from "@/contexts/todo-context";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { nanoid } from "nanoid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

export default function LinkerButton() {
  const { todos, resetTodos } = useTodoContext();
  const [linkId, setLinkId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  async function handleCreateLink() {
    const listId = nanoid();
    setLoading(true);
    setError(false);
    try {
      await setDoc(doc(db, "lists", listId), {
        todos: todos,
      });
      setLinkId(`linkmylist.vercel.app/${listId}`);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLinkId("Something went wrong! 😖");
      setError(true);
      setLoading(false);
    }
  }
  function handleCopy() {
    if (error) return;
    navigator.clipboard.writeText(linkId);
    resetTodos();
    toast.success("Link copied.");
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button onClick={handleCreateLink} disabled={todos.length === 0}>
          Link The List
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="sm:text-center">
          <AlertDialogTitle>
            {loading ? "Creating link..." : "Link created ✨"}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:flex-col-reverse sm:space-x-0">
          <AlertDialogAction disabled={loading} onClick={handleCopy}>
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : error ? (
              "Ok"
            ) : (
              "Copy"
            )}
          </AlertDialogAction>
          {loading ? (
            <Skeleton className="w-full h-[50px] mb-3" />
          ) : (
            <div className="w-full border p-3 rounded-md text-center mb-3">
              {linkId}
            </div>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
