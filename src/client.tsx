import { Link, useNavigate } from "@tanstack/react-router";

export const Hello = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello World</h1>
      <p>Click on the links above to see the code splitting in action.</p>
      <Link to="/">Go to Home</Link>
      <button
        onClick={() =>
          navigate({
            to: "/",
          })
        }
      >
        Go to Lazy
      </button>
    </div>
  );
};
