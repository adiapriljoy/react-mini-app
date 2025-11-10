import { Plus } from "lucide-react";
import { TodoProvider } from "../../contexts/TodoContext";
import TodoBoard from "./components/TodoBoard";

function TodoPageContent() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white text-center mb-8">
        To Do List
      </h1>
      <div className="flex justify-end">
        <button className="flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-white px-3 py-2 rounded-md shadow">
          <Plus size={18} />
          Add Task
        </button>
      </div>
      <TodoBoard />
    </div>
  );
}

export default function TodoPage() {
  return (
    <TodoProvider>
      <TodoPageContent />
    </TodoProvider>
  );
}
