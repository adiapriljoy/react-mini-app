import { useCallback, useState, useEffect } from "react";
import {
  useAddCalculation,
  useDeleteAllCalculations,
} from "./mutation/useCalculationMutation";

export function useCalculator() {
  const [display, setDisplay] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | number | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [expression, setExpression] = useState<string>("");

  const addCalculation = useAddCalculation();
  const deleteCalculation = useDeleteAllCalculations();

  const onEquals = () => {
    const result = handleEquals();
    if (result !== null && result !== undefined) {
      addCalculation.mutate({
        expression,
        result: String(result),
      });
    }
  };

  const handleDeleteCalculation = () => {
    handleClear();
    deleteCalculation.mutate();
  };

  const calculate = useCallback(
    (
      firstValue: number,
      secondValue: number,
      operator: string | number
    ): number | string => {
      switch (operator) {
        case "+":
          return firstValue + secondValue;
        case "-":
          return firstValue - secondValue;
        case "×":
          return firstValue * secondValue;
        case "÷":
          return secondValue !== 0 ? firstValue / secondValue : "Error";
        default:
          return secondValue;
      }
    },
    []
  );

  const handleNumber = useCallback(
    (num: string | number) => {
      const numStr = String(num);

      setDisplay((prev) =>
        waitingForOperand ? numStr : prev === "0" ? numStr : prev + numStr
      );
      setWaitingForOperand(false);
      setExpression((prev) => prev + numStr);
    },
    [waitingForOperand]
  );

  const handleDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      setExpression((prev) => prev + "0.");
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
      setExpression((prev) => prev + ".");
    }
  }, [waitingForOperand, display]);

  const handleOperator = useCallback(
    (nextOperator: string | number) => {
      const inputValue = parseFloat(display);
      if (previousValue === null) {
        setPreviousValue(inputValue);
        setExpression(display + " " + nextOperator + " ");
      } else if (operator) {
        const result = calculate(previousValue, inputValue, operator);
        setDisplay(String(result));
        setPreviousValue(typeof result === "number" ? result : null);
        setExpression((prev) => prev + display + " " + nextOperator + " ");
      }
      setWaitingForOperand(true);
      setOperator(nextOperator);
    },
    [display, previousValue, operator, calculate]
  );

  const handleEquals = useCallback(() => {
    const inputValue = parseFloat(display);
    if (operator && previousValue !== null) {
      const result = calculate(previousValue, inputValue, operator);
      const fullExpression = `${previousValue} ${operator} ${inputValue}`;
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
      setExpression(fullExpression);
      return result;
    }
    return null;
  }, [display, previousValue, operator, calculate]);

  const handleClear = useCallback(() => {
    setDisplay("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setExpression("");
  }, []);

  const handlePercent = useCallback(() => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  }, [display]);

  const handleToggleSign = useCallback(() => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  }, [display]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key;

      if (!isNaN(Number(key))) {
        handleNumber(key);
      } else if (key === ".") {
        handleDecimal();
      } else if (["+", "-", "*", "/", "x", "X"].includes(key)) {
        const operatorMap: Record<string, string> = {
          "*": "×",
          x: "×",
          X: "×",
          "/": "÷",
        };
        handleOperator(operatorMap[key] || key);
      } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        onEquals();
      } else if (key === "Backspace") {
        handleClear();
      } else if (key === "Delete") {
        handleDeleteCalculation();
      } else if (key === "%") {
        handlePercent();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleNumber, handleDecimal, handleOperator, handleClear, handlePercent]);

  return {
    display,
    expression,
    handleNumber,
    handleDecimal,
    handleOperator,
    handleEquals,
    handleClear,
    handlePercent,
    handleToggleSign,
    onEquals,
    handleDeleteCalculation,
  };
}
