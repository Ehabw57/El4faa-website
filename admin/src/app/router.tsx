import { createBrowserRouter, Navigate } from "react-router-dom";
import { AdminLayout } from "../components/layout/AdminLayout";
import { LoginPage } from "../features/auth/pages/LoginPage";
import { DashboardPage } from "../features/dashboard/pages/DashboardPage";
import { MediaPage } from "../features/media/pages/MediaPage";
import { NeedsPage } from "../features/needs/pages/NeedsPage";
import { NewsPage } from "../features/news/pages/NewsPage";
import { StagesPage } from "../features/stages/pages/StagesPage";

export const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "needs", element: <NeedsPage /> },
      { path: "stages", element: <StagesPage /> },
      { path: "news", element: <NewsPage /> },
      { path: "media", element: <MediaPage /> },
    ],
  },
]);
