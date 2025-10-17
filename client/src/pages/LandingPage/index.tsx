import {
  BrainIcon,
  CalculatorIcon,
  CloudIcon,
  ListTodoIcon,
  WalletIcon,
} from "lucide-react";
import { AppCard } from "./components/AppCard";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../utils/pageRoutes";
import type { IAppItem } from "../../models/interface";

export default function LandingPage() {
  const navigate = useNavigate();

  const apps: IAppItem[] = [
    {
      id: "calculator",
      icon: CalculatorIcon,
      title: "Calculator",
      description: "Basic arithmetic operations with history logging",
      status: "Available",
      available: true,
      path: PATH.CALCULATOR,
    },
    {
      id: "todo",
      icon: ListTodoIcon,
      title: "Todo List",
      description: "Manage your tasks with create, read, update, delete",
      status: "Available",
      available: true,
      path: PATH.TODO,
    },
    {
      id: "weather",
      icon: CloudIcon,
      title: "Weather Forecast",
      description: "Check weather conditions for any location",
      status: "Coming Soon",
      available: false,
      path: "",
    },
    {
      id: "quiz",
      icon: BrainIcon,
      title: "Quiz App",
      description: "Test your knowledge with interactive quizzes",
      status: "Coming Soon",
      available: false,
      path: "",
    },
    {
      id: "expense",
      icon: WalletIcon,
      title: "Expense Tracker",
      description: "Track your income and expenses efficiently",
      status: "Coming Soon",
      available: false,
      path: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Mini Apps Collection
        </h1>
        <p className="text-gray-400 text-lg">
          A collection of useful mini applications built with React, TypeScript,
          and MongoDB
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard
            key={app.id}
            icon={app.icon}
            title={app.title}
            description={app.description}
            status={app.status}
            available={app.available}
            onClick={() => app.available && navigate(app.path)}
          />
        ))}
      </div>
      <div className="text-center mt-12 text-gray-500 text-sm">
        <p>Built with React + TypeScript + TailwindCSS + MongoDB</p>
      </div>
    </div>
  );
}
