import { Link } from "@tanstack/react-router";
import { useGetIndex } from "../-functions";

export default function Index() {
  const { data } = useGetIndex()

  return (
    <Link to="/todos">{data}</Link>
  )
}
