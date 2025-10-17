import { useGetCalculations } from "../../hooks/query/useCalculationQuery";
import { useCalculator } from "../../hooks/useCalculator";
import { CalculatorButton } from "./components/CalculatorButton";
import { Display } from "./components/CalculatorDisplay";
import { CalculationHistory } from "./components/CalculatorHistory";

export default function CalculatorPage() {
  const {
    display,
    handleNumber,
    handleDecimal,
    handleOperator,
    handleClear,
    handlePercent,
    handleToggleSign,
    onEquals,
    handleDeleteCalculation,
  } = useCalculator();

  const { data: history } = useGetCalculations();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Calculator
        </h1>

        <div className="bg-gray-900 rounded-2xl shadow-2xl p-6">
          <Display value={display} />

          <div className="grid grid-cols-4 gap-3">
            <CalculatorButton
              value="C"
              onClick={handleDeleteCalculation}
              variant="clear"
            />
            <CalculatorButton
              value="CE"
              onClick={handleClear}
              variant="clear"
            />
            <CalculatorButton value="%" onClick={handlePercent} />
            <CalculatorButton
              value="÷"
              onClick={handleOperator}
              variant="operator"
            />
            <CalculatorButton value="7" onClick={handleNumber} />
            <CalculatorButton value="8" onClick={handleNumber} />
            <CalculatorButton value="9" onClick={handleNumber} />
            <CalculatorButton
              value="×"
              onClick={handleOperator}
              variant="operator"
            />
            <CalculatorButton value="4" onClick={handleNumber} />
            <CalculatorButton value="5" onClick={handleNumber} />
            <CalculatorButton value="6" onClick={handleNumber} />
            <CalculatorButton
              value="-"
              onClick={handleOperator}
              variant="operator"
            />
            <CalculatorButton value="1" onClick={handleNumber} />
            <CalculatorButton value="2" onClick={handleNumber} />
            <CalculatorButton value="3" onClick={handleNumber} />
            <CalculatorButton
              value="+"
              onClick={handleOperator}
              variant="operator"
            />
            <CalculatorButton value="±" onClick={handleToggleSign} />
            <CalculatorButton value="0" onClick={handleNumber} />
            <CalculatorButton value="." onClick={handleDecimal} />
            <CalculatorButton value="=" onClick={onEquals} variant="equals" />
          </div>
        </div>

        {history && history.length > 0 && (
          <CalculationHistory history={history ?? []} />
        )}

        <p className="text-gray-500 text-center mt-6 text-sm">
          Basic arithmetic operations with history logging
        </p>
      </div>
    </div>
  );
}
