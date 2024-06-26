import Header from "@/components/header";
import HowItWorks from "@/components/how-it-works";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import TodoContextProvider from "@/contexts/todo-context";

export default async function Home() {
  return (
    <main>
      <TodoContextProvider>
        <Header />
        <TodoInput />
        <MaxWidthWrapper className="max-w-screen-md">
          <TodoList />
          <HowItWorks />
        </MaxWidthWrapper>
      </TodoContextProvider>
    </main>
  );
}
