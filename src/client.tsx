import { createRoot } from "react-dom/client";
import Home from "./components/Home";
import Auth from "./components/Auth";

function App() {
  return (
    <>
      <h1>welcome</h1>
      <Home />
      <Auth />
    </>
  )
}

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
