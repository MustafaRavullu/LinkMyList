import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import TodoContextProvider from "@/contexts/todo-context";

export default async function Home() {
  return (
    <main>
      <TodoContextProvider>
        <TodoInput />
        <TodoList />
      </TodoContextProvider>
    </main>
  );
}
