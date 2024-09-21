
'use server'

import { auth } from "@/core/lib/auth";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.DB_URL!,
  authToken: process.env.AUTH_TOKEN
});

export async function registerUser(formData: FormData) {
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!username || !email || !password) {
    return { error: "Missing fields" };
  }

  try {
    const user = await auth.createUser({
      key: {
        providerId: "email",
        providerUserId: email,
        password
      },
      attributes: {
        username,
        email
      }
    });
    const session = await auth.createSession({
      userId: user.userId,
      attributes: {}
    });
    const authRequest = auth.handleRequest("POST", {
      headers: {
        cookie: ""
      }
    });
    authRequest.setSession(session);
    return { success: true, sessionId: session.sessionId };
  } catch (e) {
    if (e instanceof OAuthRequestError) {
      return { error: "Invalid email or password" };
    }
    return { error: "An unknown error occurred" };
  }
}
