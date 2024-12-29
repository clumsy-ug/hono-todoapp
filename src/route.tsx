import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Hello } from "./client";

const rootRoute = createRootRoute({});

const helloRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/fire/$helloId",
  component: () => <Hello />,
});
const routeTree = rootRoute.addChildren([helloRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
