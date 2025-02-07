import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./route";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <TanStackRouterDevtools router={router} />
  </StrictMode>
);
