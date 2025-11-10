import { Edit2, Trash2 } from "lucide-react";
import type { ITodo } from "../../../models/interface";

interface TodoCardProps {
  todo: ITodo;
  colorClass: string;
}

export default function TodoCard({ todo, colorClass }: TodoCardProps) {
  return (
    <div className={`p-4 rounded-lg mb-3 shadow-md ${colorClass}`}>
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{todo.title}</h3>
        <div className="flex gap-2">
          <button>
            <Edit2 size={20} className="text-blue-300 hover:text-blue-400" />
          </button>
          <button>
            <Trash2 size={20} className="text-red-300 hover:text-red-400" />
          </button>
        </div>
      </div>
      <p className="text-gray-100 text-sm mt-2">{todo.description}</p>
      <span className="inline-block mt-2 text-xs bg-gray-600 px-2 py-1 rounded-full text-gray-200">
        {todo.category}
      </span>
    </div>
  );
}
