import { lucia } from "lucia";
import { libsql } from "@lucia-auth/adapter-sqlite";
import { nextjs_future } from "lucia/middleware";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.AUTH_TOKEN
});

export const auth = lucia({
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: nextjs_future(),
  adapter: libsql(client, {
    user: "user",
    session: "user_session",
    key: "user_key"
  }),
  getUserAttributes: (data) => {
    return {
      username: data.username,
      email: data.email
    };
  }
});

export type Auth = typeof auth;
