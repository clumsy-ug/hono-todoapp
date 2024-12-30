import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Hello } from "./client";
import { number, object, parse } from "valibot";

const rootRoute = createRootRoute();

const querySchema = object({
  hoge: number(),
});

const helloRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hello",
  component: () => <Hello />,
  validateSearch: (search: Record<string, unknown>) => {
    return parse(querySchema, search);
  },
});
const routeTree = rootRoute.addChildren([helloRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
