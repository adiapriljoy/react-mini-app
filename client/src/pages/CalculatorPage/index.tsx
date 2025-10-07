import { useCalculator } from "../../hooks/useCalculator";
import { CalculatorButton } from "./components/CalculatorButton";
import { Display } from "./components/CalculatorDisplay";

export default function CalculatorPage() {
  const {
    display,
    handleNumber,
    handleDecimal,
    handleOperator,
    handleEquals,
    handleClear,
    handlePercent,
    handleToggleSign,
  } = useCalculator();

  return (
    <div className="flex items-center justify-center pt-24">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Calculator
        </h1>
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6">
          <Display value={display} />
          <div className="grid grid-cols-4 gap-3">
            <CalculatorButton value="C" onClick={handleClear} variant="clear" />
            <CalculatorButton value="±" onClick={handleToggleSign} />
            <CalculatorButton value="%" onClick={handlePercent} />
            <CalculatorButton value="÷" onClick={handleOperator} variant="operator" />
            <CalculatorButton value="7" onClick={handleNumber} />
            <CalculatorButton value="8" onClick={handleNumber} />
            <CalculatorButton value="9" onClick={handleNumber} />
            <CalculatorButton value="×" onClick={handleOperator} variant="operator" />
            <CalculatorButton value="4" onClick={handleNumber} />
            <CalculatorButton value="5" onClick={handleNumber} />
            <CalculatorButton value="6" onClick={handleNumber} />
            <CalculatorButton value="-" onClick={handleOperator} variant="operator" />
            <CalculatorButton value="1" onClick={handleNumber} />
            <CalculatorButton value="2" onClick={handleNumber} />
            <CalculatorButton value="3" onClick={handleNumber} />
            <CalculatorButton value="+" onClick={handleOperator} variant="operator" />
            <CalculatorButton value="0" onClick={handleNumber} span={2} />
            <CalculatorButton value="." onClick={handleDecimal} />
            <CalculatorButton value="=" onClick={handleEquals} variant="equals" />
          </div>
        </div>
        <p className="text-gray-500 text-center mt-6 text-sm">
          Basic arithmetic operations with history logging
        </p>
      </div>
    </div>
  );
}
