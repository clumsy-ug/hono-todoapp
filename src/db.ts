import postgres from "postgres";
import { config } from '../config'

export const main = async () => {
  const sql = postgres(config.databaseUrl);

  const result = await sql`SELECT id, name FROM users WHERE id = ${1}`;
  console.log("resultだよ", result);
};
