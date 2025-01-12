import postgres from "postgres";
import { DATABASE_URL } from './env'

export const main = async () => {
  const sql = postgres(DATABASE_URL);

  const result = await sql`SELECT id, name FROM users WHERE id = ${1}`;
  console.log("resultだよ", result);
};
