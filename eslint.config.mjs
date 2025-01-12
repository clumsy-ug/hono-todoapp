import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";
import { DATABASE_URL } from './src/env';

export default tseslint.config(
  ...tseslint.configs.recommended,
  safeql.configs.connections({
    databaseUrl: DATABASE_URL,
    targets: [{ tag: "sql", transform: "{type}[]" }],
  })
);
