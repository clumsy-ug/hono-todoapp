import { useSearch } from "@tanstack/react-router";

export const Hello = () => {
  const { hoge } = useSearch({ from: "/hello" });

  return (
    <div>
      <h1>Hello World</h1>
      <p>Click on the links above to see the code splitting in action.</p>
      <p> hoge: {hoge}</p>
    </div>
  );
};
