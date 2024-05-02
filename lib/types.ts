export type ITodo = {
  id: string;
  title: string;
};

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todoTitle: string) => void;
  updateTodo: (id: string, todoTitle: string) => void;
  deleteTodo: (id: string) => void;
  resetTodos: () => void;
};
