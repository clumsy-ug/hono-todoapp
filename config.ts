import dotenv from "dotenv";

dotenv.config({ path: ".env.development" });

const databaseUrl = process.env.VITE_DATABASE_URL;

if (!databaseUrl) {
  throw new Error("VITE_DATABASE_URL is not defined in .env.development");
}

export const config = {
  databaseUrl,
};
