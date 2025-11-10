import { useTodo } from "../../../contexts/TodoContext";
import { todoStatusColor, todoStatuses } from "../../../utils/constant";
import TodoCard from "./TodoCard";

export default function TodoBoard() {
  const { todos } = useTodo();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {todoStatuses.map((status) => (
        <div
          key={status}
          className={`rounded-xl p-4 backdrop-blur-md ${todoStatusColor[status].board} transition-colors`}
        >
          <h2 className="text-lg font-semibold mb-3 border-b border-y-slate-500 pb-1">
            {status}
          </h2>
          {todos
            .filter((t) => t.status === status)
            .map((todo) => (
              <TodoCard todo={todo} colorClass={todoStatusColor[status].card} />
            ))}
        </div>
      ))}
    </div>
  );
}
