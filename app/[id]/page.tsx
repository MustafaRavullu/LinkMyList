import GoBackBtn from "@/components/go-back-btn";
import ListItem from "@/components/list-item";
import ListNotFound from "@/components/list-not-found";
import Logo from "@/components/logo";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { db } from "@/firebase.config";
import { ITodo } from "@/lib/types";
import { doc, getDoc } from "firebase/firestore";

async function getList(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const docRef = doc(db, "lists", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return "404";
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getList(params.id);
  return (
    <div className="flex-1 flex">
      {data === "404" ? (
        <ListNotFound />
      ) : (
        <div className="flex-1 flex justify-center">
          <MaxWidthWrapper className="max-w-screen-md flex flex-col gap-5 my-2">
            <header className="w-full h-20 flex items-center justify-between">
              <Logo />
              <GoBackBtn label="Create a list" />
            </header>
            <ul className="flex flex-col gap-5">
              {data.todos.map((todo: ITodo) => (
                <ListItem key={todo.id} {...todo} />
              ))}
            </ul>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
}
