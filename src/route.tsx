import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Hello } from "./client";

const rootRoute = createRootRoute({
  notFoundComponent: () => <div>Not Found... sorry</div>,
});

const helloRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hello",
  component: () => <Hello />,
  pendingComponent: () => <div>Loading...Please wait</div>,
  errorComponent: () => <div>There was an error!! Sorry</div>,
});

const routeTree = rootRoute.addChildren([helloRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
