import { useRef, useEffect } from "react";
import type { ICalculation } from "../../../models/interface";

interface CalculationHistoryProps {
  history: ICalculation[];
}

export function CalculationHistory({ history }: CalculationHistoryProps) {
  const historyEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  return (
    <div className="mt-6 bg-gray-800 rounded-xl p-4 text-gray-300 overflow-y-none">
      <h2 className="font-semibold text-lg mb-2 text-white text-center">
        History
      </h2>
      <ul className="space-y-1 text-sm max-h-28 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-transparent scrollbar-thumb-slate-600 scrollbar-track-slate-300 overflow-y-auto">
        {history
          .slice(-10)
          .reverse()
          .map((item) => (
            <li key={item._id} className="flex justify-between">
              <span>{item.expression}</span>
              <span className="text-green-400">= {item.result}</span>
            </li>
          ))}
        <div ref={historyEndRef} />
      </ul>
    </div>
  );
}
