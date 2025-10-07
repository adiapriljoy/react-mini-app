import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PATH } from "../utils/pageRoutes";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isNotLanding = location.pathname !== PATH.LANDING;

  return (
    <div>
      <div>
        {isNotLanding && (
          <button
            onClick={() => navigate(PATH.LANDING)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        )}
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
