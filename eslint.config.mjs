import safeql from "@ts-safeql/eslint-plugin/config";
import tseslint from "typescript-eslint";
import { config } from './config'

export default tseslint.config(
  ...tseslint.configs.recommended,
  safeql.configs.connections({
    databaseUrl: config.databaseUrl,
    targets: [{ tag: "sql", transform: "{type}[]" }],
  })
);
