import postgres from "postgres";

export const main = async () => {
  const sql = postgres(import.meta.env.VITE_DATABASE_URL);

  const result = await sql`SELECT id, name FROM users WHERE id = ${1}`;
  console.log("resultだよ", result);
};
