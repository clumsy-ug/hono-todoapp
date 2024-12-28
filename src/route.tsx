import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { Hello } from "./client";
import { Layout } from "./components/Layout";

const rootRoute = createRootRoute({});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hello",
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const helloRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/foo",
  component: () => <Hello />,
});

const routeTree = rootRoute.addChildren([indexRoute.addChildren([helloRoute])]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
