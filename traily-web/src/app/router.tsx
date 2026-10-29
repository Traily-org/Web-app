import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/components/root-layout";
import { DashboardPage } from "@/pages/dashboard";
import { NotFoundPage } from "@/pages/not-found";
import { PhotosPage } from "@/pages/photos";
import { ReportsPage } from "@/pages/reports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: "photos", element: <PhotosPage /> },
            { path: "reports", element: <ReportsPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);
