type CalculatorButtonProps = {
  value: string | number;
  onClick: (value: string | number) => void;
  variant?: "default" | "operator" | "clear" | "equals";
  span?: 1 | 2;
};

export function CalculatorButton({
  value,
  onClick,
  variant = "default",
  span = 1,
}: CalculatorButtonProps) {
  const baseStyles =
    "h-16 rounded-lg font-semibold text-lg transition-all active:scale-95";

  const variants: Record<"default" | "operator" | "clear" | "equals", string> =
    {
      default: "bg-gray-700 hover:bg-gray-600 text-white",
      operator: "bg-orange-500 hover:bg-orange-600 text-white",
      clear: "bg-red-500 hover:bg-red-600 text-white",
      equals: "bg-green-500 hover:bg-green-600 text-white",
    };

  const spanClass = span === 2 ? "col-span-2" : "";

  return (
    <button
      onClick={() => onClick(value)}
      className={`${baseStyles} ${variants[variant]} ${spanClass}`}
    >
      {value}
    </button>
  );
}
