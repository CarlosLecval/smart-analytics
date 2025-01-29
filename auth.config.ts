import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { Role } from "@prisma/client"

export default {
  providers: [
    Google({
      profile(profile) {
        console.log("profile", profile)
        return {
          role: "ADMIN",
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    })
  ],
  pages: {
    newUser: "/auth/update-user",
    signIn: "/"
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (!isLoggedIn && nextUrl.pathname == '/') return true

      // Redirect user to home page if already logged in
      if (isLoggedIn && nextUrl.pathname == '/' && auth.user.role === 'USER') {
        return Response.redirect(`${nextUrl.origin}/home`);
      }

      const dashboardRegex = /\/dashboard\/?\S*/;

      // if /dashboard/* redirect user to home if the user role is USER and is logged in
      if (isLoggedIn && dashboardRegex.test(nextUrl.pathname) && auth.user.role === 'USER') {
        return Response.redirect(`${nextUrl.origin}/home`);
      }

      // if not /dashboard/* redirect user to dashboard if the user role is ADMIN and is logged in
      if (isLoggedIn && !dashboardRegex.test(nextUrl.pathname) && auth.user.role === 'ADMIN') {
        return Response.redirect(`${nextUrl.origin}/dashboard/`);
      }

      // Redirect user to dashboard if the user role is ADMIN and is logged in
      if (isLoggedIn && nextUrl.pathname == '/' && auth.user.role === 'ADMIN') {
        return Response.redirect(`${nextUrl.origin}/dashboard`);
      }

      return isLoggedIn;
    },
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role as Role
      return session
    }
  }
} satisfies NextAuthConfig
