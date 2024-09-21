import { google } from "@lucia-auth/oauth/providers";
import { github } from "@lucia-auth/oauth/providers";
import { auth } from "./auth";

export const googleAuth = google(auth, {
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  redirectUri: "http://localhost:3000/api/auth/google/callback"
});

export const githubAuth = github(auth, {
  clientId: process.env.GITHUB_ID!,
  clientSecret: process.env.GITHUB_SECRET!
});
