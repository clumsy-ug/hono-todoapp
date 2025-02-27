import { createRootRoute, Outlet } from "@tanstack/react-router"
import NavbarTop from "./-components/NavbarTop"

export const Route = createRootRoute({
  component: () => (
    <>
      <NavbarTop />
      <Outlet />
    </>
  ),
})
