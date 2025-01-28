import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"

export default {
  providers: [
    Google({
      profile(profile) {
        console.log("profile", profile)
        return {
          role: profile.role ?? "user",
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
      console.log("auth", auth)
      const isLoggedIn = !!auth?.user;

      if (!isLoggedIn && nextUrl.pathname == '/') return true

      if (isLoggedIn && nextUrl.pathname == '/') {
        return Response.redirect(`${nextUrl.origin}/home`);
      }

      return isLoggedIn;
    },
    jwt({ token, user }) {
      if (user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role as string
      return session
    }
  }
} satisfies NextAuthConfig
