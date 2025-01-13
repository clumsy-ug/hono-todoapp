import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  safeql.configs.connections({
    databaseUrl: import.meta.env.VITE_DATABASE_URL,
    targets: [{ tag: "sql", transform: "{type}[]" }],
  })
);
