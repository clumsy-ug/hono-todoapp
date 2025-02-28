import { Link } from "@tanstack/react-router";
import { IndexProps } from "../-types";
import { use } from "react";

export default function IndexPromiseReceiver({ response }: IndexProps) {
  const _response = use(response)
  const text = use(_response.text())

  return (
    <Link to="/todos">{text}</Link>
  )
}
