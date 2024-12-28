import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Hello } from "./client";

const rootRoute = createRootRoute({});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Hello />,
});

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
