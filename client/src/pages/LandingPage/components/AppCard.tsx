import type { IAppItem } from "../../../models/interface";

interface AppCardProps extends Omit<IAppItem, "id" | "path"> {
  onClick: () => void;
}

export function AppCard({
  icon: Icon,
  title,
  description,
  status,
  onClick,
  available,
}: AppCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={!available}
      className={`
        relative overflow-hidden rounded-xl p-6 text-left transition-all
        ${
          available
            ? "bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
            : "bg-gray-800/50 cursor-not-allowed opacity-50"
        }
      `}
    >
      <div
        className={`inline-flex p-3 rounded-lg mb-4 ${
          available ? "bg-blue-500/20" : "bg-gray-700/50"
        }`}
      >
        <Icon
          className={`w-8 h-8 ${available ? "text-blue-400" : "text-gray-500"}`}
        />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <span
        className={`
        inline-block px-3 py-1 rounded-full text-xs font-semibold
        ${
          status === "Available"
            ? "bg-green-500/20 text-green-400"
            : "bg-yellow-500/20 text-yellow-400"
        }
      `}
      >
        {status}
      </span>
      {available && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      )}
    </button>
  );
}
