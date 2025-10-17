import { TodoProvider } from "../../contexts/TodoContext";
import TodoBoard from "./components/TodoBoard";

function TodoPageContent() {
  return (
    <div>
      Here's to do
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
