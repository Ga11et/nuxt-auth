import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { NuxtAuthHandler } from "#auth"

export default NuxtAuthHandler({
  providers: [
    GoogleProvider.default({
      clientId: '104761496216-64e98sqadehcbv8o2e7apljv4rib6657.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    CredentialsProvider.default({
      async authorize(credentials, req) {
        const resp = await fetch('http://localhost:3000/api/login', { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(credentials) }).then(res => res.json())
        return resp
      }
    })
  ]
})