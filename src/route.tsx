// import {
//   createRootRoute,
//   createRoute,
//   createRouter,
//   Outlet,
// } from "@tanstack/react-router";
// import { Hello } from "./client";
// import { Layout } from "./components/Layout";

// const rootRoute = createRootRoute({});

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/hello",
//   component: () => (
//     <Layout>
//       <Outlet />
//     </Layout>
//   ),
// });

// const helloRoute = createRoute({
//   getParentRoute: () => indexRoute,
//   path: "/foo",
//   component: () => <Hello />,
// });

// const routeTree = rootRoute.addChildren([indexRoute.addChildren([helloRoute])]);

// export const router = createRouter({ routeTree });

// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }




import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
const rootRoute = createRootRoute({});

const greetingRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "greeting",
});

const helloRoute = createRoute({
  getParentRoute: () => greetingRoute,
  path: "/hello",
  component: () => <p>Hello</p>,
});

const byeRoute = createRoute({
  getParentRoute: () => greetingRoute,
  path: "/bye",
  component: () => <p>Bye</p>,
});

const routeTree = rootRoute.addChildren([
  greetingRoute.addChildren([helloRoute, byeRoute]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
