import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { ITodo } from "../models/interface";

interface TodoContextType {
  todos: ITodo[];
  setTodos: (todo: ITodo[]) => void;
  //   addTodo: (todo: Omit<ITodo, "id" | "createdAt">) => void;
  //   updateTodo: (id: string, updated: Partial<ITodo>) => void;
  //   deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      title: "Finish React project",
      description: "Complete the Kanban-style Todo app",
      category: "Work",
      status: "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      title: "Buy groceries",
      description: "Milk, Eggs, Bread",
      category: "Personal",
      status: "Ongoing",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a TodoProvider");
  return context;
};
