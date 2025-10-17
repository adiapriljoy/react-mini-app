import { useTodo } from "../../../contexts/TodoContext";
import { todoStatuses } from "../../../utils/constant";
import TodoCard from "./TodoCard";

export default function TodoBoard() {
  const { todos } = useTodo();
  console.log(todos);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {todoStatuses.map((status) => (
        <div key={status} className="bg-gray-800 rounded-xl p-4">
          <h2 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-1">
            {status}
          </h2>
          {todos
            .filter((t) => t.status === status)
            .map((todo) => (
              <TodoCard />//nasa todo card ka na
            ))}
        </div>
      ))}
    </div>
  );
}
