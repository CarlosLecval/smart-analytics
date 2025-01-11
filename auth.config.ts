import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [Google],
  pages: {
    newUser: "/auth/update-user",
    signIn: "/"
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (!isLoggedIn && nextUrl.pathname == '/') return true

      if (isLoggedIn && nextUrl.pathname == '/') {
        return Response.redirect(`${nextUrl.origin}/home`);
      }

      return isLoggedIn;
    },
  }
} satisfies NextAuthConfig
